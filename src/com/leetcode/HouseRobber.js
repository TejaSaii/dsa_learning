const rob = (nums) => {
    if(nums.length === 1) return nums[0];
    if(nums.length === 2) return Math.max(...nums);

    for(let i = 2; i < nums.length; i++) {
        if(i === 2) 
            nums[i] += nums[i - 2];
        else
            nums[i] += Math.max(nums[i - 2], nums[i - 3]);
    }
    return Math.max(nums.at(-1), nums.at(-2));
}

const rob2 = (nums) => {
    let [rob1, rob2] = [0, 0];
    for (const n of nums) {
        let temp = Math.max(rob1 + n, rob2);
        rob1 = rob2;
        rob2 = temp;
    }
    return rob2;
}

console.log(rob([1, 2, 3, 1]));
console.log(rob([2,7,9,3,1]));
console.log(rob2([2,7,9,3,1]));

