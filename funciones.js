saludo("Diego",14);

function saludo(nombre,edad){
    document.write("<h2> Bienvenido " + nombre + "</h2>");
    document.write(`Tienes ${edad} años`)
    if(edad>17){
        document.write(`<h1> Puedes Pasar </h1>`)
    } else {
        document.write(`<h1 style="color:red">No Puedes Pasar </h1>`)
    }
}
