function drawJumping(playerY) {
	clearPlayer()
	ctx.save();
	ctx.translate(playerX, canvas.height - playerY)
	ctx.fillRect(-playerRadius, -playerRadius, playerRadius * 2, playerRadius * 2);
	ctx.restore();
	playerX += playerMoveSpeed;
}

function clearPlayer() {
	ctx.clearRect(0, 100, canvas.width, canvas.height);

	if (playerX >= canvas.width - playerRadius) {
		level++;
		start()
	}

	if (collision(level)) {
		gameoverAudio.play()
		lostCount++;
		reset()
	}
}

function drawInfo() {
	ctx.clearRect(0, 0, 650, 100);
	ctx.fillText("Failed: " + lostCount, 100, 60);
	ctx.fillText(level + "/" + (levelMap.length - 1), 600, 60);
}