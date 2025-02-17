const request = require('supertest')
const app = require('../video-downloader/server')

describe('POST /process', () => {
    it('should return video metadata for a valid YouTube URL', async () => {
        const response = await request(app)
        .post('/process')
        .send({ url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'})

        expect(response.status).toBe(200);
        expect(response.status).toBe(true);
        expect(response.body.platform).toBe('YouTube');
        expect(response.body.title).toBeDefined();
        expect(response.body.fileSize).toBeDefined();
    });

    it('should return an error for an unsupported platform', async () => {
        const response = await request(app)
            .post('/process')
            .send({ url: "https://unsupportedplatform.com/video/123"});

        expect(response.status).toBe(400);
        expect(response.body.error).toBe('Unsupported platform')
    });

    it('should return an error for an invalid URL', async () => {
        const response = await request(app)
            .post('/process')
            .send({ url: ''})

        expect(response.status).toBe(400);
        expect(response.body.error).toBe('Video URL is required')
    });

});