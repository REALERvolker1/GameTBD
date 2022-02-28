const main = document.getElementById("main")
const map = [
0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,
0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,
0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,
1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,
0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,
0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,
0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,
1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,
0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,
0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,
0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,
1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,
0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,
0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,
0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,
1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,
]
const mapX = 16
var text = ""
for(i=0;i<map.length;i++){
  main.innerHTML += "<div class='inact mapTile tile" + map[i] + "' id='pos"+i+"'></div>"
}
var pos = 0, selPos = document.getElementById("pos0")
var controlLeft = 37, controlUp = 38, controlRight = 39, controlDown = 40
function keyEvent(key){
  key = key.keyCode
  if (key === controlLeft){
    move(-1)
  }
  else if (key === controlRight){
    move(1)
  }
  else if (key === controlUp){
    move(-mapX)
  }
  else if (key === controlDown){
    move(mapX)
  }
}
function move(op){
  var newPos = pos + op
  if (map[newPos] != 0) return
  var newSelPos = document.getElementById("pos" + newPos)
  newSelPos.classList.add("p")
  selPos.classList.remove("p")
  pos = newPos
  selPos = newSelPos
}