const maxArea = (height) => {
    let [left, right] = [0, height.length - 1];
    let res = 0;

    while (left < right) {
        let length = right - left;
        let breadth = Math.min(height[left], height[right]);
        let area = length * breadth;
        res = Math.max(area, res);

        if (height[left] < height[right]) left++;
        else right++;
    }

    return res;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
