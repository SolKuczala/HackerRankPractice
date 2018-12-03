function diagonalDifference(arr) {
    
     let n = arr.length
     let diagonalUno= 0 
     let diagonalDos= 0
     for (let i = 0; i < n; i++) {
         diagonalUno += arr[i][i]
         diagonalDos += arr[i][n-1-i]
         console.log(n, diagonalUno,diagonalDos)
        }
     return Math.abs(diagonalUno - diagonalDos) 
 }
 console.log(diagonalDifference([[11,2,4],[4,5,6],[10, 8, -12]]));