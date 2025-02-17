document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('downloadButton').addEventListener('click', function () {
        const videoUrl = document.getElementById('videoUrl').value;
        const format = document.getElementById('formatSelect').value;

        if (!videoUrl || !format) {
            alert('Please provide a valid video URL and select a format.');
            return;
        }

        const requestData = JSON.stringify({ videoUrl, format });

        // Create an XMLHttpRequest
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:3000/process', true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.responseType = 'blob'; // Expect a blob (binary data)

        xhr.onload = function () {
            if (xhr.status === 200) {
                // Create a temporary link to download the blob
                const url = window.URL.createObjectURL(xhr.response);
                const a = document.createElement('a');
                a.href = url;
                a.download = `video.${format}`; // Suggested file name
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a); // Clean up
                window.URL.revokeObjectURL(url); // Revoke URL after download

            } else {
                console.error('Error:', xhr.status, xhr.statusText);
                alert('Error processing the video. Please try again.');
            }
        };

        xhr.onerror = function () {
            console.error('Network Error: Unable to connect to the server.');
            alert('Error connecting to the server. Please try again.');
        };

        // Send the request
        console.log('Sending request to server:', requestData);
        xhr.send(requestData);
    });
});
