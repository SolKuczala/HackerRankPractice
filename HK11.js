function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let manzanasAdentro = 0
    let naranjasAdentro = 0
    apples.map(e => {
        let posicionada=e + a
        if (posicionada >=s && posicionada <= t) {
            manzanasAdentro++
        }
    })
    oranges.map(e => {
        let posicionada2= e + b
        if (posicionada2 >= s && posicionada2 <= t) {
            naranjasAdentro++
        }
    })
   console.log(manzanasAdentro, naranjasAdentro);
   
    
}
console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]));
