function binary_search(list, target) {
    let start = 0;
    let end = list.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (list[mid] === target) {
            return mid;
        } else if (list[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return null;
}
console.log("binary search>>>", binary_search([1,2,3,4,,5,6,7,8,9,10], 17));