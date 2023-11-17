const productExceptSelf = (nums) => {
    const rightArr = new Array(nums.length).fill(1);
    const leftArr = new Array(nums.length).fill(1);
    const res = [];

    for (let i = 1; i < nums.length; i++) {
        rightArr[i] = nums[i - 1] * rightArr[i - 1];
    }

    for (let j = nums.length - 2; j >= 0; j--) {
        leftArr[j] = nums[j + 1] * leftArr[j + 1];
    }

    for (let k = 0; k < nums.length; k++) {
        res[k] = rightArr[k] * leftArr[k];
    }

    return res;
}


console.log(productExceptSelf([1, 2, 3, 4]));

console.log(productExceptSelf([-1, 1, 0, -3, 3]));
