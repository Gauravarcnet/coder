'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the breakingRecords function below.
function breakingRecords(games) {

    let most = games[0];
    let least = games[0];
    
    let dMost = 0;
    let dLeast = 0;
    
    for (const score of games) {
        if (most < score) {
            most = score;
            dMost++;
        }
        else if (score < least) {
            least = score;
            dLeast++;
        }
    }
    
    return [dMost, dLeast];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
