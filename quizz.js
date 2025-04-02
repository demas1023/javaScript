let teams = new Array();
let currentTeam = 0;
let pointsTeams = [0,0,0,0,0];
let tries = 1;
const questions ={
 spain: [
    { question: "Wich is the co-official language of the Valencian Comunity?", options: ["Catalan", "Valencian", "Euskera"], answer: "Valencian"},
    { question: "Wich famous festival is celebrated in Alicante in june?", options: ["Las Fallas", "La Tomatina", "Las Hogueras de San Juan"], answer: "Las Hogueras de San Juan"},
    { question: "What is the most typical dish of the Alicante gastronomy?", options: ["Tortilla de Patatas", "Gazpacho", "Arroz a banda"], answer: "Arroz a banda"},
    { question: "What is the name of the most famous castle in Alicante?", options: ["Santa Barbara Castle", "San Fernando Castle", "Alcázar of Segovia"], answer: "Santa Barbara Castle"},
    { question: "Which island near Alicante is famous for its biodiversity and crystal-clear waters?", options: ["La Gomera", "Tabarca Island", "Cies Islands"], answer: "Tabarca Island"},
    { question: "Which famous Spanish architect designed the Sagrada Familia?", options: ["Antoni Gaudí", "Santiago Calatrava", "Rafael Moneo"], answer: "Antoni Gaudí"},
    { question: "What is the highest mountain in Spain?", options: ["Mulhacén", "Teide", "Aneto"], answer: "Teide"},
    { question: "What sporting event is very popular in Alicante every year?", options: ["The start of the Volvo Ocean Race", "The Formula 1 Grand Prix", "The Tour de France"], answer: "The start of the Volvo Ocean Race"},
    { question: "Which Spanish city is famous for its Sanfermines festival?", options: ["Madrid", "Pamplona", "Valencia"], answer: "Pamplona"}
] ,

 finland: [
    { question: "What is the most common climate in Finland?", options: ["Tempered", "Subarctic cold", "Warm Mediterranean"], answer: "Subarctic cold" },
    { question: "What traditional musical instrument is characteristic of Finland?", options: ["Guitar", "Kantele", "Piano"], answer: "Kantele" },
    { question: "In which Finnish city is the famous rock church located?", options: ["Helsinki", "Tampere", "Turku"], answer: "Helsinki" },
    { question: "Which famous architect designed Helsinki Central Railway Station?", options: ["Alvar Aalto", "Le Corbusier", "Eliel Saarinen"], answer: "Eliel Saarinen" },
    { question: 'Which famous Finnish writer is known for his work "Moomin"?', options: ["Mika Waltari", "Tove Jansson", "Arto Paasilinna"], answer: "Tove Jansson" },
    { question: "What typical alcoholic drink originates from Finland?", options: ["Vodka", "Whisky", "Kalja"], answer: "Vodka" },
    { question: "What sporting event is held annually in Finland where men must carry women?", options: ["Relay race", "Women's World Cargo Championship", "Helsinki Marathon"], answer: "Women's World Cargo Championship" },
    { question: "What is the main religion in Finland?", options: ["Catholicism", "Ortodox", "Lutheran"], answer: "Lutheran" },
    { question: "What famous Finnish food is made from oats?", options: ["Ruisleipä", "Kalakukko", "Puuro"], answer: "Puuro" }
] ,

 informatics: [
    { question: "What file type is most commonly used for compressed images?", options: [".jpg", ".txt", ".png"], answer: ".jpg" },
    { question: "What programming language was created by Guido van Rossum?", options: ["Java", "Python", "C++"], answer: "Python" },
    { question: "Which of these web browsers is the most used today?", options: ["Internet Explorer", "Firefox", "Google Chrome"], answer: "Google Chrome" },
    { question: 'What is the "back-end" in web development?', options: ["The visible part of the website", "The part that interacts with the database and the server", "The graphic design part"], answer: "The part that interacts with the database and the server" },
    { question: "In what year was the first version of Windows released?", options: ["1985", "1991", "1995"], answer: "1985" },
    { question: 'What does the acronym "HTML" stand for?', options: ["HyperText Markup Language", "Hyper Transfer Mail Link", "HyperText Memory Language"], answer: "HyperText Markup Language" },
    { question: "Which company developed the Android operating system?", options: ["Google", "Microsoft", "Apple"], answer: "Google" },
    { question: 'What is an "IP" in the context of networking?', options: ["A type of computer virus", "A communication protocol", "A network address that identifies a device"], answer: "A network address that identifies a device" },
    { question: 'What does "RAM" mean in the context of computer memory?', options: ["Random Access Memory", "Read Access Memory", "Random Allocation Memory"], answer: "Random Access Memory" }
] 

};

