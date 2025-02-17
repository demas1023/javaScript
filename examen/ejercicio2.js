let colors = new Array()
colors[0] = "#ba2708"
colors[1] = "#4ac223"
colors[2] = "#2384c2"
colors[3] = "#a323c2"
colors[4] = "#92e8e9"
colors[5] = "#a1962a"

let timer;

function setUp(){
    document.getElementById("body").style.backgroundColor = "rgb(0,255,0)"
    document.getElementById("button").src = "boton_down.png"
    document.getElementById("button").style.marginTop = "60px"
    document.getElementById("reset").innerHTML = "<button onclick='reset()'>Reset</button>"
    timer = setInterval(changeBackground, 2000)
    setTimeout(buttonUp, 200)
    
}

function buttonUp(){
    document.getElementById("button").src = "boton.png"
    document.getElementById("button").style.marginTop = "0px"
}

function changeBackground(){

    let i = parseInt(Math.random()*5)

    document.getElementById("body").style.backgroundColor = colors[i]

}

function reset(){
    clearInterval(timer)
    document.getElementById("body").style.backgroundColor = "rgb(255,255,255)"
    document.getElementById("reset").innerHTML = null
    
}


