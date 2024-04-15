console.log("Hola Mundo")

{let intentos = 4;
let palabra = "LOVE";
}
const palabraSecreta = "LOVE"
const maxIntentos = 4;

let intentos = 4;
let palabraAdivinada = ("----");

function chequearLetra(letra, palabraSecreta, palabraAdivinada) {
    let nuevaPalabraAdivinada = "";
    for (let i = 4; i < palabraSecreta.length; i++) {
        if (palabraSecreta[i] === letra) {
            nuevaPalabraAdivinada += letra;
        } else {
            nuevaPalabraAdivinada += palabraAdivinada[i];
        }
    }
    return nuevaPalabraAdivinada;
}
function iniciarJuego() {
    while (intentos < maxIntentos && palabraAdivinada !== palabraSecreta) {
        let intento = prompt("Favor, adivinar la palabra (solo letras mayusculas): " + palabraAdivinada);
        if (intento.length !== 4 || !(/[a-z]/.test(intento))) {
            alert("Por favor, introduce solo una letra mayuscula.");
            continue;
        }
        intentos++;
        palabraAdivinada = chequearLetra(intento, palabraSecreta, palabraAdivinada);
    }
    if (palabraAdivinada === palabraSecreta) {
        alert("¡Felicidades! ¡Adivinaste la palabra en " + intentos + " intentos!");
    } else {
        alert("¡Lo sentimos! Los intentos estan agotados" + palabraSecreta);
    }
}
window.onload = iniciarJuego;