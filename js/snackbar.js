function snackbar(a, secretWord) {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Change the HTML text
  if (a === 1) {
    x.innerHTML = "You can't enter yet!";
  } else if (a === 2) {
    x.innerHTML = "Press enter to check the row!";
  } else if (a === 3) {
    x.innerHTML = "You Win! Time to try again!";
  } else if (a === 4) {
    x.innerHTML = "Not a valid guess";
  } else if (a === 5) {
    x.innerHTML = "There is nothing to delete";
  } else if (a === 6) {
    x.innerHTML = "Game Over. The secret word was:" + secretWord;
  } else {
    x.innerHTML = "Not a valid guess";
  }
  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}
