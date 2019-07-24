function jump() {
	jumpAudio.play()
	isJumping = true;
	if (moveProcess != null) clearInterval(moveProcess)
	jumpProcess = setInterval(jumpUp, playSpeed)
}

function jumpUp() {
	if (velocity > 0) {
		speed = velocity * time - 0.5 * gravity * time * time
		velocity = velocity - gravity * time
		drawJumping(playerY, angle)
		playerY += speed
	} else {
		clearInterval(jumpProcess)
		jumpProcess = setInterval(jumpDown, playSpeed)
	}
}

function jumpDown() {
	if (velocity < velocityTime) {
		speed = velocity * time + 0.5 * gravity * time * time
		velocity = velocity + gravity * time
		drawJumping(playerY, angle)
		playerY -= speed;
	} else {
		clearInterval(jumpProcess)
		isJumping = false;
		angle = 0
		playerY = 15
		moveProcess = setInterval(move, playSpeed)
	}
}

function move() {
	clearPlayer()
	ctx.fillRect(playerX - playerRadius, canvas.height - playerRadius * 2, playerRadius * 2, playerRadius * 2);
	playerX += playerMoveSpeed;
}

function fallDown() {
	if (jumpProcess != null) clearInterval(jumpProcess)
	if (moveProcess != null) clearInterval(moveProcess)
	ctx.clearRect(0, 100, canvas.width, canvas.height);
	playerY = 90;
	playerX = playerRadius + 10
	velocity = 0;
	isJumping = true;
	moveProcess = setInterval(fallDownProcess, playSpeed)
}

function fallDownProcess() {
	if (playerY > playerRadius) {
		speed = velocity * time + 0.5 * 2000 * time * time
		velocity = velocity + 2000 * time
		playerY -= speed
	} else {
		clearInterval(moveProcess)
		moveProcess = setInterval(move, playSpeed)
		isJumping = false;
		speed = 0
		velocity = velocityTime
		playerY = playerRadius
	}
}