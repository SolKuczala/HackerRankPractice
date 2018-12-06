 function plusMinus(arr) {
    let positivos = 0
    let negativos = 0
    let zeros = 0
    for(let i = 0; i< arr.length; i++){
        let valor= arr[i]
        if(valor > 0){
            positivos++
        }else if(valor < 0){
            negativos++
        }else if(valor == 0){
            zeros++
        }
    } 
    let ratioPos = positivos / arr.length;
    let ratioNeg = negativos / arr.length;
    let ratioZero = zeros / arr.length;
    let fixedPositivos = ratioPos.toFixed(6);
    let fixedNegativos = ratioNeg.toFixed(6);
    let fixedZeros = ratioZero.toFixed(6);

    console.log(fixedPositivos)
    console.log(fixedNegativos)
    console.log(fixedZeros)

}
/////Mejora
 function plusMinus(arr) {
    let valoresCalculados = [0,0,0]

    arr.forEach(element => {
        if(element > 0){
            valoresCalculados[0] = valoresCalculados[0] + 1
        }else if(element < 0){
            valoresCalculados[1] = valoresCalculados[1] + 1
        }else if(element == 0){
            valoresCalculados[2] = valoresCalculados[2] + 1
        }   
    });

    valoresCalculados
        .map(element => element/arr.length)
        .map(element => element.toFixed(6))
        .forEach(element => console.log(element))
}
