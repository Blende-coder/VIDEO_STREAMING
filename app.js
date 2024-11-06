// Function to extract file ID from the Google Drive URL
function extractFileId(url) {
    const regex = /(?:drive|docs)\.google\.com\/.*\/d\/([^\/?]+)/;
    const matches = url.match(regex);
    return matches && matches[1]; // Return the file ID or null if not found
}

// Function to handle the play button click
function playVideo() {
    const input = document.getElementById('driveLinkInput').value;
    const fileId = extractFileId(input); // Extract the file ID from the URL

    if (fileId) {
        const videoUrl = "https://drive.google.com/uc?id=" + fileId; // Construct the direct link
        const videoElement = document.getElementById('videoPlayer');
        const videoSource = document.getElementById('videoSource');

        videoSource.src = videoUrl; // Set the source to the new URL
        videoElement.style.display = "block"; // Show the video player
        videoElement.load(); // Reload the video player to update the source
        videoElement.play(); // Play the video
    } else {
        alert('Invalid Google Drive link or file ID');
    }
}

// Clear the input field when the "Clear" button is clicked
function clearInput() {
    document.getElementById('driveLinkInput').value = '';
}
