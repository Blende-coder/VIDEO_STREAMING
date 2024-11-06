// Function to play the video from Google Drive
function playVideo() {
    var input = document.getElementById("driveLinkInput").value; // Get the link or ID from input
    var videoSource = document.getElementById("videoSource");
    var videoPlayer = document.getElementById("videoPlayer");

    // Regular expression pattern to match Google Drive links
    var driveLinkPattern = /(?:drive\.google\.com\/.*\/d\/)([^\/?]+)/;
    var match = input.match(driveLinkPattern);

    if (match) {
        // Extract file ID from Google Drive link
        var fileId = match[1];
        var directLink = "https://drive.google.com/uc?id=" + fileId; // Construct direct URL

        // Set the video source to the Google Drive direct link
        videoSource.src = directLink;
        videoPlayer.load(); // Reload video player with new source
        videoPlayer.style.display = "block"; // Make sure the video player is visible
        videoPlayer.play(); // Start playing the video
    } else {
        // If the input is not a valid Google Drive link, show an alert
        alert("Please enter a valid Google Drive video link.");
    }
}

// Function to clear the input field when "Clear" button is clicked
function clearInput() {
    document.getElementById("driveLinkInput").value = ""; // Clear the input field
}
