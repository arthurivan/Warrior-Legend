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
		
		var drivingIntoTileType = getTrackAtPixelCoord(nextX,nextY);

		if (drivingIntoTileType == TRACK_ROAD) {
			this.x = nextX;
			this.y = nextY;
		} else if (drivingIntoTileType == TRACK_FINISHLINE) {
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
		//search for location in grid
		if (this.homeX == undefined) {
			for (var i = 0; i < trackGrid.length; i++) {
				if (trackGrid[i] == TRACK_PLAYERSTART) {
						trackGrid[i] = 0;
						this.homeX = (i % TRACK_COLS) * TRACK_W + TRACK_W/2;
						this.homeY = Math.floor(i / TRACK_COLS) * TRACK_H + TRACK_H/2;
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