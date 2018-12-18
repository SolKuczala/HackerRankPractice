function repeatedString(string, cantidadFinal) {
    let cantidadDvecesQentra = cantidadFinal / string.length

    let cantidadDeAporString = 0
    for (let i = 0; i < string.length; i++) {
        if (string[i] == 'a') {
            cantidadDeAporString++
        }
    }
    if (cantidadFinal % string.length == 0) {
        return cantidadDeAporString * cantidadDvecesQentra
    } else {
        let cantidadDeAfaltantes = 0
        let charQyaHay = string.length * Math.floor(cantidadDvecesQentra)
        let charFaltantes = cantidadFinal - charQyaHay
        let stringCortado = string.slice(0, charFaltantes)
        for (let i = 0; i < stringCortado.length; i++) {
            if (string[i] == 'a') {
                cantidadDeAfaltantes++
            }
        }
        return (cantidadDeAporString * Math.floor(cantidadDvecesQentra)) + cantidadDeAfaltantes
    }
}


console.log(repeatedString('aab'
    , 882787));
//console.log(repeatedString('a'
    //, 1000000000000));

