//  a searching algo that search by manually checking everything 
//  in the data set to see if it is the value that we are looking for it

// time complexity O(N)
function linearSearch(array,val) {
    for (let index = 0; index <= array.length; index++) {
        
        if(val === array[index]){
            return true
        }

    }
    return false

}
console.log(linearSearch(['gaurav','ankit'],'ankit'));
