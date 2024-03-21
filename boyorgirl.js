username = readline()
var result = []
for(i=0;i<username.length;i++){
     if(!result.includes(username[i])){
        result.push(username[i])
    }
}

var res = result.length % 2 === 0 ? "CHAT WITH HER!" : "IGNORE HIM!"
print(res)
