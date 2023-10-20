/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = (nums) => {
    const res = [];
    const subset = [];
    const dfs = (i) => {
      if(i >= nums.length)
        return res.push([...subset]);
    
      subset.push(nums[i]);
      dfs(i + 1);
      subset.pop();
      dfs(i + 1);
    }
    
    dfs(0);

    return res;
}

console.log(subsets([4, 5]));

