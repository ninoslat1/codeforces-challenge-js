text = readline()

var upperWord = []
var lowerword = []

for(i=0;i<text.length;i++) {
    if(text[i] === text[i].toUpperCase()) {
        upperWord.push(text[i])
    } else if(text[i] === text[i].toLowerCase()) {
        lowerword.push(text[i])
    }
}

var res = upperWord.length > lowerword.length ? text.toUpperCase() : text.toLowerCase()
print(res)