//call the creation of the teams
createTeams();

//create a team by inputing the name
function createTeams(){
    document.getElementById("interactive").className = "interact";
    document.getElementById("interactive").innerHTML = '<div>TEAM NAME</div>';
    document.getElementById("interactive").innerHTML = document.getElementById("interactive").innerHTML + "<input id='name' type='text'/>";
    document.getElementById("interactive").innerHTML = document.getElementById("interactive").innerHTML + `<div class="option" onclick="addName()">Submit</div>`;
}

//adding the name to the list of teams
function addName() {
    
    teamName = document.getElementById("name").value;

    currentTeam++;
    if(currentTeam == 5){
        teams.push(teamName);
        currentTeam = 0;
        reset();//call the begining of the game once all teams are made
    } else {
        teams.push(teamName);
        createTeams();
    }
}

//changes the team each time a question is answered
function changeTeam(){
    document.getElementById("banner").className = "hidden";
    diplayTeams();
    tries++;
    currentTeam++;
    if(currentTeam == 5){
        currentTeam = 0;
    }
    if(tries == 15){
        winBanner();
    }
}

//keeps the teams updates visualy with their points
function diplayTeams(){
    document.getElementById("teams").innerHTML = null;
    for (let i = 0; i < teams.length; i++) {
        document.getElementById("teams").innerHTML = document.getElementById("teams").innerHTML + `<div class="team"><div class="tname">${teams[i]}</div><div class="tpoints">${pointsTeams[i]}</div></div>`;
    }
}

//start the game, shuffle the questions and prime them for their use
function reset(){
    diplayTeams();
    document.getElementById("interactive").className = "hidden";
    document.getElementById("banner").className = "hidden";
    //shuffle the questions
    let questions = [1,2,3,4,5,6,7,8,9];
    randquestinos = shuffle(questions);
    
    //add the cards with points to earn
    for (let i = 1; i <= 3; i++) {
        for (let q = 1; q <= 5; q++){
            let newId = randquestinos[q];
            
            let pointsPosible = Math.trunc((Math.random() * 4) + 1) * 25;

            document.getElementById(`category${i}`).innerHTML = document.getElementById(`category${i}`).innerHTML + `<div id="${i}:${q}" class="card" onclick="selectQuestion(${i},${q},${newId},${pointsPosible})">${pointsPosible}</div>`;

        }
    }
}

//function for shuffling the questions
function shuffle(array){
    for (let i = array.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
      } 
    return array; 
}

//funtion activated by selecting a card, it presents the question to be answered
function selectQuestion(categoryNum, card, questionNum, points){
    document.getElementById(categoryNum + ":" + card).removeEventListener(onclick,this);
    document.getElementById(categoryNum + ":" + card).className = "used_card";

    let Qquestion;//get the question from the json structure
    switch(categoryNum){
        case 1: Qquestion = questions.spain[questionNum]; break;
        case 2: Qquestion = questions.finland[questionNum]; break;
        case 3: Qquestion = questions.informatics[questionNum]; break;
    }

    //present the question visualy
    document.getElementById("interactive").innerHTML = `<div class="question">${Qquestion.question}</div>`

    for (let i = 0; i < 3; i++) {
        document.getElementById("interactive").innerHTML = document.getElementById("interactive").innerHTML + `<div class="option" onclick="checkAnswer('${Qquestion.options[i]}','${Qquestion.answer}',${points})">${Qquestion.options[i]}</div>`
    }

    document.getElementById("interactive").className = "interact";
}

//check answer with the correct one
function checkAnswer(option, answer, points){
    document.getElementById("interactive").className = "hidden";
    if(option == answer){
        pointsTeams[currentTeam] += points; //add points if correct
        document.getElementById("banner").className = "correct";
        document.getElementById("banner").innerHTML = "CORRECT";
    } else {
        document.getElementById("banner").className = "wrong";
        document.getElementById("banner").innerHTML = `<div>WRONG</div><div>Correct answer:${answer}</div>`;
    }


    setTimeout(changeTeam, 1000);
}

//visual win state
function winBanner(){
    let winningTeam = 0;
    for(let i = 0; i < pointsTeams.length; i++){
        if(pointsTeams[winningTeam] < pointsTeams[i]){
            winningTeam = i;
        }
    }
    document.getElementById("banner").className = "banner";
    document.getElementById("banner").innerHTML = `<div>Team ${teams[winningTeam]} Wins</div><div>With ${pointsTeams[winningTeam]} points</div>`;
}