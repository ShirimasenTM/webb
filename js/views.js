function showDownloadView() {
  document.getElementById("welcomeView").style.display = "none";
  document.getElementById("downloadView").style.display = "block";
}

function showHomeView() {
  document.getElementById("downloadView").style.display = "none";
  document.getElementById("welcomeView").style.display = "block";
}
