function jumpingOnClouds(c) {
    let jumps = 0
    let index1 = 0
    let index2 = 2
    for (let i = 0; i < c.length; i++) {
        if (c[index1] == c[index2] && index2 < c.length) {
            console.log(c.length);

            jumps++
            index1 = index2
            index2 += 2
        } else if (index1 == c.length - 1) {
            return jumps
        } else if (index1 == c.length - 2 || index2 > c.length - 1) {
            index2 = c.length - 1
        } else {
            index2--
        }
        console.log(jumps, index1, index2);

    }
    return jumps
}
let test = [0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,]
console.log(jumpingOnClouds(test))
console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0, 0]));

