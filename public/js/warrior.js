const PLAYER_MOVE_SPEED = 3.0;

function warriorClass(pic) {
	//car size
	this.w = 30;
	this.h = 25;
	//pic
	this.pic = pic;
	//control states
	this.keyHeldWest = false;
	this.keyHeldNorth = false;
	this.keyHeldEast = false;
	this.keyHeldSouth = false;
	//checks every turn to see key states
	this.move = function() {
		//checks possible future position for road or finishline
		var nextX = this.x;
		var nextY = this.y;
		if (this.keyHeldWest) {
			nextX -= PLAYER_MOVE_SPEED;
		}
		if (this.keyHeldNorth) {
			nextY -= PLAYER_MOVE_SPEED;
		}
		if (this.keyHeldEast) {
			nextX += PLAYER_MOVE_SPEED;
		}
		if (this.keyHeldSouth) {
			nextY += PLAYER_MOVE_SPEED;

		}
		
		var walkingIntoTileIndex = getTileIndexAtPixelCoord(nextX,nextY);
		var walkingIntoTileType = TILE_WALL;

		if (walkingIntoTileIndex != undefined) {
			walkingIntoTileType = roomGrid[walkingIntoTileIndex];
		}

		if (walkingIntoTileType == TILE_GROUND) {
			this.x = nextX;
			this.y = nextY;
		} else if (walkingIntoTileType == TILE_KEY) {
			this.keysHeld++;
			roomGrid[walkingIntoTileIndex] = 0;
		} else if (walkingIntoTileType == TILE_DOOR && this.keysHeld > 0) {
			this.keysHeld--;
			roomGrid[walkingIntoTileIndex] = 0;
		} else if (walkingIntoTileType == TILE_GOAL) {
			document.getElementById('debugText').innerHTML =
			  /([a-z,A-Z-]*)\.[a-z]*$/.exec(this.pic.src)[1] +
				" hit the goal line";
			p1.init();
		}


	}

	this.setupControls = function(westKey, northKey, eastKey, southKey) {
		this.controlKeyWest = westKey;
		this.controlKeyNorth = northKey;
		this.controlKeyEast = eastKey;
		this.controlKeySouth = southKey;
	}

	this.init = function() {
		this.keysHeld = 0;
		//search for location in grid
		if (this.homeX == undefined) {
			for (var i = 0; i < roomGrid.length; i++) {
				if (roomGrid[i] == TILE_PLAYER) {
						roomGrid[i] = 0;
						this.homeX = (i % ROOM_COLS) * TILE_W + TILE_W/2;
						this.homeY = Math.floor(i / ROOM_COLS) * TILE_H + TILE_H/2;
						break;
					}
			}
		}
						this.x = this.homeX;
						this.y = this.homeY;
	}

	this.draw = function() {

		drawBitmapCenteredWithRotation(this.pic, this.x,this.y, this.w,this.h, 0.0);
	}

}