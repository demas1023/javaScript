let num1 = new Array();
let num2 = new Array();

for(let i = 0; i <= 4; i++){
    num1[i] = parseInt(prompt('insenrte un numero'));
}

for(let j = 0; j <= 4; j++){
    num2[j] = num1[j]*2;
}

for(let s = 0; s <= 4; s++){
    document.writeln(num2[s]);
}