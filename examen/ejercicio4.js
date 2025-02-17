
function solicitarPIN() {
    const PIN_CORRECTO = "1234";
    let intentos = 3;
    
    while (intentos > 0) {
        let pin = prompt("Introduce tu PIN:");
       
        if (pin === PIN_CORRECTO) {
            console.log("Acceso concedido.");
            return true;
        } else {
            intentos--;
            if (intentos > 0) {
                console.log(`PIN incorrecto. Te quedan ${intentos} intento(s).`);
            } else {
                console.log("Acceso bloqueado.");
            }
        }
    }
    return false;
}

function cajeroAutomatico() {
    let saldo = 1000;
    let opcion = 0;
    if (!solicitarPIN()) return;

    do{
        menu()

        opcion = parseInt(prompt("Elija una opcion:"));
        console.log(opcion)

        switch(opcion){
            case 1: saldoActual(saldo); break;
            case 2: saldo = retirarSaldo(saldo); break;
            case 3: saldo = depositarSaldo(saldo); break;
            case 4: salir(); break;
            default: console.log("Por favor use una opcion valida")
        }
    } while(opcion != 4)
    
    
}

function menu(){
    console.log("1.Consultar saldo");
    console.log("2.Retirar dinero");
    console.log("3.Depositar dinero");
    console.log("4.Salir");
}

function saldoActual(saldo){

    console.log("Saldo Actual: " + saldo + "€")

}

function retirarSaldo(saldo){



    let retiro = parseInt(prompt("Cantidad a retirar:"));
    if(retiro > saldo){
        console.log("Cantidad no valida, usted no tiene esa cantidad")
    } else if(retiro < 0){
        console.log("Cantidad no valida, la cnatidad a retirar no puede ser negativa")
    } else {
        saldo = saldo - retiro;
        console.log("Cantidad retirada: " + retiro + "€")
        console.log("Saldo restante: " + saldo + "€")
        return saldo
    }

}

function depositarSaldo(saldo){

    let deposito = parseInt(prompt("Cantida a depositar:"))
    if(deposito < 0){
        console.log("Cantidad no valida, cantidad a depositar debe ser positiva")
    } else {
        saldo += deposito
        console.log("Cantidad depositada: " + deposito + "€")
        console.log("Saldo actual: " + saldo + "€")
        return saldo;
    }
}

function salir(){
    console.log("Gracias por elegir nuestro cajero")
}

// Ejecutar el programa
window.addEventListener('load', function() {
    console.log('La página está cargada');
    cajeroAutomatico();
});


