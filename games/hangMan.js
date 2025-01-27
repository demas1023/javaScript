let wordI;
let tries;
let word;
let answer;
let dificulty;

// tries, grafical representation
let hangman = new Array();
hangman[0] = ["img/hangmanT0.jpg"];
hangman[1] = ["img/hangmanT1.jpg"];
hangman[2] = ["img/hangmanT2.jpg"];
hangman[3] = ["img/hangmanT3.jpg"];
hangman[4] = ["img/hangmanT4.jpg"];
hangman[5] = ["img/hangmanT5.jpg"];
hangman[6] = ["img/hangmanT6.jpg"];
hangman[7] = ["img/hangmanT7.jpg"];

// dificulty levels
let peasant = new Array();  //easy
peasant = ["BREAD", "FRANKLIN", "WARRENER", "LUPARIUS", "BORDAR", "COTTAR"];
let noble = new Array();    //medium
noble = ["BAILIFF", "BARON", "DUKE", "EARL", "GENTRY", "KNIGHT", "TENANT", "VASSAL"];
let priest = new Array();   //hard
priest = ["LIMNER", "ARCHBISHOP", "CANON", "CELIBACY", "CHANCELLOR", "CHASTITY", "COADJUTOR"];

//hints per dificulty
let peasantHint = new Array();
peasantHint = ["Comon edible, usualy brown", 
                "Peasant who is wealthy", 
                "A person who oversaw rabbit warrens", 
                "A man who hunted wolves", 
                "A peasant of middle rank who farmed about 10-20 acres", 
                "A lower ranking peasant; someone who lived in a cottage but had no land to farm"];
let nobleHint = new Array();
nobleHint = ["The steward or overseer for a lord", 
             "A lord who held land granted from the crown and served on the king's privy council",
             "A member of the aristocracy with royal blood",
             "The highest title a man without royal blood could earn or inherit",
             "A class of people just below knights",
             "A man who owed military service to his lord in exchange for his lands",
             "A man who rented land from the landowner",
             "A free man who swore his loyalty to a lord"]
let priestHint = new Array();
priestHint = ["A person who illuminated manuscripts",
                "The title given automatically to bishops who govern archdioceses",
                "Greek for rule, norm, standard or measure, it is used in several ways in church language",
                "Refers to a decision to live chastely in the unmarried state",
                "The chief archivist of a diocese's official records",
                "Does not mean abstinence from sexual activity as such, but rather moral sexual conduct",
                "A bishop appointed to a Catholic diocese or archdiocese to assist the diocesan bishop"]

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
    scrol.style.top = 80 + "%";

}

function selectDificulty(){

    scrol.innerHTML = "<div id='peasant' class='difsel' onclick='wordSelection(1)'>Peasant</div> <div id='noble' class='difsel' onclick='wordSelection(2)'>Noble</div> <div id='priest' class='difsel' onclick='wordSelection(3)'>Priest</div>"
    
}

function hangMan(tries){

    gallows.innerHTML = `<img src='${hangman[tries]}' height='80%'/>`;

}

function wordSelection(d){

    switch(d){
        case 1:
            wordI = parseInt(Math.random() * peasant.length-1);
            word = peasant[wordI];
            for(let i = 0; i < word.length; i++){
                answer += "_";
                console.log(i)
            }
            dificulty = 1;
            break;
        case 2:
            wordI = parseInt(Math.random() * noble.length-1);
            word = noble[wordI];
            for(let i = 0; i < word.length; i++){
                answer += "_";
            }
            dificulty = 2;
            break;
        case 3:
            wordI = parseInt(Math.random() * priest.length-1);
            word = priest[wordI]
            for(let i = 0; i < word.length; i++){
                answer += "_";
            }
            dificulty = 3;
            break;

    }

    
    baseState();

}

function baseState(){
    
    scrol.style.top = 80 + "%";
    hangMan(tries);
    scrol.innerHTML = `<div id='Word' class='attempt'>${answer}</div>
                       <div id='Letter' class='mainButton' onclick='alfabet()'>Letter</div> 
                       <div id='Hint' class='mainButton' onclick='giveHint()'>Hint</div> 
                       <div id='Answer' class='mainButton' onclick='tryAnswer()'>Answer</div> 
                       <div id='Reset' class='mainButton' onclick='reset()'>Reset</div>`
}

