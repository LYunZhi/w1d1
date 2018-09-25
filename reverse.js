var input = process.argv.slice(2);

for (var i = 0; i < input.length; i++) {
    var result = ''
    var splitArr = input[i].split('')
    for (var j = splitArr.length - 1; j >= 0; j--) {
        result += splitArr[j]
    }
    console.log(result)
}
