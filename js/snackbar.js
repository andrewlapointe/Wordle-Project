function snackbar(a) {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Change the HTML text
  if (a === 1) {
    x.innerHTML = "You can't enter yet!";
  } else if (a === 2) {
    x.innerHTML = "Press enter to check the row!";
  } else if (a === 3) {
    x.innerHTML = "You Win! Time to try again!";
  } else {
    x.innerHTML = "Sorry! This form doesn't work yet.";
  }
  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}
