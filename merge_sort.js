/**
 * 
 * Best-case Time Complexity of Merge Sort: O(nlog(n))

Average-case Time Complexity of Merge Sort: O(nlog(n))

Worst-case Time Complexity of Merge Sort: O(nlog(n))

spacing-case Time Complexity of Merge Sort: O(n)

 * @param {*} arr 
 * @returns 
 */
function merge_sort(arr) {
    // Base case: if the array has only one element, it is already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Divide the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Recursively sort both halves
    const sortedLeft = merge_sort(left);
    const sortedRight = merge_sort(right);

    // Merge the sorted halves
    return merge(sortedLeft, sortedRight);
    
}
function merge(left, right) {
    let sortedArr = [] // the sorted items will go here
    while (left.length && right.length) {
      // Insert the smallest item into sortedArr
      if (left[0] < right[0]) {
        sortedArr.push(left.shift())
      } else {
        sortedArr.push(right.shift())
      }
    }
    // Use spread operators to create a new array, combining the three arrays
    return [...sortedArr, ...left, ...right]
  }

console.log("merge_sort>>>", merge_sort([1,9,10,2,8,3,4,5,6,7]));