
// time complexity O(N) bcs we have visited everyCharacter of string
// space complexity O (1) bcs the letter are fixed(26) and we storing only these in object
function maxchar(str) {
    let obj = {},
        maxCount = 0
        maxChar = ''
        str = str.trim().split("")
        for (const char of str) {
            obj[char] = obj[char]+1 || 1 // latest syntax of ES6 
            if (obj[char] > maxCount) {
                maxchar = char
                maxCount = obj[char]
            }
        }
        return maxchar

}

console.log(maxchar("133777777777777"));
