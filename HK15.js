function getMoneySpent(keyboards, drives, b) {
    let sumas = []

    for (let i = 0; i < drives.length; i++) {
        for (let j = 0; j < keyboards.length; j++) {
            let suma = drives[i] + keyboards[j]
            sumas.push(suma)
        }
    }

    let mayoresAb = sumas.filter(valor => valor > b)
    let menoresAb = sumas.filter(valor => valor < b)

    if (mayoresAb.length == sumas.length) {
        return -1
    } else {
        let result = menoresAb
            .sort((a, b) => a - b)
            .pop()
        return result
    }
}
console.log(getMoneySpent([5, 2, 8], [3, 1], 10))