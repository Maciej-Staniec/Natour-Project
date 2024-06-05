import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollToPlugin);

// *********** FUNCTIONS ***********
function scrollToSection(sectionId) {
  gsap.to(window, { duration: 1, scrollTo: sectionID });
}

document.addEventListener("DOMContentLoaded", function () {
  // *********** Responsive video functionality ***********
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

  // *********** Navigation functionality ***********

  const navLinks = document.querySelectorAll(".navigation__link");
  console.log(navLinks);
  navLinks.forEach(function (link) {
    // Add a click event listener to each link.
    link.addEventListener("click", function () {
      // Prevent the default behavior of the link, which is to jump to the section instantly.
      event.preventDefault();

      // ====== Popup close functionality ======

      // Get the input element of the checkbox type, which is the element with a navigation__checkbox class.
      const navCheckbox = document.querySelector(".navigation__checkbox");
      // Close the Navigation when a nav link is clicked
      navCheckbox.checked = false;
      console.log("Clicked");

      // ====== SMOOTH SCROLL SUPPORT ======
      // Smooth scrolling to sections using GSAP package

      // Get the href attribute of the clicked link, which contains the ID of the target section.
      const targetId = this.getAttribute("href");

      // Call the scrollToSection function with the target ID to perform the smooth scroll.
      scrollToSection(targetId);
    });
  });
});
