async function loadVideo(fileId) {
    try {
        // Call the serverless function to get the video URL
        const response = await fetch(`https://your-serverless-function.com/getVideo?file_id=${fileId}`);
        const { videoUrl } = await response.json();

        // Load the video in the player
        const videoPlayer = document.getElementById('videoPlayer');
        videoPlayer.src = videoUrl;
    } catch (error) {
        console.error('Error loading video:', error);
    }
}
return {
    statusCode: 200,
    headers: {
        "Access-Control-Allow-Origin": "*",  // Allows all origins, but you can restrict it to your domain
        "Access-Control-Allow-Methods": "GET, OPTIONS",
    },
    body: JSON.stringify({ videoUrl }),
};
