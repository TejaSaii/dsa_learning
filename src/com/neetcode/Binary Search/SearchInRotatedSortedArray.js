/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let s = 0;
    let e = nums.length - 1;
    while(s <= e) {
        let m = Math.floor((s + e) / 2);

        if(nums[m] === target) return m;

        if(nums[m] < nums[s]) {
            if(target < nums[s] && target > nums[m]){
                s = m + 1;
            }
            else {
                e = m - 1;
            }
        }
        else {
            if(target >= nums[s] && target < nums[m]){
                e = m - 1;
            }
            else s = m + 1;
        }
    }
    return -1;
};

console.log(search([4,5,6,7,0,1,2], 0));