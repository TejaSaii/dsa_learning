//O(n) memory solution
const trap = (height) => {
    const maxLeft = new Array(height.length);
    const maxRight = new Array(height.length);
    let res = 0;

    maxLeft[0] = 0;
    maxRight[height.length - 1] = 0;

    for (let i = 1; i < height.length; i++){
        maxLeft[i] = Math.max(height[i - 1], maxLeft[i - 1]);
    }

    
    for (let i = height.length - 2; i >= 0; i--){
        maxRight[i] = Math.max(height[i + 1], maxRight[i + 1]);
    }

    for (let i = 0; i < height.length; i++) {
        let cal = Math.min(maxLeft[i], maxRight[i]) - height[i];
        res += cal > 0 ? cal : 0;
    }

    return res;
}


//O(1) memory solution using two pointers
const trap2 = (height) => {
    let [l, r] = [0, height.length - 1];
    let [maxLeft, maxRight] = [height[l], height[r]];
    let res = 0;

    while (l <= r) {
        let cal;
        if(maxLeft <= maxRight) {
            cal = maxLeft - height[l];
            maxLeft = Math.max(maxLeft, height[l]);
            l++;
        }
        else {
            cal = maxRight - height[r];
            maxRight = Math.max(maxRight, height[r]);
            r--;
        }
        res += cal > 0 ? cal : 0;

    }

    return res;
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log(trap2([0,1,0,2,1,0,1,3,2,1,2,1]));
