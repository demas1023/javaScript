
let numeros = new Array();

randomArray(numeros);

for(let j = 0; j < numeros.length; j++){
    document.write(numeros[j] +" ")
}

function randomArray(numeros){
    for(let i = 0; i < 5; i++){
        numeros.push(Math.trunc(Math.random()*10));
    }
    return(numeros);
}
