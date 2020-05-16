require('dotenv')
process.stdin.resume()
process.stdin.setEncoding('ascii')



let input_stdin = '',
    // input_stdin_array = "",
    input_currentline = 0

process.stdin.on('data', function (data) {
    input_stdin += data
})
process.stdin.on('end', _ => {
    input_stdin = input_stdin.trim().replace(/\s*$/, '').split("\n").map(string => {
        return string.trim()
    })
    main()
})

function readline(params) {
    return input_stdin[input_currentline++]
}

function leastEnergy(input) {

    let sum = 0,
        value

    while (input > 9 && input % 10 === 0) {
        input /= 10;

    }
    if (input === 1) {
        return 10;
    } else {
        while (input) {
            sum += input % 10;
            input = Math.floor(input / 10);
        }
        return sum
    }

}

function main() {
    const parameterVariable = readline()
    let result = leastEnergy(parameterVariable)
    console.log(result);

}