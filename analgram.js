
//time complexity O (2N) and space complexity O(N)
function analgram(str1, str2) {
    
    str1 = str1.replace(/[\W_]+/g,"").toLowerCase()
    str2 = str2.replace(/[\W_]+/g,"").toLowerCase()

    let stringCharCount = {}

    if(str1.length !== str2.length)
        return false
    
    str1 = str1.split("")
    str2 = str2.split("")

    
    for (const item of str1) {
        stringCharCount[item] = stringCharCount[item]+1 ||1
    }

    for (const item2 of str2) {
        
        if(!stringCharCount[item2]){
            return false
        }else{
            stringCharCount[item2]--
        }
    }
    return true


}
console.log(analgram('hearter',"earther"));
