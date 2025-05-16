function bubble_sort(array) {
    let swapping
    do {
        swapping = false
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i+1]) {
                [ array[i], array[i+1] ] = [ array[i+1], array[i] ]
                swapping = true
            }
            
        }
    } while (swapping);
    return array
    
}
console.log("bubble_sort>>>", bubble_sort([1,9,10,2,8,3,4,5,6,7]));