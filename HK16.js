function catAndMouse(x, y, z) {
    let distX, distY

    if (x > z) {
        distX = x - z
    } else {
        distX = z - x
    }
    if (y > z) {
        distY = y - z
    } else {
        distY = z - y
    }

    if (distX == distY) {
        return 'Mouse C'
    } else if (distX < distY) {
        return 'Cat A'
    } else {
        return 'Cat B'
    }


}
console.log(catAndMouse(1, 2, 3));
console.log(catAndMouse(1, 3, 2));
