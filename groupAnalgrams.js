/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hashMap = {}; let sortedStr = "";
    for(let i =0; i < strs.length; i++){
        // console.log(strs[i].split('').sort().join(''))
        sortedStr = strs[i].split('').sort().join('');
        if(hashMap[sortedStr]){
            hashMap[sortedStr].push(strs[i]);
        }else{
            hashMap[sortedStr] = [];
            hashMap[sortedStr].push(strs[i])
        }
    }
    return Object.values(hashMap)
};
console.log("groupAnagrams>>>", groupAnagrams(["eat","tea","tan","ate","nat","bat"]));