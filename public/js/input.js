//p1 keys
const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40;

function initInput() {
	document.addEventListener('keydown',keyPressed);
	document.addEventListener('keyup', keyReleased);
    p1.setupControls(KEY_LEFT_ARROW, KEY_UP_ARROW, KEY_RIGHT_ARROW, KEY_DOWN_ARROW);
}

function setKeyHoldState(thisKey, thisCar, setTo) {
	switch(thisKey) {
    //left
    case thisCar.controlKeyLeft:
    		thisCar.keyLeft = setTo;
        break;
	//up
    case thisCar.controlKeyUp:
    		thisCar.keyUp = setTo;
        break;
    //right
    case thisCar.controlKeyRight:
    		thisCar.keyRight = setTo;
        break;
    //down
    case thisCar.controlKeyDown:
    		thisCar.keyDown = setTo;
        break;
    default:
        break;
	}
}

function keyPressed(evt) {
	evt.preventDefault;
	setKeyHoldState(evt.keyCode, p1, true);

}

function keyReleased(evt) {
	evt.preventDefault;
	setKeyHoldState(evt.keyCode, p1, false);

}
