function duplicateEvensInPlace(arr) {
    let originalLength = arr.length;
    if (!originalLength) {
        return -1
    }

    // Step 1: Expand the array to accommodate duplicates
    for (let i = 0; i < originalLength ; i++) {
        if (arr[i] % 2 === 0) {
            arr.splice(i, 0, arr[i]); // Add a duplicate of the even number
            i++; // Skip the next element to avoid processing the duplicate again
        }
    }

    // The array is modified in place
    return arr;
}

console.log(duplicateEvensInPlace([1,2,5,6,8]));