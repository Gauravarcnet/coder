function bubbleSorting(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(array[j] > array[j+1]){
                swap(array,j,j+1)
            }           
        }
    }
    return array
}
function swap(arr,i,j) {
    let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    // return arr
}


console.log(bubbleSorting([1,5,67,36,5,]));
