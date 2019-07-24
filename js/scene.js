function start() {

	if (jumpProcess != null) clearInterval(jumpProcess)
	if (moveProcess != null) clearInterval(moveProcess)

	if (level < levelMap.length) {
		drawInfo()
		createObstacles(level)
		setTimeout(fallDown, 1)
	} else {
		setTimeout(win, 1)
	}
}

function reset() {
	drawInfo()
	setTimeout(fallDown, 1)
	isStart = true;
}

function win() {
	if (jumpProcess != null) clearInterval(jumpProcess)
	if (moveProcess != null) clearInterval(moveProcess)

	isStart = false;
	isWin = true;
	isJumping = false;

	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctxBg.clearRect(0, 0, canvasBg.width, canvasBg.height);

	ctx.fillText("You Won! and Failed " + lostCount + " times", 230, canvas.height / 4);
	ctx.fillText("Press ENTER to Restart.", 250, 200);
}