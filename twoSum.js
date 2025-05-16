/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {*} array1 
 * @param {*} target1 
 * @returns 
 */

function twoSum(array1, target1) {
    let first = 0, last = array1.length-1;
    while (first < last) {
        let sum = array1[first] + array1[last];
        if (sum === target1) {
            return [array1[first], array1[last]];
        } else if (sum < target1) {
            first++;
        } else {
            last--;
        }
    }
    
}
console.log("twoSum>>", twoSum( [1,2,3,5,6,7],11));