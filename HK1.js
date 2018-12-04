function toLeft(a,d) {
    for(let i = 0;i < d;i++){
        let sortedA = a
        let alFinal = a.shift()
         a.push(alFinal)
     }
     return a
 }
 console.log(toLeft([1, 2, 3, 4, 5],3));
