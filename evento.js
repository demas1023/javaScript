
console.log("script works");
function saludo() {
    console.log("fucnión iniciada");
    document.getElementById("contenido").innerText = "Saludos";
}

function clear() {
    document.getElementById("contenido").innerHTML = "&nbsp;";
}

function image() {
    document.getElementById("contenido").innerHTML = "<img src='img/spoon.webp'/>"
}

function saludar(name){
    //document.getElementById("contenido").innerText = "Saludos" + name;
    let tucolor = document.getElementById("color");
    let element = document.getElementById("contenido");

    document.body.style.backgroundColor = tucolor.value;
    element.innerHTML = `<h2>Saludos ${name}</h2>`;
}

function sizeChange(up) {
    let element = document.getElementById("contenido");
    let fontSizeAct = parseInt(element.style.fontSize);

    if (up == "up"){
        element.style.fontSize = (fontSizeAct + 5) + "px";
    } else {
        element.style.fontSize = (fontSizeAct - 5) + "px";
    }

}

function textSplit(){
    let element = document.getElementById("srcText").value;

    let arrText = element.split(' ');
    console.log(arrText);

    
    document.write("<br/>numero de palabras<br/>")
    document.write(arrText.length);

    document.write("<br/>Primera palabra<br/>")
    document.write(arrText[0]);
    document.write("<br/>Ultima palabra<br/>")
    document.write(arrText[arrText.length-1])

    document.write("<br/>Palabras en orden inverso<br/>")
    for(let i = arrText.length-1; i >= 0; i--){
        document.write(arrText[i]+",");
    }

    let arrTextAZ = arrText.sort();
    document.write("<br/>Palabras de la A a la Z<br/>")
    document.write(arrTextAZ);

    document.write("<br/>Palabras de la Z a la A<br/>")
    for(let i = arrTextAZ.length-1; i >= 0; i--){
        document.write(arrTextAZ[i]+",");
    }
}
