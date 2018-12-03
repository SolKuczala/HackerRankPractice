 
function sockMerchant(n, ar) {
    let pares = 0
    let a = 0
    let b = 1
    let sortedArray= ar.sort(function compareNumbers(a, b) {
        return a - b})
        console.log(sortedArray);
        
    while(b < n){
        if(sortedArray[a] === sortedArray[b]){
            pares++
            a += 2 
            b += 2    
        } else {
            a++;
            b++;
        }
    }
    return pares
    
}
console.log(sockMerchant(9,[10, 20, 20, 10, 10, 30, 50, 10, 20]));