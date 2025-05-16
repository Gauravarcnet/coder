// linear_search

function linear_search(list, target)  {
    
    for (let i = 0; i < list.length; i++) {
        if (list[i] === target) {
            return i;
        }
    }
    return null;
}
console.log("linear_search>>.", linear_search([1,2,3,4,5,6,7], 9));