function alfabet(){

    for(let i = 0; i <= 26; i++){
        switch(i){
            case 1: scrol.innerHTML = `<div class='letter' onclick='checkLetter("A")'>A</div>`;
            break;
            case 2: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter("B")'>B</div>`;
            break;
            case 3: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter("C")'>C</div>`;
            break;
            case 4: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter("D")'>D</div>`;
            break;
            case 5: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter("E")'>E</div>`;
            break;
            case 6: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter("F")'>F</div>`;
            break;
            case 7: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter("G")'>G</div>`;
            break;
            case 8: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter("H")'>H</div>`;
            break;
            case 9: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter("I")'>I</div>`;
            break;
            case 10: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter("J")'>J</div>`;
            break;
            case 11: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter("K")'>K</div>`;
            break;
            case 12: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter("L")'>L</div>`;
            break;
            case 13: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter("M")'>M</div>`;
            break;
            case 14: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter("N")'>N</div>`;
            break;
            case 15: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter("O")'>O</div>`;
            break;
            case 16: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter("P")'>P</div>`;
            break;
            case 17: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter("Q")'>Q</div>`;
            break;
            case 18: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter("R")'>R</div>`;
            break;
            case 19: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter("S")'>S</div>`;
            break;
            case 20: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter("T")'>T</div>`;
            break;
            case 21: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter("U")'>U</div>`;
            break;
            case 22: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter("V")'>V</div>`;
            break;
            case 23: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter("W")'>W</div>`;
            break;
            case 24: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter("X")'>X</div>`;
            break;
            case 25: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter("Y")'>Y</div>`;
            break;
            case 26: scrol.innerHTML = scrol.innerHTML + `<div class='letter' onclick='checkLetter("Z")'>Z</div>`;
            break;
        }
    }
        
    scrol.style.top = 20 + "%"

}

function checkLetter(letterIn){

    if(word.includes(letterIn)){
        for(let i = 0; i < word.length; i++){
            if(word.at(i) == letterIn){
                let first = answer.substring(0, i);
                let end = answer.substring(i+1, answer.length);
                answer = first + letterIn + end;
            }
        }
    }
    checkWord(1, letterIn);

}

function giveHint(){

    tries--;

    switch(dificulty){
        case 1: 
            scrol.innerHTML = `<div id="givenhint" class="attempt">${peasantHint[wordI]}</div>`; 
            break;
        case 2: 
            scrol.innerHTML = `<div id="givenhint" class="attempt">${nobleHint[wordI]}</div>`; 
            break;
        case 3: 
            scrol.innerHTML = `<div id="givenhint" class="attempt">${priestHint[wordI]}</div>`; 
            break;
    }
    scrol.innerHTML = scrol.innerHTML + "<div id='return' class='mainButton' onClick='baseState()'>Return</div>";

}

function tryAnswer(){

    scrol.innerHTML="<input id='guess' class='guess'> <div id='submit' class='mainButton' onClick='checkWord(2,`o`)'>Submit</div>";
    tries = 1;

}

function checkWord(LoW, L){ //Letter or Word
    let win = false;
    console.log("in checkWord")
    switch(LoW){
        case 1:
            if(answer == word){
                win = true;
                winLose(win);
            } else if(!word.includes(L)) {
                tries--;
            }
            break;
        case 2:
            if(document.getElementById("guess").value.toUpperCase() == word){
                win = true;
                winLose(win);
            } else {
                tries--;
            }
            break;
    }

    if(win == false){
        if(tries <= 0){
            hangMan(tries)
            winLose(win);
            //you lose
        } else {
            baseState();
        }
    }
    
}

function winLose(WoL){ //win or lose
    scrol.style.top = 20 + "%";
    if(WoL == true){
        scrol.innerHTML = "<div class='anouncement'>PARDONED</div>"
    } else {
        scrol.innerHTML = "<div class='anouncement'>EXECUTED</div>"
    }
    scrol.innerHTML = scrol.innerHTML + "<div class='mainButton' onClick='reset()'>Reset</div>"
}

