var n = parseInt(readline());
var text = readline();
var res = ''
var ans = 0

for(var c of text) {
    c=='A' ? ans = ans - 1 : ans = ans + 1
}

ans < 0 ? res = 'Anton' : ans > 0 ? res = "Danik" : res = "Friendship"

print(res);