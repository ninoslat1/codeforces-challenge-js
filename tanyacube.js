cube = readline()

var totalCubes = 0
var levels = 0

while (totalCubes < cube){
    levels++
    totalCubes += levels*(levels + 1)/2
}

if(totalCubes > cube){
    levels--
}

print(levels)