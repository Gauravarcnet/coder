/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {*} array 
 * @returns 
 */


function moveAllZerosOneSide(array) {
    let boundry = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i]== 0) {
            [ array[boundry], array[i] ] = [ array[i], array[boundry] ]
            boundry++;
        }
        
    }
    return array;

}
console.log("moveAllZerosOneSide>>", moveAllZerosOneSide([4,2,0,1,0,3,0]));
function dutchNationalFlag (array, pivot) {
    let start_boundry = 0, last_boundry = array.length-1;
    for (let i = 0; i <= last_boundry;) {
        if (array[i] < pivot) {
            [ array[i], array[start_boundry] ] = [ array[start_boundry], array[i] ]
            start_boundry++;
            i++
        }else if (array[i] > pivot) {
            [ array[i], array[last_boundry] ] = [ array[last_boundry], array[i] ] 
            last_boundry--;
        }else{
            i++ ;
        }
        
    }
    
    return array;

}
console.log("dutchNationalFlag>>", dutchNationalFlag([5,2,4,4,6,4,4,3], 4));
