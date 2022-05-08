function showMenu() {
  // Get the snackbar DIV
  var x = document.getElementById("menu");

  // Add the "show" class to DIV
  x.className = "show";
}

function hideMenu() {
  // Get the snackbar DIV
  var x = document.getElementById("welcome");

  // Add the "show" class to DIV
  x.className = "hide";
  // x.style.visibility = "hidden";
}

function reload() {
  window.location.reload();
}
