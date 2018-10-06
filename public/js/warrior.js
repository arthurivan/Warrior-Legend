const GROUNDSPEED_DECAY_MULT = 0.94;
const DRIVE_POWER = 0.3;
const REVERSE_POWER = 0.2;
const TURN_RATE = 0.03;
const MIN_TURN_SPEED = 0.5;

function warriorClass(pic) {
	//car size
	this.w = 30;
	this.h = 25;
	//pic
	this.pic = pic;
	//control states
	this.keyLeft = false;
	this.keyUp = false;
	this.keyRight = false;
	this.keyDown = false;
	//checks every turn to see key states
	this.move = function() {
		if (this.keyLeft) {
			if (this.speed > MIN_TURN_SPEED ||
					this.speed < -MIN_TURN_SPEED) {
				this.ang -= TURN_RATE*Math.PI;
			}
		}
		if (this.keyUp) {
				this.speed += DRIVE_POWER;
		}
		if (this.keyRight) {
			if (this.speed > MIN_TURN_SPEED ||
				  this.speed < -MIN_TURN_SPEED) {
				this.ang += TURN_RATE*Math.PI;
			}
		}
		if (this.keyDown) {
			this.speed -= REVERSE_POWER;
		}
		//checks possible future position for road or finishline
		var nextX = this.x + Math.cos(this.ang) * this.speed;
		var nextY = this.y + Math.sin(this.ang) * this.speed;
		
		var drivingIntoTileType = getTrackAtPixelCoord(nextX,nextY);

		if (drivingIntoTileType == TRACK_ROAD) {
			this.x = nextX;
			this.y = nextY;
		} else if (drivingIntoTileType == TRACK_FINISHLINE) {
			document.getElementById('debugText').innerHTML =
			  /([a-z,A-Z-]*)\.[a-z]*$/.exec(this.pic.src)[1] +
				" hit the goal line";
			p1.init();
		} else {
			this.speed *= -0.5;
		}
		this.speed *= GROUNDSPEED_DECAY_MULT;
		console.log(this.speed);
	}

	this.setupControls = function(leftKey, upKey, rightKey, downKey) {
		this.controlKeyLeft = leftKey;
		this.controlKeyUp = upKey;
		this.controlKeyRight = rightKey;
		this.controlKeyDown = downKey;
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
						this.speed = 0;
						this.ang = -0.5 * Math.PI;
	}

	this.draw = function() {

		drawBitmapCenteredWithRotation(this.pic, this.x,this.y, this.w,this.h, this.ang);
	}

}