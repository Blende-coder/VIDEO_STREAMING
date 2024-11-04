async function playVideo() {
    const fileId = document.getElementById('fileIdInput').value;
    const source = document.getElementById('sourceSelect').value;
    const videoPlayer = document.getElementById('videoPlayer');

    if (source === "telegram") {
        // For Telegram, call the backend API to get the video URL
        try {
            const response = await fetch(`/.netlify/functions/get-video-url?file_id=${fileId}`);
            const data = await response.json();

            videoPlayer.src = data.videoUrl;
            videoPlayer.style.display = 'block';
        } catch (error) {
            console.error('Error fetching Telegram video:', error);
            alert("Failed to load Telegram video.");
        }
    } else if (source === "drive") {
        // For Google Drive, construct the embed URL directly
        videoPlayer.src = `https://drive.google.com/uc?export=preview&id=${fileId}`;
        videoPlayer.style.display = 'block';
    }
}
