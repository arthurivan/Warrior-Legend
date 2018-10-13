//tile wall
const ROOM_COLS = 16;
const ROOM_ROWS = 12;

var roomGrid = [ 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
			            4, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
			            1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
			            1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
			            1, 0, 0, 0, 1, 1, 1, 1, 3, 4, 3, 1, 1, 1, 1, 1,
			            1, 0, 0, 1, 1, 0, 0, 1, 1, 3, 1, 1, 0, 0, 0, 1,
			            1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1,
			            1, 5, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1,
			            1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1,
			            1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1,
			            1, 2, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1,
			            1, 1, 1, 1, 1, 1, 1, 4, 3, 3, 4, 3, 3, 4, 1, 1];

const TILE_W = 50;
const TILE_H = 50;

const TILE_GROUND = 0;
const TILE_WALL = 1;
const TILE_PLAYER = 2;
const TILE_KEY = 3;
const TILE_DOOR = 4;
const TILE_GOAL = 5;

function roomTileToIndex(tileCol, tileRow) {
	return tileCol + tileRow*ROOM_COLS;
}

function getTileAtPixelCoord(pixelX,pixelY) {
	var tileCol = Math.floor(pixelX/TILE_W);
	var tileRow = Math.floor(pixelY/TILE_H);

	var tileIndex = roomTileToIndex(tileCol, tileRow);
	return roomGrid[tileIndex];
}

function drawRoom() {
	var tileIndex = 0;
	var tileLeftEdgeX = 0;
	var tileTopEdgeY = 0;

	for (var i = 0; i < ROOM_ROWS; i++) {
		tileLeftEdgeX = 0;
		for (var j = 0; j < ROOM_COLS; j++) {

			var tileType = roomGrid[tileIndex];

			cx.drawImage(tilePics[tileType], tileLeftEdgeX,tileTopEdgeY, TILE_W,TILE_H);	

			tileIndex++;
			tileLeftEdgeX += TILE_W;
		}
		
		tileTopEdgeY += TILE_H;
	}
}
