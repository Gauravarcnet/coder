function quick_sort(arr) {
    console.log("quick_sort>>", arr);
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[0];
    let left = [];
    let right = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quick_sort(left),pivot, ...quick_sort(right)];

}
console.log("quick_sort>>>", quick_sort(['a', 's', 'i', 'r', 'ai', 'ad', 'so', 'ir']));