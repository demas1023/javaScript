function checkPrime(){
    let value = document.getElementById("num").value
    if(value >= 1){
       showPrimes(value)
    } else {
        document.getElementById("result").innerHTML = "numero no valido, numero debe ser mayor o igual a 1"
        document.getElementById("result").style.color = "#FF0000";
    }
}

function showPrimes(value){
    let result = ""
    for(let i = 1; i <= value; i++){
        if(esPrimo(i)){
            result+= i + " ";
        }
    }
    document.getElementById("result").innerHTML = result
    document.getElementById("result").style.color = "#000000";
}

function esPrimo(num){
    if(num < 2) return false
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num%i===0){
            return false
        }
    }
    return true
}