let wordI;
let tries;
let word;
let answer;
let dificulty;

// tries, grafical representation
let hangman = new Array();
hangman[0] = [""];
hangman[1] = ["img/hangmanT1.jpg"];
hangman[2] = ["img/hangmanT2.jpg"];
hangman[3] = ["img/hangmanT3.jpg"];
hangman[4] = ["img/hangmanT4.jpg"];
hangman[5] = ["img/hangmanT5.jpg"];
hangman[6] = ["img/hangmanT6.jpg"];
hangman[7] = ["img/hangmanT7.jpg"];

// dificulty levels
let peasant = new Array();  //easy
peasant[0] = "BREAD";
let noble = new Array();    //medium

let priest = new Array();   //hard

// elements in the page wen first loaded
let scrol = document.getElementById("scroll");
let gallows = document.getElementById("gallows");
let guard1 = document.getElementById("guard1");
let guard2 = document.getElementById("guard2");

reset();

function reset(){

    tries = 7;
    wordI = 0;
    word = "";
    answer = "";
    hangMan(tries);
    selectDificulty();

}

function selectDificulty(){

    scrol.innerHTML = "<div id='peasant' class='difsel' onclick='wordSelection(1)'>Peasant</div> <div id='noble' class='difsel' onclick='wordSelection(2)'>Noble</div> <div id='priest' class='difsel' onclick='wordSelection(3)'>Priest</div>"
    
}

function hangMan(tries){

    gallows.innerHTML = `<img src='${hangman[tries]}' width='99%'/>`;

}

function wordSelection(dificulty){

    switch(dificulty){
        case 1:
            wordI = parseInt(Math.random() * peasant.length-1);
            word = peasant[wordI];
            for(let i = 0; i < word.length; i++){
                answer += "_";
                console.log(i)
            }
            this.dificulty = 1;
            break;
        case 2:
            wordI = parseInt(Math.random() * noble.length-1);
            word = noble[wordI];
            for(let i = 0; i < word.length; i++){
                answer += "_";
            }
            this.dificulty = 2;
            break;
        case 3:
            wordI = parseInt(Math.random() * priest.length-1);
            word = priest[wordI]
            for(let i = 0; i < word.length; i++){
                answer += "_";
            }
            this.dificulty = 3;
            break;

    }

    
    baseState();

}

function baseState(){
    hangMan(tries);
    scrol.innerHTML = `<div id='Word' class='attempt'>${answer}</div><div id='Letter' class='mainButton' onclick='alfabet()'>Letter</div> <div id='Hint' class='mainButton' onclik='hint()'>Hint</div> <div id='Answer' class='mainButton' onclick='tryAnswer()'>Answer</div> <div id='Reset' class='mainButton' onclick='reset()'>Reset</div>`
}

function alfabet(){

    for(let i = 0; i <= 26; i++){
        switch(i){
            case 1: scrol.innerHTML = `<div class='letter' onclick='checkLetter(${i})'>A</div>`;
            break;
            case 2: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter(${i})'>B</div>`;
            break;
            case 3: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter(${i})'>C</div>`;
            break;
            case 4: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter(${i})'>D</div>`;
            break;
            case 5: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter(${i})'>E</div>`;
            break;
            case 6: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter(${i})'>F</div>`;
            break;
            case 7: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter(${i})'>G</div>`;
            break;
            case 8: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter(${i})'>H</div>`;
            break;
            case 9: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter(${i})'>I</div>`;
            break;
            case 10: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter(${i})'>J</div>`;
            break;
            case 11: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter(${i})'>K</div>`;
            break;
            case 12: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter(${i})'>L</div>`;
            break;
            case 13: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter(${i})'>M</div>`;
            break;
            case 14: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter(${i})'>N</div>`;
            break;
            case 15: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter(${i})'>O</div>`;
            break;
            case 16: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter(${i})'>P</div>`;
            break;
            case 17: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter(${i})'>Q</div>`;
            break;
            case 18: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter(${i})'>R</div>`;
            break;
            case 19: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter(${i})'>S</div>`;
            break;
            case 20: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter(${i})'>T</div>`;
            break;
            case 21: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter(${i})'>U</div>`;
            break;
            case 22: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter(${i})'>V</div>`;
            break;
            case 23: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter(${i})'>W</div>`;
            break;
            case 24: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter(${i})'>X</div>`;
            break;
            case 25: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter(${i})'>Y</div>`;
            break;
            case 26: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter(${i})'>Z</div>`;
            break;
        }
    }
        
    

}

function checkLetter(letterIn){

    if(word.includes(letterIn)){
        console.log("in")
        for(let i = 0; i < word.length; i++){
            if(word.at(i) == letterIn){
                answer.at(i) = letterIn;

                console.log("found");
            }
        }
    } else {
        tries--;
    }

    baseState();

}

function hint(){

}

function tryAnswer(){

}
//hint -1 try
//answer, wrong answer is death
//win/lose state function
//graphic functions