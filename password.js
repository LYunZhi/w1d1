var input = process.argv

function obfuscate (string) {
    var stringArr = string.split('')

    for (var i = 0; i < stringArr.length; i++) {
        if (stringArr[i] === 'a') {
            stringArr[i] = '4'
        } else if (stringArr[i] === 'e') {
            stringArr[i] = '3'
        } else if (stringArr[i] === 'o') {
            stringArr[i] = '0'
        } else if (stringArr[i] === 'l') {
            stringArr[i] = '1'
        } else {
            stringArr[i] = stringArr[i]
        }
    }

    return stringArr.join('')
}

console.log(obfuscate(input[2]))