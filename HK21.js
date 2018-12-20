function hourglassSum(arr) {
    let hourglass = []
    for (let columna = 1; columna < arr.length - 1/*4 arrays*/; columna++) {
        for (let linea = 1; linea < arr.length - 1; linea++) {
            hourglass.push(arr[columna][linea]//centro 
                + arr[columna - 1][linea]//arriba del centro del HG
                + arr[columna + 1][linea]//abajo
                + arr[columna - 1][linea - 1]//extremo izq sup
                + arr[columna - 1][linea + 1]// extremo derecho sup
                + arr[columna + 1][linea + 1]//extremo izq inf
                + arr[columna + 1][linea - 1]//extemo derecho inf
            )
        }
    }
    let maxSumOfHourglasses = hourglass.sort((a, b) => a - b).pop()

    return maxSumOfHourglasses
}
console.log(hourglassSum([[1, 1, 1, 0, 0, 0],
[0, 1, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0],
[0, 0, 2, 4, 4, 0], [0, 0, 0, 2, 0, 0], [0, 0, 1, 2, 4, 0]]));
