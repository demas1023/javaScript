let combinacionGanadora = new Array(5);
let miJugada = new Array()

generarCombinacionGanadora(combinacionGanadora);

for(let l = 0; l < combinacionGanadora.length; l++){
    document.write(combinacionGanadora[l] +" ")
}

function generarCombinacionGanadora(numeros){
    

        

        for(let i = 0; i < 5; i++){
            numeros[i] = (Math.trunc((Math.random() * 50) + 1));

        }

        
    
    return(numeros);
}