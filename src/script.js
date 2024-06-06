document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollToPlugin);

  // *********** FUNCTIONS ***********

  // Scroll to a section
  function scrollToSection(sectionId) {
    gsap.to(window, { duration: 2, scrollTo: sectionId });
  }

  // *********** Responsive video functionality ***********
  const video = document.querySelector(".bg-video__content");

  if (video) {
    const width = window.innerWidth;
    if (width <= 900) {
      // Tablet size
      video.innerHTML = `
        <source src="img/video-tablet.mp4" type="video/mp4">
        <source src="img/video-tablet.webm" type="video/webm">
        Your browser is not supported!
      `;
    } else {
      // Desktop size
      video.innerHTML = `
        <source src="img/video.mp4" type="video/mp4">
        <source src="img/video.webm" type="video/webm">
        Your browser is not supported!
      `;
    }

    video.load(); // load the video based on the screen width
  } else {
    console.error("Video element not found");
  }

  // *********** Navigation functionality ***********

  const navLinks = document.querySelectorAll(".navigation__link");
  navLinks.forEach(function (link) {
    // Add a click event listener to each link.
    link.addEventListener("click", function (event) {
      // Prevent the default behavior of the link, which is to jump to the section instantly.
      event.preventDefault();

      // ====== Popup close functionality ======

      // Get the input element of the checkbox type, which is the element with a navigation__checkbox class.
      const navCheckbox = document.querySelector(".navigation__checkbox");
      // Close the Navigation when a nav link is clicked
      navCheckbox.checked = false;
      // console.log("Clicked");

      // ====== SMOOTH SCROLL SUPPORT ======
      // Smooth scrolling to sections using GSAP package

      // Get the href attribute of the clicked link, which contains the ID of the target section.
      const targetId = this.getAttribute("href");
      // console.log(targetId);

      // Call the scrollToSection function with the target ID to perform the smooth scroll.
      scrollToSection(targetId);
    });
  });
});
