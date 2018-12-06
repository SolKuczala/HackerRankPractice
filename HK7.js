function miniMaxSum(arr) {
    let minP = 0
    let maxP = 0
    let ascendant = arr.sort((function(a, b){return a-b}))
    
    for (let i = 1; i < ascendant.length; i++) {
        maxP += ascendant[i]
    }
    
    let descendant = arr.sort((function(a, b){return b-a}))
    
    for (let j = 1; j < descendant.length; j++) {
        minP += descendant[j];
    }
    
    console.log(minP,maxP);
    
}
console.log(miniMaxSum([1 ,2 ,3 ,4 ,5]));
