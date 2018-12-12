function breakingRecords(scores) {
    let highestScore = scores[0]
    let lowestScore = scores[0]
    let rompeRecord = 0
    let lowestRecord = 0
    
    for (let i = 1; i < scores.length; i++){
        if (scores[i] > highestScore){
            rompeRecord++
            highestScore = scores[i]
        }else if(scores[i] < lowestScore){
            lowestRecord++
            lowestScore = scores[i]
        }
    }
    return [rompeRecord,lowestRecord]
}
console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));
