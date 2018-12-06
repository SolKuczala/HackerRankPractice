function countingValleys(n, s) {
    //contador de valles
    
    let valleys = 0
    let startPoint = 0
    for (let i = 0; i < n; i++) {
        let value = s[i]
        if (value == 'D') {
            if (startPoint == 0) {
                valleys++
            }
            startPoint--
        } else {
            startPoint++
        }
    }
    return valleys
}

console.log(countingValleys(8,'UDDDUDUU'));
