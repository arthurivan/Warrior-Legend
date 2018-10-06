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

function setKeyHoldState(thisKey, thisPlayer, setTo) {
	switch(thisKey) {
    //left
    case thisPlayer.controlKeyWest:
    		thisPlayer.keyHeldWest = setTo;
        break;
	//up
    case thisPlayer.controlKeyNorth:
    		thisPlayer.keyHeldNorth = setTo;
        break;
    //right
    case thisPlayer.controlKeyEast:
    		thisPlayer.keyHeldEast = setTo;
        break;
    //down
    case thisPlayer.controlKeySouth:
    		thisPlayer.keyHeldSouth = setTo;
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
