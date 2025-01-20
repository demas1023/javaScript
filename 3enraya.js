let totalplays = 0;
let playsArray = new Array();
let winner = 0;

function play(id1,id2){
    if(document.getElementById(`${id1}:${id2}`).innerHTML == "" && winner == 0){

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

    if(totalplays < 9 && winner == 0){

        do{
            play1 = parseInt((Math.random()*3)+1);
            play2 = parseInt((Math.random()*3)+1);
        }while(document.getElementById(`${play1}:${play2}`).innerHTML != "");
        document.getElementById(`${play1}:${play2}`).innerHTML = "<img style='width: 90%;' src='img/1811_circle.png'/>";
        playsArray[`${play1}${play2}`] = "O";
        totalplays++;
        winner = checkWin()

    }
}

function checkWin(){
    for(let i = 1; i <= 3; i++){
        if(playsArray[`${i}1`] == "X" && playsArray[`${i}2`] == "X" && playsArray[`${i}3`] == "X"){
            document.getElementById("winner").innerHTML = "Player Wins";
            return 1;
        } else if(playsArray[`${i}1`] == "O" && playsArray[`${i}2`] == "O" && playsArray[`${i}3`] == "O"){
            document.getElementById("winner").innerHTML = "Computer Wins";
            return 2;
        }
    }
    for(let i = 1; i <= 3; i++){
        if(playsArray[`1${i}`] == "X" && playsArray[`2${i}`] == "X" && playsArray[`3${i}`] == "X"){
            document.getElementById("winner").innerHTML = "Player Wins";
            return 1;
        } else if(playsArray[`1${i}`] == "O" && playsArray[`2${i}`] == "O" && playsArray[`3${i}`] == "O"){
            document.getElementById("winner").innerHTML = "Computer Wins";
            return 2;
        }
    }
    
    if(playsArray[`11`] == "X" && playsArray[`22`] == "X" && playsArray[`33`] == "X"){
        document.getElementById("winner").innerHTML = "Player Wins";
        return 1;
    } else if(playsArray[`11`] == "O" && playsArray[`22`] == "O" && playsArray[`33`] == "O"){
        document.getElementById("winner").innerHTML = "Computer Wins";
        return 2;
    }

    if(playsArray[`31`] == "X" && playsArray[`22`] == "X" && playsArray[`13`] == "X"){
        document.getElementById("winner").innerHTML = "Player Wins";
        return 1;
    } else if(playsArray[`31`] == "O" && playsArray[`22`] == "O" && playsArray[`13`] == "O"){
        document.getElementById("winner").innerHTML = "Computer Wins";
        return 2;
    }

    return 0;
}