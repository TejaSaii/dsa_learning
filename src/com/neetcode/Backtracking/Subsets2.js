/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    const res = [];
    const cur = [];
    nums.sort((a, b) => a - b)
    const dfs = (i) => {
        if(i >= nums.length){
            return res.push(cur.slice());
        }
        cur.push(nums[i]);
        dfs(i + 1);
        cur.pop();
        
        while(i + 1 < nums.length && nums[i] === nums[i + 1]) {
            i++;
        }
        dfs(i + 1);
    }
    dfs(0);
    return res;
};
