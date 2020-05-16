
// time complexity O(n)
function palindrome(str) {
    let str1 = str.trim().toLowerCase().split('')
    let revStr = ''
    for (const char of str1) {
        revStr = char+revStr
    }
    console.log("str",str);
    console.log("revStr",revStr);
    
    
    return (revStr === str.toLowerCase() ? true:false)
}

console.log(palindrome("love"));
