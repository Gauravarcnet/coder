
// time complexity is O (N) and space complexity is O (N    )
function caesarCipher(str,shift) {
    const alphabetChar = 'abcdefghijklmnopqrstuvwxyz'
    let res = ''

    for (let i = 0; i < str.length; i++) {
        const char = str[i]
        const idx = alphabetChar.indexOf(char)

        if(idx == -1){
            res += str[i];
            continue;
        }

        const encodedIdx = (idx+shift)%26

        res += alphabetChar(encodedIdx)
    }
    return res

}