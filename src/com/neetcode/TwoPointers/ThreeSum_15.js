const threeSum = (nums) => {
    let sortedArr = nums.sort((a, b) => a - b);
    let res = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        twoSum(i, sortedArr, res);
    }

    return res;
}


const twoSum = (i, arr, res) => {
    let [j, k] = [i + 1, arr.length - 1];
    while (j < k) {
        let sum = arr[i] + arr[j] + arr[k];
        if (sum === 0) {
            res.push([arr[i], arr[j], arr[k]]);
            j++;
            while (arr[j] === arr[j - 1]) j++;
        }
        else if (sum > 0) {
            k--;
        }
        else j++;
    }
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
