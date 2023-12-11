const fib = (n) =>{
    if(n === 0 || n === 1) return n;
    let dp = [0, 1];
    for(let i = 2; i < n + 1; i++){
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

console.log(fib(9));
console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
