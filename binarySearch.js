
// time complexity is O(log N) ans space complexity is O(1)

function binarySearch(sortedArray, val) {
    let left = 0
        right = sortedArray.length-1

    while (left <= right) {
        let mid = Math.floor((left+right)/2)
        let midVal = sortedArray[mid]

        if(midVal === val){
            return mid
        }else if(midVal < val){
            left = mid+1
        }else{
            right = mid-1
        }
    }
    return -1
}

console.log(binarySearch([0,1,2,3,4,5,6],7));



