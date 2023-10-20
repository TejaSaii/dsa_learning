/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b );
    return dfs(candidates, 0, target);
};

const dfs = (candidates, index, target, res = [], cur = []) => {
    if(target === 0) return res.push(cur.slice());
    if(target < 0) return;

    for(let i = index; i < candidates.length; i++) {
        if(index < i && candidates[i - 1] === candidates[i])
            continue;

        backtrack(candidates, i, target, res, cur);
    }
    return res;
}

const backtrack = (candidates, i, target, res, cur) => {
    cur.push(candidates[i]);
    //dont forget to increment the index by 1
    dfs(candidates, i + 1, target - candidates[i], res, cur);
    cur.pop();
}


console.log(combinationSum2([10,1,2,7,6,1,5], 8));