canvasBg = document.getElementById("background");
ctxBg = canvasBg.getContext("2d");
ctxBg.fillStyle = "#568344";

var objWidth = 26;

function createObstacles(level) {
	ctxBg.clearRect(0, 0, canvas.width, canvas.height);
	for (i = 0; i < levelMap[level].length; i++) {
		if (levelMap[level][i] < 100) {
			drawObstacle(i, levelMap[level][i]);
		} else if (levelMap[level][i] == 'f') {
			drawFloat(i);
		}
	}
}

function drawObstacle(position, height) {
	var objHeight = 0,
		thisProcess = setInterval(function() {
			if (objHeight < height) {
				ctxBg.fillRect(objWidth * position, canvas.height - objHeight, objWidth, objHeight);
				objHeight += 1;
			} else {
				clearInterval(thisProcess);
			}
		}, 5);
}

function collision(level) {
	if (levelMap[level] != null) {
		for (i = 0; i < levelMap[level].length; i++) {
			if (levelMap[level][i] > 0) {
				if (playerX + playerRadius >= i * objWidth && playerX - playerRadius <= i * objWidth + objWidth && playerY <= levelMap[level][i] + playerRadius) {
					return true;
				}
			} else if (levelMap[level][i] == 'f') {
				if (playerX + playerRadius >= i * objWidth && playerX - playerRadius <= i * objWidth + objWidth && playerY > 15 && playerY < 50) {
					return true;
				}

			}
		}	
	}
}