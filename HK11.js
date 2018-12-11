function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let cantMadentro = 0
    let cantNadentro = 0
    let arrPosMan = apples.map(e => {
        return e + a
    })
    let arrPosNar = oranges.map(e => {
        return e + b
    })
    let miVector = t - s
    arrPosMan.map(e => {
        if (e > 6 && e < 12) {
            cantMadentro++
        }
    })
    arrPosNar.map(e => {
        if (e > 6 && e < 12) {
            cantNadentro++
        }
    })
    return [cantMadentro, cantNadentro]
}
console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]));
