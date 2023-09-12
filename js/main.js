let credito; //el credito total
let numero; //el numero que se elige
let apuesta; //la apuesta a que sale el numero seleccionado
let numeroRuleta; //numero favorecido
let seguirApostando; //quiere seguir apostando

/* se carga credito */
function cargaCredito() {
    credito = parseInt(prompt("Cuanto credito desea cargar")); 
    
    if(credito === null || Number.isNaN(credito)) {
        alert("No cargo credito, presione F5 para cargar");
    } else {
        alert("Su credito es de: " + credito);
    }  /*verifico que sea un numero y no vacio o una letra*/
}
cargaCredito();

/* elige un numero y se apuesta por ese numero. luego se actualiza el valor del credito */
function eligeNumero() {
    numero = parseInt(prompt("Seleccione su numero"));
    apuesta = parseInt(prompt("Cuanto quiere apostar"));

    alert("Aposto " + apuesta + " por el " + numero);

    if(credito >= 1) {
        alert("Queda credito " + (credito -= apuesta));
    } else {
        alert("No queda mas credito, presione F5 para recargar")
    }
}
eligeNumero();

/* ruleta que saca numero random desde 0 a 38 */
function ruleta() {
    numeroRuleta = Math.floor(Math.random() * (39 - 0));
    alert("El numero favorecido es " + numeroRuleta);

    if (numeroRuleta == numero){
        alert("Ganaste")
    } else if (numeroRuleta !== numero) {
        seguirApostando = confirm("No tuvo suerte, quiere seguir apostando? Presione OK");
    }

    if(seguirApostando == true && credito > 0) {
        eligeNumero();
        ruleta();
    } else if (credito >= 0){
        alert("Mejor suerte la proxima");
    }
}
ruleta();

