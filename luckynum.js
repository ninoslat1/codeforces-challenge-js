var num = readline()
var result = 0
var numString = num.toString()

for (var i = 0; i < numString.length; i++) {
    if (numString[i] === '4' || numString[i] === '7') {
        result = result + 1
    }
}

if (result === 4 || result === 7) {
    print('YES')
} else {
    print('NO')
}