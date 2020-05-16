
//time complexity is O (N) and spcace O (N) beacuse space stoing all values of array
function chunk(array,size) {
    let res= []
    for (const item of array) {
        
        let last = res[res.length-1]
        
        if (!last || last.length == size) {
            res.push([item])
        } else {
            last.push(item)
        }
    }
    return res

}

console.log(chunk([1,2,5,3,56,35,78,40],3));

