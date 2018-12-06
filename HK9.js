function timeConversion(s) {
    let parts = s.split(':')
    let lastPart = parts[2].split('')
    let condition = lastPart[2]+lastPart[3]
    let transformedString = ''

    if (condition == 'PM') {
        if (parts[0] !== 12) {
            let newHourPm = parts[0]*1 +12
            transformedString += newHourPm
            +':'
            + parts[1]
            + ':'
            + lastPart[0]+lastPart[1]
        }else{
            transformedString += s-condition
        }     
    }else if (condition == 'AM') {
        if (parts[0] == 12) {
            let newHourAm = parts[0]*1 -12
            transformedString += newHourAm
            +'0:'
            + parts[1]
            +':'
            + lastPart[0]+lastPart[1]
        }else{
            transformedString += s-condition
        }
    }
    return transformedString
}
console.log(timeConversion('07:05:45PM'));
//must return '19:05:45'