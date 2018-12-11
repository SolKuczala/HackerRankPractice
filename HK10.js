function gradingStudents(grades) {
    return grades.map(e => {
        let resto = e % 5
        if (e > 37 && resto > 2) {
            e += 5 - resto
        }
        return e
    })
}

console.log(gradingStudents([73, 67, 38, 33]));


