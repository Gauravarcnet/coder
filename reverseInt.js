
//time complexity O(log N)
function reverseInt(int) {
    let revIntArray = int.toString().split('')
    let reverseIntNum = ''
    for (const num of revIntArray) {
        reverseIntNum = num+reverseIntNum
    }
    reverseIntNum = parseInt(reverseIntNum)
    if (int>0) {
        return (reverseIntNum)

    } else {
        return (reverseIntNum*-1)

    }
}

console.log(reverseInt(-1553454));


