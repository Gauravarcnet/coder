require('dotenv')
process.stdin.resume()
process.stdin.setEncoding('ascii')



let input_stdin = '',
    // input_stdin_array = "",
    input_currentline = 0

process.stdin.on('data', function (data) {
    // console.log("gaurav"+data);

    input_stdin += data
} )
process.stdin.on('end', _ => {
    input_stdin = input_stdin.trim().replace(/\s*$/, '').split("\n").map(string => {
        return string.trim()
    })
    main()
})

function readline(params) {
    return input_stdin[input_currentline++]
}

function greeting(params) {
    console.log("hello world")
    console.log(params);
    
    
}

function main() {
    const parameterVariable = readline()
    greeting(parameterVariable)
}



