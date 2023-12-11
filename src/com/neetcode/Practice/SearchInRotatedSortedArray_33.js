const search = (nums, target) => {
    let [l, r] = [0, nums.length - 1];
    
    while(l <= r) {
        let m = (l + r) >> 1;
        if(nums[m] === target) return m;
        else if(nums[m] > target){
            if(target >= nums[0]) r = m - 1;
            else l = m + 1;
        }
        else {
            if(target < nums[0]) l = m + 1;
            else r = m - 1;
        }
    }
    return -1;
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
console.log(search([7, 0, 1, 2, 4, 5, 6], 5));
