var playerPic = document.createElement('img');

var trackPics = [];

var picsToLoad = 0;

function countLoadedImageAndLaunchIfReady() {
	picsToLoad--;
	if (picsToLoad == 0) {
		loadingDoneSoStartGame();
	}
}

function loadImageForTrackCode(trackCode, fileName) {
	trackPics[trackCode] = document.createElement('img');
	beginLoadingImages(trackPics[trackCode], fileName);
}

function beginLoadingImages(imgVar, fileName) {
  imgVar.onload = countLoadedImageAndLaunchIfReady;
  imgVar.src = fileName;
  console.log(fileName);
}

function loadImages() {
	var imageList = [
		{varName: playerPic, theFile: "images/warrior.png"},

		{trackType: TRACK_ROAD, theFile: "images/road.png"},
		{trackType: TRACK_TREE1, theFile: "images/key.png"},
		{trackType: TRACK_TREE2, theFile: "images/door.png"},
		{trackType: TRACK_FINISHLINE, theFile: "images/goal.png"},
		{trackType: TRACK_WALL, theFile: "images/wall.png"}
	];
	picsToLoad = imageList.length;

	for (var i = 0; i < imageList.length; i++) {
		if (imageList[i].trackType !== undefined) {
			//track tiles
			loadImageForTrackCode(imageList[i].trackType, imageList[i].theFile)
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