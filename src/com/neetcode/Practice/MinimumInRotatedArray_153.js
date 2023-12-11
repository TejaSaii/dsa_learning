const findMin = (nums) => {
    let [left, right] = [0, nums.length - 1];
    if (nums[left] < nums[right] || right === 0) return nums[left];

    while(left <= right) {
        let mid = left + right >> 1;
        if(nums[mid] < nums[mid - 1]){
            return nums[mid];
        }
        else if(nums[mid] >= nums[0])
            left = mid + 1;
        else right = mid - 1;
    }
}

console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
console.log(findMin([3, 4, 5, 1, 2]));
console.log(findMin([1, 2, 3, 4, 5, 6]));
console.log(findMin([2, 1]));
