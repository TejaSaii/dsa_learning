//normal binary search implementation
function search(nums, target) {
    let [l, r] = [0, nums.length - 1];
    while(l <= r) {
        let m = (l + r) >> 1;
        if (target < nums[m]){
            r = m - 1;
        }
        else if(target > nums[m]){
            l = m + 1;
        }
        else return m;
    }
    return -1;
}

console.log(search([-1, 0, 3, 5, 9, 12], 9));
