function changeBackground(){

    document.getElementById("body").style.backgroundColor = "rgb(0,255,0)"
    document.getElementById("button").src = "boton_down.png"
    document.getElementById("button").style.marginTop = "60px"
    setTimeout(returnBakground, 3000);

}

function returnBakground(){
    document.getElementById("body").style.backgroundColor = "rgb(255,255,255)"
    document.getElementById("button").src = "boton.png"
    document.getElementById("button").style.marginTop = "0px"
}