/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res = [];

    const dfs = (i, cur, target) => {
        if(target === 0)
            return res.push([...cur]);
        
        if(i >= candidates.length || target < 0) return;

        //decision which includes candidates[i]
        cur.push(candidates[i]);
        dfs(i, cur, target - candidates[i]);

        //decision which doesn't include candidates[i]
        cur.pop();
        dfs(i + 1, cur, target);
    }

    dfs(0, [], target);
    return res;
};
