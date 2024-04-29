window.addEventListener("resize", function () {
  const gridItems = document.querySelectorAll(".gridItem"); // Select all elements with class 'gridItem'
  const screenWidth = window.innerWidth;

  gridItems.forEach(function (gridItem) {
    if (screenWidth <= 900) {
      gridItem.classList.remove("col-1-of-4");
      gridItem.classList.add("col-1-of-2");
    } else {
      gridItem.classList.remove("col-1-of-2");
      gridItem.classList.add("col-1-of-4");
    }
  });
});
