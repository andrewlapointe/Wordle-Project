currentTile = 0;
currentTilePos = 0;
currentRow = [];

const secretWords = ["JAZZY", "OTHER", "THERE"];
let secretWord = secretWords[Math.floor(Math.random() * secretWords.length)];
console.log(secretWord);

function cover(letter) {
  tile = document.getElementById(getCurrentTile());
  if (4 in currentRow) {
    snackbar(2);
    console.log(currentRow);
    return;
  } else {
    currentRow.push(letter);
    tile.classList.add("cover");
    console.log(currentRow);
  }
  color = getTileColor(letter);
  tile.classList.add("cover", color);
  tile.innerHTML = letter;
  //   getSecretWord();
}

function getCurrentTile() {
  if (currentTile < 30 && currentRow.length != 5) {
    currentTile++;
    return "tile" + currentTile;

    //   } else {
    //     currentTile = 1;
    //     return "tile" + currentTile;
  }
}

function getCurrentTilePos() {
  if (currentTile < 5 && currentRow.length != 5) {
    currentTilePos++;
    return currentTilePos;
  } else if (currentTile < 5 && currentRow.length == 5) {
    snackbar(2);
    return;
  } else {
    currentTilePos = 1;
    return currentTilePos;
  }
}

function getTileColor(guess) {
  guessState = checkGuess(guess);
  if (guessState === "green") {
    return "color-green";
  } else if (guessState === "yellow") {
    return "color-yellow";
  } else {
    return "color-red";
  }
}

function showRow() {
  if (4 in currentRow) {
    let root = document.querySelector(":root");
    root.style.setProperty("--opacity", 1);
    currentRow = [];
  } else {
    snackbar(1);
  }
}

function checkGuess(guess) {
  currentTilePos = getCurrentTilePos();
  console.log(currentTilePos);
  if (
    getSecretWord().includes(guess) &&
    getSecretWord().indexOf(guess) == currentTilePos - 1
  ) {
    return "green";
  } else if (
    getSecretWord().includes(guess) &&
    getSecretWord().indexOf(guess) != currentTilePos - 1
  ) {
    return "yellow";
  } else {
    return "red";
  }
}

function getSecretWord() {
  letters = [];
  letters[0] = secretWord.charAt(0);
  letters[1] = secretWord.charAt(1);
  letters[2] = secretWord.charAt(2);
  letters[3] = secretWord.charAt(3);
  letters[4] = secretWord.charAt(4);
  // for (var i = 0; i > secretWord.length; i++) {
  // letters[i] = secretWord.charAt(i);
  // }
  return letters;
}
