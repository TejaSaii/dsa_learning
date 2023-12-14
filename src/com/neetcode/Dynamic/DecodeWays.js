const numDecodings = (s) => {
    const dp = new Map();
    return dfs(0, s, dp);
}
//solution by fraz
function dfs(i, s, dp) {
    if(i >= s.length) return 1;
    if(dp.has(i)) return dp.get(i);
    let ans = 0;
    let op1 = parseInt(s[i]);
    let op2 = 0;
    if(i < s.length - 1){
        op2 = op1 * 10 + parseInt(s[i + 1]);
    }
    if(op1 > 0) ans += dfs(i + 1, s, dp);
    if(op1 > 0 && op2 > 0 && op2 <= 26) ans += dfs(i + 2, s, dp);
    dp.set(i, ans);
    return ans;
}

//bottom-top approach
function numDecodings2(s) {
    let n = s.length;
    const dp = new Array(n + 1).fill(0);
    dp[n] = 1;
    for(let i = n - 1; i >= 0; i--) {
        let op1 = parseInt(s[i]);
        let op2 = 0;
        if(i < n - 1) {
            op2 = op1 * 10 + parseInt(s[i + 1]);
        }
        if(op1 > 0) dp[i] += dp[i + 1];
        if(op1 > 0 && op2 > 0 && op2 <= 26) dp[i] += dp[i + 2];
    }
    return dp[0];
}

console.log(numDecodings('12'));
console.log(numDecodings('226'));
console.log(numDecodings('06'));
console.log(numDecodings('11111111111111111111111111111111111'));
console.log(numDecodings2('12'));
console.log(numDecodings2('226'));
console.log(numDecodings2('06'));
console.log(numDecodings2('11111111111111111111111111111111111'));
