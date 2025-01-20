
document.getElementById("WB").style.height = "1px";
document.getElementById("WB").style.opacity = "0%";
document.getElementById("WB").style.top = "90%";



let totalplays = 0;
let playsArray = new Array();
let winner = 0;
let plays = false;

function whoPlays(who){
    if(who == true){
        plays = true;
    } else {
        cpuPlay();
    }

    document.getElementById("CP").innerHTML = "<div class='button' onclick='reset()'><img src='img/reset.png' style='width: 90%;'/>Reset</div>";
}

function play(id1,id2){
    if(document.getElementById(`${id1}:${id2}`).innerHTML == "" && winner == 0 && plays == true){

        document.getElementById(`${id1}:${id2}`).innerHTML = "<img style='width: 90%;' src='img/6372150.png'/>";
        playsArray[`${id1}${id2}`] = "X";
        totalplays++;
        winner = checkWin();
        cpuPlay();

    }
}

function cpuPlay(){
    let play2;
    let play1;
    let played = false;

    if(totalplays < 9 && winner == 0){

        for(let i = 1; i <= 3; i++){
            if(playsArray[`${i}1`] == "O" && playsArray[`${i}2`] == "O" && document.getElementById(`${i}:3`).innerHTML == ""){
                console.log("special play 1")
                
                    document.getElementById(`${i}:3`).innerHTML = "<img style='width: 90%;' src='img/1811_circle.png'/>";
                    played = true
                    playsArray[`${i}3`] = "O";
                
                break;
            }
            if(playsArray[`${i}2`] == "O" && playsArray[`${i}3`] == "O" && document.getElementById(`${i}:1`).innerHTML == ""){
                console.log("special play 2")

                    document.getElementById(`${i}:1`).innerHTML = "<img style='width: 90%;' src='img/1811_circle.png'/>";
                    played = true
                    playsArray[`${i}1`] = "O";

                break;
            }
            if(playsArray[`${i}1`] == "O" && playsArray[`${i}3`] == "O" && document.getElementById(`${i}:2`).innerHTML == ""){
                console.log("special play 3")
           
                    document.getElementById(`${i}:2`).innerHTML = "<img style='width: 90%;' src='img/1811_circle.png'/>";
                    played = true
                    playsArray[`${i}2`] = "O";
               
                break;
            }
        }

        
        for(let j = 1; j <= 3; j++){
            if(playsArray[`1${j}`] == "O" && playsArray[`2${j}`] == "O" && document.getElementById(`3:${j}`).innerHTML == ""){
                console.log("special play 4")
                    
                    document.getElementById(`3:${j}`).innerHTML = "<img style='width: 90%;' src='img/1811_circle.png'/>";
                    played = true
                    playsArray[`3${j}`] = "O";
        
                break;
            }
            if(playsArray[`2${j}`] == "O" && playsArray[`3${j}`] == "O" && document.getElementById(`1:${j}`).innerHTML == ""){
                console.log("special play 5")

                    document.getElementById(`1:${j}`).innerHTML = "<img style='width: 90%;' src='img/1811_circle.png'/>";
                    played = true
                    playsArray[`1${j}`] = "O";
            
                break;
            }
            if(playsArray[`1${j}`] == "O" && playsArray[`3${j}`] == "O" && document.getElementById(`2:${j}`).innerHTML == ""){
                console.log("special play 6")
                
                    document.getElementById(`2:${j}`).innerHTML = "<img style='width: 90%;' src='img/1811_circle.png'/>";
                    played = true
                    playsArray[`2${j}`] = "O";
                
                break;
            }
        }
        
        if(played == false){
            for(let i = 1; i <= 3; i++){
                if(playsArray[`${i}1`] == "X" && playsArray[`${i}2`] == "X" && document.getElementById(`${i}:3`).innerHTML == ""){
                    console.log("special play 1")
                
                    document.getElementById(`${i}:3`).innerHTML = "<img style='width: 90%;' src='img/1811_circle.png'/>";
                    played = true
                    playsArray[`${i}3`] = "O";
                
                    break;
                }
                if(playsArray[`${i}2`] == "X" && playsArray[`${i}3`] == "X" && document.getElementById(`${i}:1`).innerHTML == ""){
                    console.log("special play 2")

                    document.getElementById(`${i}:1`).innerHTML = "<img style='width: 90%;' src='img/1811_circle.png'/>";
                    played = true
                    playsArray[`${i}1`] = "O";

                    break;
                }
                if(playsArray[`${i}1`] == "X" && playsArray[`${i}3`] == "X" && document.getElementById(`${i}:2`).innerHTML == ""){
                    console.log("special play 3")
           
                    document.getElementById(`${i}:2`).innerHTML = "<img style='width: 90%;' src='img/1811_circle.png'/>";
                    played = true
                    playsArray[`${i}2`] = "O";
               
                    break;
                }
            }

            for(let j = 1; j <= 3; j++){
                if(playsArray[`1${j}`] == "X" && playsArray[`2${j}`] == "X" && document.getElementById(`3:${j}`).innerHTML == ""){
                    console.log("special play 4")
                    
                    document.getElementById(`3:${j}`).innerHTML = "<img style='width: 90%;' src='img/1811_circle.png'/>";
                    played = true
                    playsArray[`3${j}`] = "O";
        
                    break;
                }
                if(playsArray[`2${j}`] == "X" && playsArray[`3${j}`] == "X" && document.getElementById(`1:${j}`).innerHTML == ""){
                    console.log("special play 5")

                    document.getElementById(`1:${j}`).innerHTML = "<img style='width: 90%;' src='img/1811_circle.png'/>";
                    played = true
                    playsArray[`1${j}`] = "O";
            
                    break;
                }
                if(playsArray[`1${j}`] == "X" && playsArray[`3${j}`] == "X" && document.getElementById(`2:${j}`).innerHTML == ""){
                    console.log("special play 6")
                
                    document.getElementById(`2:${j}`).innerHTML = "<img style='width: 90%;' src='img/1811_circle.png'/>";
                    played = true
                    playsArray[`2${j}`] = "O";
                
                    break;
                }
            }
        }


        if(played == false){
            console.log("normal play")
            do{
                play1 = parseInt((Math.random()*3)+1);
                play2 = parseInt((Math.random()*3)+1);
            }while(document.getElementById(`${play1}:${play2}`).innerHTML != "");
        document.getElementById(`${play1}:${play2}`).innerHTML = "<img style='width: 90%;' src='img/1811_circle.png'/>";
        playsArray[`${play1}${play2}`] = "O";
        }
        totalplays++;
        winner = checkWin()
        plays = true;
        
    }
}

