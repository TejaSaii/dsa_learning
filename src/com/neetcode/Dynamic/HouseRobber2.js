/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    //we can either rob the first house and ignore the last house
    //or we can do the vice versa, hence we try to find the max from the 
    //two new arrays one without first house and second without last house
    //lastly if any arr has only one house we get that value with nums[0]

    return Math.max(
            nums[0], 
            robHelper(nums.slice(0, -1)), 
            robHelper(nums.slice(1))
        );
};

const robHelper = (arr) => {
    let [rob1, rob2] = [0, 0];

    for (const n of arr) {
        let temp = Math.max(rob1 + n, rob2);
        rob1 = rob2;
        rob2 = temp;
    }
    return rob2;
}
