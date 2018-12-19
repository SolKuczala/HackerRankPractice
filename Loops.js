function vowelsAndConsonants(s) {
    //print el orden de las vocales y luego de las consonantes
    let vowels = []
    let consonants = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u') {
            vowels.push(s[i])
        } else {
            consonants.push(s[i])
        }
    }

    let finalString = vowels.concat(consonants)
    
    for (let i = 0; i < finalString.length; i++) {
        console.log(finalString[i]);
    }
}
console.log(vowelsAndConsonants('javascriptloops'));
