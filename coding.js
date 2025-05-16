//prfx sum

// function prefix_sum(array, i, j, x, y){
//     let sum = 0;
//     let prefix_array = [];
//     console.log(`going out >>`);
//     // if (sum == 0) {
//         console.log(`going insid >>`);

//         for (let index = 0; index < array.length; index++) {
//             sum = sum + array[index];
//             prefix_array.push(sum)
//         } 
//     // }
//     console.log(prefix_array[j] - prefix_array[i - 1]);
//     console.log(prefix_array[y] - prefix_array[x - 1]);


//     return (prefix_array[j] - prefix_array[i - 1])
// }
// console.log((prefix_sum([1, 2, -3, -4, 5, 6], 2,4,1,5)));


// sliding window
// let arr = [2, 5, 1, 10, 10]
// function longSubString(array, k) {
//     let l , r, sum, maxLgth = 0;
//     while (r < k) {
//         sum = array[r] + sum;
//         if (sum < k) {
//             maxLgth = Math.max(maxLgth, (r-l+1));
//             r++;
//         } else {
//             l++;
//         }
//     }
//     return maxLgth;
// }
// console.log(longSubString(arr, 14));

// Rvrs Trvsrl
function duplicateEvensInPlace(arr) {
    let originalLength = arr.length;

    // Step 1: Expand the array to accommodate duplicates
    for (let i = 0; i < originalLength ; i++) {
        if (arr[i] % 2 === 0) {
            arr.splice(i, 0, arr[i]); // Add a duplicate of the even number
            i++; // Skip the next element to avoid processing the duplicate again
        }
        // console.log("Duplicate i valu>>>", i, arr, originalLength);
    }

    // The array is modified in place
    return arr;
}
// console.log(duplicateEvensInPlace([1,2,3,4,5,6]));

// function repeat(value, times){
//     if(times < 0){
//         return ([])
//     }
//     if(times == 0){
//         console.log("error")
//     }else{
//          value = `${value} ${value}`
//          repeat(value, times-1)
//          return value.split(" ")
//     }
//   }
//   console.log(repeat('g', 3))

// //sliding window
// function slidingWindow(array, target) {
//     let start = 0, end = 0, sum = array[0] ;
//     while (start < array.length-1) {
//         if (sum < target) {
//             if (end == array.length-1) {
//                 break ;
//             }
//             end++ ;
//             sum += array[end] ;
//         }else if(sum > target){
//             sum -= array[start] ;
//             start ++ ;
//         }else{
//            return ([start,end])
//             // return ([array[start],array[end]])
//         }
//     }
// }
// console.log(slidingWindow([1,2,3,5,2] ,8))
// Given a String, find the longest substring with unique characters.
// function longestSubstringUniqueCharacters(String) {
//     let start = 0, end = 0, hashmap = {}, appndString = "", MaxStringL = "" ;
//     while (start < array.length-1) {
//         if (end > String.length-1) {
//             break ;
//         }
//         if (!hashmap[String[end]]) {
//             end++ ;
//             hashmap[end] = true ;
//             appndString +=  String[end]
//             if (appndString.length >= MaxStringL.length) {
//                 MaxStringL = appndString ;
//             }
//         }else{
//            delete hashmap[start] ;
//            end++ ;
//             hashmap[end] = true ;
//             appndString +=  String[end]
//             if (appndString.length >= MaxStringL.length) {
//                 MaxStringL = appndString ;
//             }

//         }
//     }
// }
// console.log(longestSubstringUniqueCharacters("whatwhywhere"))


/**
 * The function `subArrayWith0Sum` takes an array as input and returns a subarray with a sum of 0 if
 * such a subarray exists.
 * @param array - The `subArrayWith0Sum` function you provided is almost correct. It aims to find a
 * subarray within the given array that sums up to 0. However, there are a couple of issues in the code
 * that need to be addressed.
 * @returns The function `subArrayWith0Sum` is checking for a subarray within the input array that sums
 * up to 0. If such a subarray is found, it returns that subarray. If not, it returns the element in
 * the array that is equal to 0.
 */
function subArrayWith0Sum(array) {

    let prefix_sum = 0 ;
    let map = {} ;

    for (let i = 0; i < array.length -1 ; i++) {
        prefix_sum +=  array[i] ;
        if (array[i] == 0) {
            return array[i] ;
        }
        if (map[prefix_sum]) {
            return (array.slice(map[prefix_sum], i+1))
        } else {
            map[prefix_sum] = true ;
        }
    }
    

}
console.log(subArrayWith0Sum([-3, 2, 3, 1, 6]));