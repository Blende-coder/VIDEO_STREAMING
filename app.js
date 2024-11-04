async function playVideo() {
    const fileId = document.getElementById('fileIdInput').value;
    try {
        const response = await fetch(`/.netlify/functions/get-video-url?file_id=${fileId}`);
        const data = await response.json();

        const videoPlayer = document.getElementById('videoPlayer');
        videoPlayer.src = data.videoUrl;
        videoPlayer.style.display = 'block';
    } catch (error) {
        console.error('Error fetching video:', error);
    }
}
