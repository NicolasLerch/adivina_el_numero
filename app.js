const readlineSync = require('readline-sync');

//Generar el numero aleatorio
const getRandomInt = () => {
    return Math.floor(Math.random() * 100) + 1;
}

//Sumar intentos
let tries = 1;
const tryCount = () => {
    tries += 1;
    return tries;
}

let num = getRandomInt();

// Preguntar por el numero
let chosenNumber = readlineSync.question("Elige un numero del 1 al 100: ");


// Verificar si el numero es mayor o menor
const verifyNumber = () => {
while (chosenNumber != num){
    if (chosenNumber < num) {
        chosenNumber = readlineSync.question(`${chosenNumber} no es el numero. Elige un numero mayor a ${chosenNumber}: `);
        tryCount();
    } else {
        chosenNumber = readlineSync.question(`${chosenNumber} no es el numero. Elige un numero menor a ${chosenNumber}: `);
        tryCount();
    }
}
console.log("FELICITACIONES! ADIVINASTE EL NUMERO " + num + " en " + tries + " intentos.");
}

//Iniciar
verifyNumber();