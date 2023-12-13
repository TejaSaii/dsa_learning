const rob = (nums) => {
    return Math.max(
        nums[0],
        rob1(nums.slice(0, -1)),
        rob1(nums.slice(1))
    );
}

const rob1 = (nums) => {
    let [r1, r2] = [0, 0];
    for(const n of nums) {
        let temp = Math.max(r1 + n, r2);
        r1 = r2;
        r2 = temp;
    }
    return r2;
}

console.log(rob1([2, 7, 9, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));
console.log(rob([1]));
