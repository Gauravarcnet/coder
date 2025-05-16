function recursive_binary_search(list, target)  {
    if (list.length === 0) {
        return false
    }else {
        let mid = Math.floor(list.length / 2);
        if (list[mid] === target) {
            return true
        } else if (list[mid] < target) {
            return recursive_binary_search(list.slice(mid + 1), target)
        } else {
            return recursive_binary_search(list.slice(0, mid), target)
        }
    }
}
console.log("binary search>>>", recursive_binary_search([1,2,3], 3));
console.log("binary search>>>", recursive_binary_search([1,2,3,4,,5,6,7,8,9,10], 7));