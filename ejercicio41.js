
let num = new Array();

for(let i = 0; i <= 9; i++){
    num[i] = parseInt(prompt("inserte un numero"));
}

let query = parseInt(prompt("Inserte el numero a contar"));
let found = false;

for(let s = 0; s < num.length; s++){
    if(query==num[s]){
        document.write("numero encontrado: " + num[s] + "<br>" + "encontrado en indice: " + s);
        found = true;
        break;
    } 
}

if(found == false){
    document.write("Numero no encontrado");
}
