//tile wall
const ROOM_COLS = 16;
const ROOM_ROWS = 12;

var roomGrid =
         [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
           1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 5, 0, 1, 1, 1, 1,
           1, 0, 4, 0, 4, 0, 1, 0, 2, 0, 1, 0, 1, 4, 4, 1,
           1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 5, 1, 5, 1, 1,
           1, 1, 1, 5, 1, 1, 1, 0, 4, 0, 1, 0, 0, 0, 1, 1,
           1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 4, 0, 1, 1,
           1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1,
           1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 4, 0, 1, 1,
           1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1,
           1, 0, 5, 0, 5, 0, 5, 0, 3, 0, 1, 1, 1, 1, 1, 1,
           1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1,
           1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const TILE_W = 50;
const TILE_H = 50;

const TILE_GROUND = 0;
const TILE_WALL = 1;
const TILE_PLAYER = 2;
const TILE_GOAL = 3;
const TILE_KEY = 4;
const TILE_DOOR = 5;

function tileTypeHasTransparency(checkTileType) {
	return (checkTileType == TILE_KEY ||
				  checkTileType == TILE_DOOR ||
				  checkTileType == TILE_GOAL ||
				  checkTileType == TILE_WALL);
}

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

			if (tileTypeHasTransparency(tileType)) {
				cx.drawImage(tilePics[TILE_GROUND], tileLeftEdgeX,tileTopEdgeY, TILE_W,TILE_H);
			}
			cx.drawImage(tilePics[tileType], tileLeftEdgeX,tileTopEdgeY, TILE_W,TILE_H);

			tileIndex++;
			tileLeftEdgeX += TILE_W;
		}
		
		tileTopEdgeY += TILE_H;
	}
}
