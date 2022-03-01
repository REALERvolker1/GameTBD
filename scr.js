const main = document.getElementById("main")
const map = [
2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
2,"S",1,0,0,0,0,0,0,1,0,0,0,1,1,2,
2,0,1,0,1,1,1,1,0,1,"G",1,0,0,0,2,
2,0,1,0,1,0,0,1,0,1,1,1,1,0,1,2,
2,0,0,0,0,0,1,0,0,0,0,0,1,0,0,2,
2,1,1,1,1,0,1,0,1,1,1,0,1,1,0,2,
2,0,1,0,0,0,1,0,0,0,1,0,1,0,0,2,
2,0,0,0,1,1,1,1,1,1,1,0,1,0,1,2,
2,0,1,0,0,0,0,1,0,1,1,0,1,0,0,2,
2,0,1,1,1,1,0,0,0,0,0,0,0,1,0,2,
2,0,0,0,0,0,1,0,1,1,0,1,0,1,0,2,
2,1,1,0,1,0,1,0,1,0,0,1,1,0,0,2,
2,0,1,0,1,0,0,0,1,0,1,1,1,0,1,2,
2,0,0,0,1,0,1,1,1,1,1,0,0,0,1,2,
2,0,1,1,1,0,0,0,0,0,0,0,1,1,1,2,
2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
]
const mapX = 16
var text = ""
for(i=0;i<map.length;i++){
  main.innerHTML += "<div class='inact mapTile tile" + map[i] + "' id='pos"+i+"'></div>"
}
var level = 0
var pos = 17, selPos = document.getElementById("pos0")
var controlLeft = 37, controlUp = 38, controlRight = 39, controlDown = 40, controlInteract = 32
var keystrokes = 0
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
  else if (key === controlInteract){
    interact(level)
  }
  keystrokes += 1
  document.getElementById("keystrokes").innerHTML = keystrokes
}
function move(op){
  var newPos = pos + op
  if (map[newPos] == 0 | map[newPos] == "S"){
    transfer(newPos)
  }
  else if (map[newPos] == "G"){
    transfer(newPos)
    pos = 4096
    clearInterval(tick)
    document.getElementById("window").innerHTML = "<h2>You win!</h2><p>Congratulations!</p><p>Your time:</p><h2>" + timer + "</h2><p>Your keystrokes:</p><h2>" + keystrokes + "</h2><br><button onclick='location.reload()'>Reset</button>"
    document.getElementById("window").style.display = "block"
  }
}
function interact(l){
  console.log("interacted at level" + l)
}
function transfer(newPos){
  var newSelPos = document.getElementById("pos" + newPos)
  newSelPos.classList.add("p")
  selPos.classList.remove("p")
  pos = newPos
  selPos = newSelPos
}
move(0)

var timer = 0
var tick = setInterval(()=>{
  timer += 1
  document.getElementById("timer").innerHTML = timer
},1000)
