var n = readline();

for (var i = 0; i < n; i++) {
    var str = readline();

    var result = str.length > 10 ? str[0] + (str.length - 2) + str[str.length - 1] : str

    print(result)
}