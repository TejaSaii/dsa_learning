/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {

    if(nums[nums.length - 1] > nums[0] || nums.length === 1){
        return nums[0]
    }
    
    let s = 0;
    let e = nums.length - 1;
    while(s <= e) {
        let m = Math.floor((s + e) / 2);
        
        if(nums[m - 1] > nums[m]){
            return nums[m];
        }
        else if(nums[m] >= nums[0]){
            s = m + 1;
        }
        else {
            e = m - 1;
        }
    }
};
