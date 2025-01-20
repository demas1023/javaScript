let imgs = new Array("Cartoon-heart-illustration-on-transparent-background-PNG.png","images.png","png-clipart-cartoon-flower-drawing-flowers-cartoon-purple-symmetry-thumbnail.png");
let slotInterval = 100;

function cambiarImagen(slot){
    let rnd = parseInt(Math.random()*imgs.length);
    document.getElementById(`slot${slot}`).src = imgs[rnd];
}

function playSlots(){
    let spining = true;
    let prnd = -1;
    let a = false;
    let b = false;
    let c = false;
    let slota
    let slotb
    let slotc
    while(spining == true){
        
        let rnd = parseInt((Math.random()*3)+1);
        if(a == true && b == true && c == true){
            spining == false;
            break;
        }
        if(rnd == prnd){
            rnd = parseInt((Math.random()*3)+1);
            
        } else{
            switch(rnd){
                case 1:
                    if(a == false){
                        slota = setInterval(cambiarImagen, slotInterval, rnd);
                        a = true;
                    }
                    break;
                case 2:
                    if(b == false){
                        slotb = setInterval(cambiarImagen, slotInterval, rnd);
                        b = true;
                    }
                    break;
                case 3:
                    if(c == false){
                        slotc = setInterval(cambiarImagen, slotInterval, rnd);
                        c = true;
                    }
                    break;
            }
        }
    }
    setTimeout(stopSpining, 5000, slota, slotb, slotc);
}

function stopSpining(slota, slotb, slotc){
    let spining = true;
    let prnd = -1;
    let a = false;
    let b = false;
    let c = false;
    while(spining == true){
        
        let rnd = parseInt((Math.random()*3)+1);
        if(a == true && b == true && c == true){
            spining == false;
            break;
        }
        if(rnd == prnd){
            rnd = parseInt((Math.random()*3)+1);
        } else{
            switch(rnd){
                case 1:
                    clearInterval(slota)
                    a = true;
                    break;
                case 2:
                    clearInterval(slotb)
                    b = true
                    break;
                case 3:
                    clearInterval(slotc)
                    c = true
                    break;
            }
        }
    }
}