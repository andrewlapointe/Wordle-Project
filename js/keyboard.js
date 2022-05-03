currentTile = 0;

function cover(letter) {
  tile = document.getElementById(getCurrentTile());
  tile.classList.add("cover");
  tile.innerHTML = letter;
  console.log(currentTile);
}

function getCurrentTile() {
  if (currentTile < 30) {
    currentTile++;
    return "tile" + currentTile;
  } else {
    currentTile = 1;
    return "tile" + currentTile;
  }
}
