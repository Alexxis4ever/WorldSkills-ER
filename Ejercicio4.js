// Número mágico:
// Desarrolla un programa que genere un número aleatorio entre 1 y 100, y luego le pida al
// usuario que adivine el número. Si el número ingresado es mayor al generado, muestra un
// mensaje indicando que el número es demasiado alto. Si el número ingresado es menor,
// muestra un mensaje indicando que el número es demasiado bajo. Si el número ingresado
// es igual al generado, muestra un mensaje de felicitaciones.

function magicNumber() {
    
    let limit = 100
    const generateNumbersRandom = Math.random(1) * limit
    const numberRandom = generateNumbersRandom.toFixed(0)

    const numberUser = 8
    
    // console.log('Numero generado: '+numberRandom);
    // console.log('Numero usuario: '+numberUser);

    if (numberUser > numberRandom) {
        return 'El numero ingresado es demasiado alto'
    } else if (numberUser < numberRandom) {
        return 'El numero ingresado es demasiado bajo'
    } else if (numberUser == numberRandom) {
        return 'Felicitaciones has acertado'
    }
}

console.log(magicNumber());