function bonAppetit(bill, k, b) {
    let suma = 0
    let y = bill.map(e => {
        return suma += e
    })

    let x = (suma - bill[k]) / 2

    if (b == x) {
        return 'Bon Appetit'
    } else {
        return b - x
    }
}
console.log(bonAppetit([3, 10, 2, 9], 1, 12));//mi suma es 14(porque saque 10)
