# Telegram Video Streaming Site

This site lets you stream videos stored on Telegram using a serverless function as a proxy to retrieve video URLs.

## Setup

1. **Deploy the Serverless Proxy Function**  
   Set up a serverless function to fetch video files from Telegram. This function should take a `file_id` parameter and return a URL for the video. Place your function link in `script.js`.

2. **Deploy the Website**  
   - Push this repository to GitHub.
   - Go to your repository settings, enable GitHub Pages, and set the branch (usually `main` or `master`).
   
3. **Load Videos**  
   Use the button in the HTML file to load videos by calling the `loadVideo` function with the appropriate Telegram `file_id`.

## Serverless Proxy Example

Use platforms like Vercel, Netlify, or AWS Lambda for the serverless function. Ensure it:
- Accepts a `file_id` query parameter.
- Returns a JSON object with `videoUrl` pointing to the file path on Telegram.

### Security
Keep your Telegram bot token secure. Avoid exposing it directly in the front end.
