/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {*} array 
 * @returns 
 */

function subArraySumToTarget(array, target)  {
    let start = 0, end = 0, sum = array[0];
    while (start < array.length-1 && end < array.length-1) {
        if (sum === target) {
            return {start: start, end: end, sum: sum};
        }
        if (sum < target) {
            end ++ ;
            sum = sum + array[end];
        }if (sum > target) {
            sum = sum - array[start];
            start++ ;
        }
    }
    return null;
}
console.log("================================", subArraySumToTarget([1,2,3,5,2], 8));