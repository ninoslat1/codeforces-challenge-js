var liter = parseInt(readline())
var array = []
var sum = 0

for (i = 0; i < liter; i++) {
    var num = readline()
    array.push(num)
}

for(i=0;i<array.length;i++){
    sum = sum + array[i]
}

print(sum/array.length)
