function birthdayCakeCandles(ar) {
    let maxValue = Math.max(...ar)
    let cantidadDvelas = 0
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] == maxValue) {
            cantidadDvelas++
        } ;
    }
    return cantidadDvelas
}
console.log(birthdayCakeCandles([3, 2, 1, 3]));
