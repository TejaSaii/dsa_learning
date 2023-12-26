//dp top down approach
//top down always uses recursion with memoization
var wordBreak = function (s, wordDict, i = 0, cache = new Map()) {
    if (i === s.length) return cache.set(i, true);
    if(cache.has(i)) return cache.get(i);

    for (const w of wordDict) {
        if (i + w.length <= s.length && w === s.slice(i, i + w.length)) {
            if(wordBreak(s, wordDict, i + w.length, cache)){
                cache.set(i, true);
                return true;
            }
        }
    }
    cache.set(i, false);
    return false;
};

//tabulation
var wordBreak2 = function (s, wordDict) {
    const dp = new Array(s.length + 1).fill(false);
    dp[s.length] = true;
    for(let i = s.length - 1; i >= 0; i--) {
        for(const w of wordDict) {
            if(i + w.length <= s.length && w === s.slice(i, i + w.length)) {
                dp[i] = dp[i + w.length];
            }
            //as soon as we find a correct match we break
            if(dp[i]) break;
        }
    }
    return dp[0];
}

console.log(wordBreak2('leetcode', ['leet', 'code']));
