let imgs = new Array("Cartoon-heart-illustration-on-transparent-background-PNG.png","images.png","png-clipart-cartoon-flower-drawing-flowers-cartoon-purple-symmetry-thumbnail.png");
let slotInterval = 100;
let slotCoins = 0;
let a = false;
let b = false;
let c = false;
let slota
let slotb
let slotc
let stoping = false;

function cambiarImagen(slot){
    let rnd = parseInt(Math.random()*imgs.length);
    document.getElementById(`slot${slot}`).src = imgs[rnd];
}

function insertCoin(){
    slotCoins++
    document.getElementById("counter").innerHTML = slotCoins;
    document.getElementById("banner").innerHTML = null;
    document.getElementById("banner").style.opacity = 0;
}

function playSlots(){
    
    
    if(slotCoins != 0){
        document.getElementById("banner").innerHTML = null;
        document.getElementById("banner").style.opacity = 0;
            
                if(a == false){
                    slota = setInterval(cambiarImagen, 100, 1)
                    a = true
                    setTimeout(playSlots, 500)
                } else if(b == false){
                    slotb = setInterval(cambiarImagen, 100, 2)
                    b = true
                    setTimeout(playSlots, 500)
                } else if(c == false){
                    slotc = setInterval(cambiarImagen, 100, 3)
                    c = true
                    setTimeout(playSlots, 500)
                } else {
                    setTimeout(stopSpining, 5000);
                    slotCoins--
                    document.getElementById("counter").innerHTML = slotCoins
                } 
            
    } else {
        document.getElementById("banner").innerHTML = "INSERT COINS";
    }
    
}

function stopSpining(){
    if(stoping == true){
        clearInterval(slota) 
        clearInterval(slotb)
        clearInterval(slotc)
        checkWin()
    } else {
        clearInterval(slota) 
        clearInterval(slotb)
        clearInterval(slotc)
        slota = setInterval(cambiarImagen, 500, 1);
        slotb = setInterval(cambiarImagen, 500, 2);
        slotc = setInterval(cambiarImagen, 500, 3);
        stoping = true
        setTimeout(stopSpining, 4000);
    }
    
    
}

function checkWin(){
    let slota = document.getElementById("slot1").src;
    let slotb = document.getElementById("slot2").src;
    let slotc = document.getElementById("slot3").src;
    document.getElementById("banner").style.opacity = 0.70;
    if(slota == slotb && slota == slotc){
        document.getElementById("banner").innerHTML = "WE HAVE A WINNER!!!";
        slotCoins += 10;
        document.getElementById("counter").innerHTML = slotCoins;
    } else {
        document.getElementById("banner").innerHTML = "BETTER LUCK NEXT TIME";
    }
    a = false
    b = false
    c = false
} 