var canvas, cx;
//setup
var p1 = new warriorClass(playerPic);

function moveEverything() {
	p1.move();
}

function drawEverything() {
	//Tracks
	drawTracks();
	//
	p1.draw();

}

window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	cx = canvas.getContext('2d');

	initInput();
	p1.init();
	loadImages();

}