function checkWin(){
    for(let i = 1; i <= 3; i++){
        if(playsArray[`${i}1`] == "X" && playsArray[`${i}2`] == "X" && playsArray[`${i}3`] == "X"){
            winnerBanner(1);
            return 1;
        } else if(playsArray[`${i}1`] == "O" && playsArray[`${i}2`] == "O" && playsArray[`${i}3`] == "O"){
            winnerBanner(2);
            return 2;
        }
    }
    for(let i = 1; i <= 3; i++){
        if(playsArray[`1${i}`] == "X" && playsArray[`2${i}`] == "X" && playsArray[`3${i}`] == "X"){
            winnerBanner(1);
            return 1;
        } else if(playsArray[`1${i}`] == "O" && playsArray[`2${i}`] == "O" && playsArray[`3${i}`] == "O"){
            winnerBanner(2);
            return 2;
        }
    }
    
    if(playsArray[`11`] == "X" && playsArray[`22`] == "X" && playsArray[`33`] == "X"){
        winnerBanner(1);
        return 1;
    } else if(playsArray[`11`] == "O" && playsArray[`22`] == "O" && playsArray[`33`] == "O"){
        winnerBanner(2);
        return 2;
    }

    if(playsArray[`31`] == "X" && playsArray[`22`] == "X" && playsArray[`13`] == "X"){
        winnerBanner(1);
        return 1;
    } else if(playsArray[`31`] == "O" && playsArray[`22`] == "O" && playsArray[`13`] == "O"){
        winnerBanner(2);
        return 2;
    }

    if(totalplays == 9){
        winnerBanner(0)
    }

    return 0;
}

function winnerBanner(who){
    let banner = document.getElementById("WB")
    banner.style.height = "300px";
    banner.style.opacity = "60%";
    banner.style.top = "12%";
    
    if(who == 1){
        banner.innerHTML = "<p class='W'>WINNER</p>";
    } else if(who == 2){
        banner.innerHTML = "<p class='L'>GAME OVER</p>";
    } else {
        banner.innerHTML = "<p class='D'>DRAW</p>";
    }
    
}

function reset(){
    totalplays = 0;
    plays = false;
    winner = 0;

    for(let i = 1; i <= 3; i++){
        for(let j = 1; j <= 3; j++){
            playsArray[`${i}${j}`] = "";
            document.getElementById(`${i}:${j}`).innerHTML = null;
        }
    }

    document.getElementById("WB").style.height = "1px";
    document.getElementById("WB").style.opacity = "0%";
    document.getElementById("WB").style.top = "90%";

    document.getElementById("CP").innerHTML = "<div class='button' onclick='whoPlays(true)'><img src='img/person14-512.webp' style='width: 90%;'/>Player First</div> <div class='button' onclick='whoPlays(false)'><img src='img/CPU.png' style='width: 90%;'/>Computer First</div>"
}