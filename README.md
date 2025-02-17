# YouTube Downloader

A sleek, fast, and easy-to-use YouTube video downloader. Simply paste the URL, choose your format, and download your video in seconds!

The YouTube Downloader is a powerful and simple tool designed to help users to quickly download YouTube videos. Built with a intuitive interface, this project allows users to paste a YouTube video URL, select their preferred format (MP4 or MOV), and download the video directly to their device. Whether you're saving videos for offline viewing, creating content, or archiving important clips, this tool makes the process seamless and hassle-free.

## Features
- Simple and Intuitive Interface: A clean, user-friendly design that makes downloading videos effortless.
- Fast Downloads: Leverages yt-dlp, one of the most efficient YouTube download libraries, to ensure quick and reliable downloads.
- Multiple Formats: Supports downloading videos in MP4 and MOV formats.
- Cross-Platform: Works on any device with a web browser.
- Error Handling: Provides clear error messages for invalid URLs or server issues.
- Open Source: Fully customizable and open-source, allowing developers to extend or modify the tool as needed.

## Installation

### WindowsOS

1. Install Node.js
    
    Download and install Node.js from the official website (https://nodejs.org/en).
    
    Ensure Node.js and npm (Node Package Manager) are installed by running:
    ```bash
    node -v
    npm -v

2. Install yt-dlp:
    
    Ensure yt-dlp is installed on your system. You can download it from yt-dlp's official GitHub page (https://github.com/yt-dlp/yt-dlp).
    
    Verify the installation by running:
    ```bash
    yt-dlp --version

3. Clone the Repository:
    ```bash
    git clone https://github.com/leo-hart/youtube-downloader.git
    cd youtube-downloader

4. Install Dependencies:
    ```bash
    npm install express body-parser cors

5. Start the Server:
    ```bash
    node server.js

6. Open the Application:

    Launch the index.html file in your browser or use a local server (e.g., Live Server in VS Code).

### macOS/Linux (Unix-Based Systems )
1. Install Node.js

- On Linux, use your package manager:
    ```bash
    sudo apt update
    sudo apt install nodejs npm

- On macOS, use Homebrew:
    ```bash
    brew install node

- Verify the installation:
    ```bash
    node -v
    npm -v

2. Install yt-dlp
- Use the following command to install yt-dlp:
    ```bash
    sudo curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o /usr/local/bin/yt-dlp
    sudo chmod a+rx /usr/local/bin/yt-dlp

- Verify the installation:
    ```bash
    yt-dlp --version

3. Clone the Repository:
    ```bash
    git clone https://github.com/leo-hart/youtube-downloader.git
    cd youtube-downloader

4. Install Dependencies:
    ```bash
    npm install express body-parser cors

5. Start the Server:
    ```bash
    node server.js

6. Open the Application

    Open the index.html file in your browser or use a local server (e.g., Live Server in VS Code).

## Usage

Copy and paste the URL of the YouTube video you want to download and select the format. The video will be processed and downloaded directly to your device.

## Technologies Used
Backend:
- Node.js: A fast and scalable runtime environment for the server.
- Express.js: A minimal and flexible web framework for handling HTTP requests.
- yt-dlp: A powerful command-line tool for downloading videos from YouTube and other platforms.
- CORS: Enables secure cross-origin requests between the frontend and backend.

Frontend:
- HTML5: Provides the structure of the web interface.
- CSS3: Styles the application with a modern, dark-themed design.
- JavaScript: Handles user interactions and communicates with the backend.
- XMLHttpRequest: Sends asynchronous requests to the server for video processing.
- CSS Flexbox: Ensures a responsive and centered layout.