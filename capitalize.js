
// time complexity O (N)
function capatalize(str) {
    let words = str.split(" ")
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].slice(0,1).toUpperCase()+ words[i].slice(1)
        }
    return words.join(" ")
}
console.log(capatalize("i love My country"));
