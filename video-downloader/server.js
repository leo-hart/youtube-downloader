const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Enable CORS
const corsOptions = {
    origin: ['http://127.0.0.1:5500', 'http://localhost:5500'], // Allow both
    methods: 'POST',
    allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions));

// Middleware
app.use(bodyParser.json());

// Endpoint to process video download
app.post('/process', (req, res) => {
    console.log('Request received:', req.body);
    const { videoUrl, format } = req.body;

    if (!videoUrl || !format) {
        return res.status(400).json({ error: 'Missing videoUrl or format in request.' });
    }

    console.log(`Processing download: ${videoUrl} as ${format}`);

    const outputFileName = `video.${format}`;
    const outputPath = path.join(__dirname, outputFileName);

    // Command to download the video
    const command = `yt-dlp -f best -o "${outputPath}" "${videoUrl}"`;

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error downloading video: ${stderr || error.message}`);
            return res.status(500).json({ error: 'Failed to download video. Please check the video URL.' });
        }
        console.log(`Download complete: ${stdout}`);

        // Check if the file exists
        if (!fs.existsSync(outputPath)) {
            console.error('Downloaded file not found.');
            return res.status(500).json({ error: 'Failed to find downloaded video file.' });
        }

        // Stream the file as a browser download
        res.download(outputPath, outputFileName, (err) => {
            if (err) {
                console.error(`Error sending file: ${err.message}`);
                res.status(500).json({ error: 'Failed to send video for download.' });
            } else {
                console.log(`File sent successfully: ${outputPath}`);

                // Clean up temporary file after sending
                fs.unlink(outputPath, (unlinkErr) => {
                    if (unlinkErr) console.error(`Error deleting file: ${unlinkErr.message}`);
                    else console.log(`Temporary file deleted: ${outputPath}`);
                });
            }
        });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
