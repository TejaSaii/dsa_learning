const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let T = 0;
rl.on('line', (input) => {
    if (!T) T = parseInt(input);
    else {
        solution(input);
        T--;
        if(!T) rl.close();
    }
});


const solution = (S) => {
    console.log(S * 24000);
}
