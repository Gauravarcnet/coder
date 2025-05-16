function mostAmountWater(height) {
    let length = height.length;
    let leftPointer = 0;
    let rightPointer = length-1;
    let mostAmountWater = 0;
    let currentAmountWater = 0;
    if (length <= 1) {
        return height[0]
    }
    while( leftPointer < rightPointer ){
        console.log(`its coming 0`);
        if( height[leftPointer] < height[rightPointer] ) {
            console.log(`its coming 1`);
            currentAmountWater = height[leftPointer] * (rightPointer - leftPointer);
            mostAmountWater = Math.max(mostAmountWater, currentAmountWater)
            leftPointer++;
        }else{
            console.log(`its coming 2`);
            currentAmountWater = height[rightPointer] * (rightPointer - leftPointer);
            mostAmountWater = Math.max(mostAmountWater, currentAmountWater)
            rightPointer--
        }
    }
    return mostAmountWater
}
// console.log(`mostAmountWater>>>${mostAmountWater([1,8,6,2,5,4,8,3,7])}`);
// console.log(`mostAmountWater>>>${mostAmountWater([1])}`);
console.log(`mostAmountWater>>>${mostAmountWater([2,1])}`);