var n = readline();
var res = 0;

for (var i = 0; i < n; i++) {
    var tmp = 0;
    var ans = readline().split(' ');
    
    for (var j = 0; j < ans.length; j++) {
        tmp += ans[j] ==="1"?1:0;
    }
    res += tmp >= 2 ? 1 : 0;
}

print(res);