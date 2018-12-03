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

////ejemplo mas funcional de otra persona

function plusMinus(arr) {
    [   
        {fn:  e => e > 0 ,  q: 0},
        {fn:  e => e < 0 ,  q: 0},
        {fn:  e => e == 0,  q: 0}
    ]
    .forEach(indicador => {
        arr.forEach(element => {
            if(indicador.fn(element)){
                indicador.q++
            }   
        });
        console.log(Number(indicador.q/arr.length).toFixed(6));
    })
}

////y otro ejemplo mas

function plusMinus(arr) {
    [   
        e => e > 0,
        e => e < 0,
        e => e == 0
    ]
    .forEach(isType => {
        let cantidad = arr.filter(isType).length
        console.log(Number(cantidad/arr.length).toFixed(6))
    })
}

console.log(plusMinus([-4,3,-9,0,4,1]))