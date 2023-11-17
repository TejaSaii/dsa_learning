function topKFrequent1(nums, k) {
    var map = new Map();
    var keyArr = new Array(nums.length + 1).fill(0);
    var res = [];
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var n = nums_1[_i];
        map.set(n, 1 + map.get(n) || 0);
    }
    for (var _a = 0, map_1 = map; _a < map_1.length; _a++) {
        var _b = map_1[_a], key = _b[0], count = _b[1];
        var bucket = keyArr[count];
        if (!bucket) {
            bucket = [];
        }
        bucket.push(key);
        keyArr[count] = bucket;
    }
    keyArr.reverse();
    for (var _c = 0, keyArr_1 = keyArr; _c < keyArr_1.length; _c++) {
        var keys = keyArr_1[_c];
        if (k <= 0)
            break;
        if (keys) {
            for (var _d = 0, keys_1 = keys; _d < keys_1.length; _d++) {
                var key = keys_1[_d];
                res.push(key);
                k--;
            }
        }
    }
    return res;
}
console.log(topKFrequent1([4, 4, 5, 3, 2, 1, 8, 2, 3, 1, 2, 1, 2], 3));
