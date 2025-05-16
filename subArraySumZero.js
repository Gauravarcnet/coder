function subArraySumZero(array) {
    let map = {} , prefix_sum = 0 , start = 0;
    for (let i = 0; i < array.length; i++) {
        prefix_sum += array[i];
        if (map[prefix_sum]) {
            return {start:map[prefix_sum].index+1 , end: i};
        }else{
            map[prefix_sum] = {true:true, index:i};
        }
        console.log(map);
     }
     return null;
}

console.log("subArraySumZero>>>", subArraySumZero([2,4,-2,1,-3,5,-3]));
console.log("subArraySumZero>>>", subArraySumZero([2,4,-2,1,-3,5,-3] ));
