let credito; //el credito total
let numero; //el numero que se elige
let apuesta; //la apuesta a que sale el numero seleccionado
let numeroRuleta; //numero favorecido
let seguirApostando; //quiere seguir apostando

/* se carga credito */
function cargaCredito() {
    credito = parseInt(prompt("Cuanto credito desea cargar")); 
    

    if(credito === null || Number.isNaN(credito)) {
        console.log("No cargo credito, presione F5 para cargar");
    } else {
        console.log("Su credito es de: " + credito);
    }  /*verifico que sea un numero y no vacio o una letra*/
}
cargaCredito();

/* elige un numero y se apuesta por ese numero. luego se actualiza el valor del credito */
function eligeNumero() {
    numero = parseInt(prompt("Seleccione su numero"));
    apuesta = parseInt(prompt("Cuanto quiere apostar"));

    console.log("Aposto " + apuesta + " por el " + numero);

    credito -= apuesta;
    console.log("Queda credito " + credito);
}
eligeNumero();

/* ruleta que saca numero random desde 0 a 38 */
function ruleta() {
    numeroRuleta = Math.floor(Math.random() * (39 - 0));
    console.log(numeroRuleta);

    if (numeroRuleta == numero){
        console.log("Ganaste")
    } else if (numeroRuleta !== numero && credito >= 0) {
        seguirApostando = confirm("No tuvo suerte, quiere seguir apostando? Presione OK");
    }

    if(seguirApostando == true) {
        eligeNumero();
        ruleta();
    } else {
        console.log("Mejor suerte la proxima");
    }
}
ruleta();

