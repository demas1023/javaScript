let ciudades = new Array();

ciudades[0] = "alicante";
ciudades[1] = "Malaga";
ciudades[5] = "Pamplona";

let frutas = [];

frutas[0] = "lechuga";
frutas[1] = "manzana";

frutas[frutas.length]= "pera";

frutas.push("platano");
frutas.push(100);

frutas.unshift("limon");

for(let index = 0; index < frutas.length; index++){
    let element = frutas[index];
    console.log(element);
}