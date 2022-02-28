const player = document.getElementById("player0")
const scoreboard = document.getElementById("scoreboard")

const maxDim = 800
var controlLeft = 37, controlUp = 38, controlRight = 39, controlDown = 40
var playerMoveUnit = 20

var x = 350, y = 350
player.style.left = x + "px"
player.style.top = y + "px"

let pCorner0 = [x,y], pCorner1 = [(x+100),y], pCorner2 = [(x+100),(y+100)], pCorner3 = [x,(y+100)]
var tickFunction = setInterval(()=>{
  collisionDetect("tick",x,y)
},33)

function keyEvent(key){
  key = key.keyCode
  if (key === controlLeft){
    x = x - playerMoveUnit
    if (collisionDetect("playerMove",x,y) == "DENY_MAX"){
      x = x - playerMoveUnit
      return
    }
    else if (collisionDetect("playerMove",x,y) == "DENY_MIN"){
      x = x + playerMoveUnit
      return
    }
    else{
      move(x,y)
    }
  }
  else if (key === controlRight){
    x = x + playerMoveUnit
    if (collisionDetect("playerMove",x,y) == "DENY_MAX"){
      x = x - playerMoveUnit
      return
    }
    else if (collisionDetect("playerMove",x,y) == "DENY_MIN"){
      x = x + playerMoveUnit
      return
    }
    else{
      move(x,y)
    }
  }
  else if (key === controlUp){
    y = y - playerMoveUnit
    if (collisionDetect("playerMove",x,y) == "DENY_MAX"){
      y = y - playerMoveUnit
      return
    }
    else if (collisionDetect("playerMove",x,y) == "DENY_MIN"){
      y = y + playerMoveUnit
      return
    }
    else{
      move(x,y)
    }
  }
  else if (key === controlDown){
    y = y + playerMoveUnit
    if (collisionDetect("playerMove",x,y) == "DENY_MAX"){
      y = y - playerMoveUnit
      return
    }
    else if (collisionDetect("playerMove",x,y) == "DENY_MIN"){
      y = y + playerMoveUnit
      return
    }
    else{
      move(x,y)
    }
  }
}

function collisionDetect(op,x,y){
  if (op === "playerMove"){
    if (x > (maxDim - 100) | y > (maxDim - 100)){
      return "DENY_MAX"
    }
    else if (x < 0 | y < 0){
      return "DENY_MIN"
    }
  }
  else if (op === "tick"){
  }
}

function move(x,y){

  //sets BOTH x AND y
  player.style.left = (x + "px")
  player.style.top = (y + "px")
}
