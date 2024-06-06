document.addEventListener("DOMContentLoaded",function(){gsap.registerPlugin(ScrollToPlugin);var e,o=document.querySelector(".bg-video__content");o?(e=window.innerWidth,o.innerHTML=e<=900?`
        <source src="img/video-tablet.mp4" type="video/mp4">
        <source src="img/video-tablet.webm" type="video/webm">
        Your browser is not supported!
      `:`
        <source src="img/video.mp4" type="video/mp4">
        <source src="img/video.webm" type="video/webm">
        Your browser is not supported!
      `,o.load()):console.error("Video element not found"),document.querySelectorAll(".navigation__link").forEach(function(e){e.addEventListener("click",function(e){e.preventDefault();document.querySelector(".navigation__checkbox").checked=!1;e=this.getAttribute("href");gsap.to(window,{duration:2,scrollTo:e})})})});