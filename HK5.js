function compareTriplets(alice, bob) {
    let alicePoints = 0;
    let bobPoints = 0;
    
    for (let i=0; i < 3; i++){
        if (alice[i] > bob[i]){
            alicePoints += 1; 
        } else if(alice[i] < bob[i]){
            bobPoints += 1;
        }
    
    }
    return [alicePoints,bobPoints];

}