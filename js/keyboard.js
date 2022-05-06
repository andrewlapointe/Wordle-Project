currentTile = 0;
currentTilePos = 0;
currentRow = [];
idCache = [];
greenCounter = 0;

const secretWords = ["JAZZY", "OTHER", "THERE"];
let secretWord = secretWords[Math.floor(Math.random() * secretWords.length)];
console.log(secretWord);

function cover(letter) {
  // cover() is the entry point for the key buttons
  // the name "cover" is an anachronism from an old version of the code
  if (4 in currentRow) {
    snackbar(2);
    console.log(currentRow);
    return;
  } else {
    id = getCurrentTile();
    tile = document.getElementById(id);
    idCache.push(id);
    currentRow.push(letter);
    tile.classList.add("cover");
    console.log(currentRow);
    tile.innerHTML = letter;
  }
}

function getCurrentTile() {
  if (currentTile < 30 && currentRow.length != 5) {
    currentTile++;
    return "tile" + currentTile;
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
    return "green";
  } else if (guessState === "yellow") {
    return "yellow";
  } else {
    return "red";
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function showRow() {
  // This is the entry point for the ENTER key.
  if (4 in currentRow) {
    for (i = 0; i < 5; i++) {
      //   console.log(idCache, currentRow);
      document.getElementById(idCache[i]).style.background = getTileColor(
        currentRow[i]
      );
    }
    if (greenCounter === 5) {
      console.log("yay");
      snackbar(3);
      await sleep(4000);
      window.location.reload();
    }
    currentRow = [];
    idCache = [];
    greenCounter = 0;
  } else {
    snackbar(1);
  }
}

function checkGuess(guess) {
  secretLetters = getSecretWord();
  console.log(secretLetters);
  if (
    secretLetters.includes(guess) &&
    secretLetters.indexOf(guess) == currentRow.indexOf(guess)
  ) {
    greenCounter++;
    return "green";
  } else if (
    secretLetters.includes(guess) &&
    secretLetters.indexOf(guess) != currentRow.indexOf(guess)
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
