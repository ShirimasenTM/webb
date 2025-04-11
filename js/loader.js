window.addEventListener("load", function () {
  const loader = document.getElementById("loading-screen");
  setTimeout(() => {
    loader.classList.add("fade-out");
  }, 1500);
});
