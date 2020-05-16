// time complexity is O(N^2) ans space complexity is )(N)

function pyramid(n) {
    for (let i = 1; i <= n; i++) {
        
        // for (let j = i; j > n; j--) {
        //     str += '#'
            
        // }
        const padding = ' '.repeat(n-i)
        const hashing = '#'.repeat(i*2-1)

        console.log(padding+hashing+padding);
        
    }
}

pyramid(10)