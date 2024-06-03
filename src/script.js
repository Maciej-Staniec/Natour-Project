document.addEventListener("DOMContentLoaded", function () {
  // Responsive video
  const video = document.querySelector(".bg-video__content");

  if (video) {
    const width = window.innerWidth;
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
  // Navigation functionality

  // Close the nav menu if one of those links is clicked
  const navLinks = document.querySelectorAll(".navigation_link");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      const navCheckbox = document.querySelector(".navigation_checkbox");
      navCheckbox.checked = false;
    });
  });

  // Popup close functionality
});
