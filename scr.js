const player = document.getElementById("player0")
const scoreboard = document.getElementById("scoreboard")
var x = 0, y = 0
var controlLeft = 37, controlUp = 38, controlRight = 39, controlDown = 40
var playerMoveUnit = 20
const move = (key)=>{
  key = key.keyCode
  if (key === controlLeft){
    x = x - playerMoveUnit
    player.style.left = (x + "px")
  }
  else if (key === controlRight){
    x = x + playerMoveUnit
    player.style.left = (x + "px")
  }
  else if (key === controlUp){
    y = y - playerMoveUnit
    player.style.top = (y + "px")
  }
  else if (key === controlDown){
    y = y + playerMoveUnit
    player.style.top = (y + "px")
  }
}
