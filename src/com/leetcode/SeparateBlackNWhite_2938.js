//contest
//medium
//my solution

const minimumSwaps = (s) => {
    let prev = 0;
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '0') {
            count += (i - prev);
            prev++;
        }
    }

    return count;
}

//reverse iteration
const minimumSwaps2 = (s) => {
    let count = 0;
    let ans = 0;

    for (let i = s.length - 1; i >= 0; i--){
        if(s[i] === '0') {
            count++;
        }
        else {
            ans += count;
        }
    }

    return ans;
}

console.log(minimumSwaps('10110010'));
console.log(minimumSwaps2('10110010'));
