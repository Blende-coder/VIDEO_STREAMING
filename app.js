function playVideo() {
    // Get the user input
    const userInput = document.getElementById("driveLinkInput").value;

    // Regular expression to extract the file ID from a Google Drive URL
    const fileIdRegex = /[-\w]{25,}/;
    const match = userInput.match(fileIdRegex);

    if (match) {
        const fileId = match[0]; // Extracted file ID
        const videoUrl = `https://drive.google.com/uc?export=preview&id=${fileId}`;

        // Set the video source URL and display the player
        const videoPlayer = document.getElementById("videoPlayer");
        const videoSource = document.getElementById("videoSource");
        videoSource.src = videoUrl;
        videoPlayer.load(); // Reload the video player with the new source
        videoPlayer.style.display = "block"; // Show the video player
    } else {
        alert("Please enter a valid Google Drive link or file ID.");
    }
}

window.addEventListener("load", function() {
    // Add the 'hidden' class to fade out the loading screen
    document.getElementById("loadingScreen").classList.add("hidden");
    // Delay showing content to allow fade-out transition
    setTimeout(() => {
        document.getElementById("loadingScreen").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 500); // Wait for the fade-out transition (500ms)
});