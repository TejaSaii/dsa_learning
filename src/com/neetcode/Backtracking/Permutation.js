/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const res = [];

    //base case
    if (nums.length === 1)
        return [nums.slice()];

    for (let i = 0; i < nums.length; i++) {
        const removed = nums.shift();
        const permutes = permute(nums);

        for(const perm of permutes) {
            perm.push(removed);
        }
        res.push(...permutes);
        nums.push(removed);
    }

    return res;
};
