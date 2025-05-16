/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {*} array 
 * @returns 
 */
function longestSubstringUniqueCharacters(string) {
    let start = 0, end = 0, hashmap = {}, str = "", longestSubstring = "", stringLength = 0;
    while (start < string.length && end < string.length) {
        if (!hashmap[string[end]]) {
            hashmap[string[end]] = true;
            str = `${str}${string[end]}`; // Append current character to `str`
            if (str.length > stringLength) {
                start;
                longestSubstring = str ;
                stringLength = str.length; // Update maximum length
            }
            end++; // Expand the window
        } else {
            delete hashmap[string[start]]; // Remove the first character from hashmap
            str = str.slice(1); // Remove the first character from the substring
            start++; // Shrink the window
        }
    }
    return {"stringLength": stringLength, longestSubstring} ;
}
console.log("================================", longestSubstringUniqueCharacters("whatwhywhere"));