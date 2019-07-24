let backgroundAudio = document.getElementById("backgroundSong"),
    jumpAudio = document.getElementById("jumpMusic"),
    gameoverAudio = document.getElementById("tryAgainMusic"),
    canvas = document.getElementById("player"),
    ctx = canvas.getContext("2d");

    ctx.fillStyle="#ed3833";
    ctx.font = "24px helvetica";
    

  let playerRadius= 15,
      lostCount=0,
      playerX,
      playerY,  
      playSpeed=1000/60,
      playerMoveSpeed=4.2,
      jumpProcess,
      moveProcess,
      velocityTime=1000,  
      gravity=4000,
      velocity=0,
      speed=0,
      time=playSpeed/1000,
      angle=0,
      isJumping = false,
      isStart=false,
      isWin=false;
      level=0,


    //map Levels
    levelMap=[
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 60, 0, 0, 0, 0, 40, 0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 40, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 60, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 60, 0, 0, 0, 0, 0, 45, 0, 0, 0, 0, 50, 0, 0], 
      [0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 77, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 50, 30, 0, 0, 0, 0, 0, 80, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 40, 20, 30, 0, 0, 0, 0, 0, 0, 99, 0, 0, 0, 0, 0, 60, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 60, 0, 0, 0, 0, 0, 90, 10, 0, 0, 0, 0, 0, 0, 80, 20, 0, 0],
      [0, 0, 0, 20, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 80, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 90, 0, 0, 0],
	];

function keyDown(e){
  if(!isStart&&!isWin){
      start();
      isStart=true;
      backgroundAudio.play();
    }
    else if(!isStart&&isWin&&e.keyCode==13){
      lostCount=0;
      level=0;
      start()
      isStart=true;
    }
    else if(isStart&&!isJumping){
      if(moveProcess!=null) clearInterval(moveProcess);
      jump();
    }
}

function touch (event){
  var event = event || window.event;
  switch(event.type){
    case "touchstart":
      keyDown()
      break;
    case "touchmove":
    event.preventDefault();
    keyDown()
    break;
  }
}

//game-loop
function main(){
ctx.clearRect(0,0,650,400); 
ctx.fillText("Press any Key to Start!", canvas.width/3, 150);

addEventListener("keypress", function(e) {
	keyDown(e)
}, false);

addEventListener('touchstart',touch,false);
addEventListener('touchmove',touch,false);
}

window.onload=function(){
main();
}