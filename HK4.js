function staircase(n) {
    let x = []
    for (let i = 0; i < n; i++){
         x.push(' ')
    }
    
    for (let j = 0; j < n; j++) {
        x.push('#');
        x.shift();
        console.log(x.join(' '));
    }
 }
 console.log(staircase(6));
