var firstText = readline()
var secondText = readline()
var isPalindrome = true

for (var i = 0; i < firstText.length; i++) {
    if (firstText[i] !== secondText[secondText.length - i - 1]) {
      isPalindrome = false;
      break;
    }
}

var result = isPalindrome ? "YES" : "NO"
print(result)