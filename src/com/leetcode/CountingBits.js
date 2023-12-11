const countBits = (n) => {
    let offset = 1;
    const dp = [0];
    for(let i = 1; i <= n; i++) {
        if(offset * 2 === i)
            offset = i;
        dp[i] = 1 + dp[i - offset];
    }
    return dp;
}

console.log(countBits(5));
