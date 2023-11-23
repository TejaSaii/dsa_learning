process.stdin.on('data', (input) => {
    solution(input);
    process.exit();
})

const solution = value => {
    if (value < 12)
        console.log('no');
    else 
        console.log('yes');
}
