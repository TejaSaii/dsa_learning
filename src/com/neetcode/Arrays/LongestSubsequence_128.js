function longestConsecutive(nums) {
    const set = new Set();
    let max = 0;
    nums.forEach((num) => {
        set.add(num);
    })

    for (let num of nums) {
        let count = 1;
        if(!set.has(num - 1)){
            while (set.has(num + 1)) {
                count++;
                num += 1;
            }
            max = Math.max(count, max);
        }
    }

    return max;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
