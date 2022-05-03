currentTile = 0;

function cover(letter) {
  tile = document.getElementById(getCurrentTile());
  tile.classList.add("cover");
  tile.innerHTML += letter;
  console.log(letter);
}

function getCurrentTile() {
  currentTile++;
  return "tile" + currentTile;
}
