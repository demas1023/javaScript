let fotos = new Array();
fotos = ["img/AceOfDiamonds.jpg", "img/AceOfHearts.jpg", "img/AceOfSpades.jpg", "img/AceOfTrebol.jpg", 
        "img/KingOfClubs.jpg", "img/KingOfSpades.jpg", "img/KingOfHearts.jpg", "img/KingOfDiamonds.jpg", 
        "img/QueenOfClubs.jpg", "img/QueenOfDiamonds.jpg", "img/QueenOfSpades.jpg", "img/QueenOfHearts.jpg",
        "img/AceOfDiamonds.jpg", "img/AceOfHearts.jpg", "img/AceOfSpades.jpg", "img/AceOfTrebol.jpg", 
        "img/KingOfClubs.jpg", "img/KingOfSpades.jpg", "img/KingOfHearts.jpg", "img/KingOfDiamonds.jpg", 
        "img/QueenOfClubs.jpg", "img/QueenOfDiamonds.jpg", "img/QueenOfSpades.jpg", "img/QueenOfHearts.jpg"];

let randomizedFotos = new Array();

let pairsFound;
let fliped;
let first;
let second;
let clocktime;

let minutes;
let seconds;
let miliseconds;

let board = document.getElementById("board");
let clock = document.getElementById("clock");
let panel = document.getElementById("panel");
let button = document.getElementById("button");


function reset(){

    randomizedFotos = shuffle(fotos);
    fliped = 1;
    pairsFound = 0;
    board.innerHTML = null;

    for(let i = 0; i < randomizedFotos.length; i++){
        board.innerHTML = board.innerHTML + `<img id="${i}" class="card" onclick="addFoto(${i})" src="img/everton-zomer-card-back-black.jpg"/>`;
    }

    board.style.position = "static";
    panel.style.position = "static";
    clock.style.position = "static";
    clock.style.zIndex = 0;
    clock.style.width = 100 + "px"
    clock.style.height = 30 + "px"
    button.innerHTML = "RESET";

    minutes = 0
    seconds = 0
    miliseconds = 0
    clocktime = setInterval(clockwork, 1);
        
}

function shuffle(array){
    for (let i = array.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
      } 
    return array; 
}

function addFoto(i){

    if(fliped < 3){
        if(fliped == 1){
            first = i;
            fliped++;
            document.getElementById(i).src = randomizedFotos[first];
            document.getElementById(i).removeEventListener(onclick,this);
        } else {
            second = i;
            fliped++;
            document.getElementById(i).src = randomizedFotos[second];
            document.getElementById(i).removeEventListener(onclick,this);
            setTimeout(checkFoto, 1000);
        }
    }

}

function checkFoto(){

    if(randomizedFotos[first] == randomizedFotos[second]){
        pairsFound++;
        console.log(pairsFound)
    } else {
        document.getElementById(first).src = "img/everton-zomer-card-back-black.jpg"
        document.getElementById(first).addEventListener(onclick=addFoto(first),this);
        document.getElementById(second).src = "img/everton-zomer-card-back-black.jpg"
        document.getElementById(second).addEventListener(onclick=addFoto(second),this);
    }

    fliped = 1;
    
    if(pairsFound == randomizedFotos.length/2){
        clearTimeout(clocktime);
        winBanner();
    }

}

function clockwork(){

    miliseconds++

    if(miliseconds >= 1000){
        seconds++
        miliseconds = 0
    }
    if(seconds >= 60){
        minutes++
        seconds = 0
    }

    clock.innerHTML = minutes + ":" + seconds + ":" + miliseconds;

}

function winBanner(){

    board.style.position = "fixed";
    panel.style.position = "fixed";
    button.innerHTML = "PLAY";

    clock.style.position = "fixed";
    clock.style.top = 20 + "%";
    clock.style.left = 40 + "%";
    clock.style.height = 200 + "px";
    clock.style.width = 300 + "px"
    clock.style.zIndex = 1;

    
    clock.innerHTML = "<div>" + clock.innerHTML + "</div> <div class='win'>TIME!</div>"

}