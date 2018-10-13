var playerPic = document.createElement('img');

var tilePics = [];

var picsToLoad = 0;

function countLoadedImageAndLaunchIfReady() {
	picsToLoad--;
	if (picsToLoad == 0) {
		loadingDoneSoStartGame();
	}
}

function loadImageForTileCode(tileCode, fileName) {
	tilePics[tileCode] = document.createElement('img');
	beginLoadingImages(tilePics[tileCode], fileName);
}

function beginLoadingImages(imgVar, fileName) {
  imgVar.onload = countLoadedImageAndLaunchIfReady;
  imgVar.src = fileName;
  console.log(fileName);
}

function loadImages() {
	var imageList = [
		{varName: playerPic, theFile: "images/warrior.png"},

		{tileType: TILE_GROUND, theFile: "images/ground.png"},
		{tileType: TILE_KEY, theFile: "images/key.png"},
		{tileType: TILE_DOOR, theFile: "images/door.png"},
		{tileType: TILE_GOAL, theFile: "images/goal.png"},
		{tileType: TILE_WALL, theFile: "images/wall.png"}
	];
	picsToLoad = imageList.length;

	for (var i = 0; i < imageList.length; i++) {
		if (imageList[i].tileType !== undefined) {
			//tile tiles
			loadImageForTileCode(imageList[i].tileType, imageList[i].theFile)
		} else {
			//pic
			beginLoadingImages(imageList[i].varName, imageList[i].theFile);
		}
	}
}

function loadingDoneSoStartGame() {
	if (picsToLoad == 0) {
		var framesPerSec = 30;
		setInterval( function() {
			moveEverything();
			drawEverything();
		}, 1000/framesPerSec);
	}
}