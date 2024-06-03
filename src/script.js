document.addEventListener("DOMContentLoaded", function () {
  var video = document.querySelector(".bg-video__content");

  if (video) {
    var width = window.innerWidth;
    if (width <= 900) {
      // Tablet
      video.innerHTML = `
        <source src="img/video-tablet.mp4" type="video/mp4">
        <source src="img/video-tablet.webm" type="video/webm">
        Your browser is not supported!
      `;
    } else {
      // Desktop
      video.innerHTML = `
        <source src="img/video.mp4" type="video/mp4">
        <source src="img/video.webm" type="video/webm">
        Your browser is not supported!
      `;
    }

    video.load(); // Reload the video with new sources
  } else {
    console.error("Video element not found");
  }
});
