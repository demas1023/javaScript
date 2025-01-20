let numeros = new Array();

for(let i = 0; i < 100; i++){
    numeros[i] = i + 1;
}

for(let j = numeros.length-1; j >= 0; j--){
    document.writeln(numeros[j]);
}