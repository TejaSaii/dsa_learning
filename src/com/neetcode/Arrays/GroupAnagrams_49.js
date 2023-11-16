var groupAnagrams = function (strs) {
    var map = new Map();
    for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
        var str = strs_1[_i];
        var key = sortString(str);
        if (!map.has(key)) {
            map.set(key, []);
        }
        var arr = map.get(key);
        arr.push(str);
    }
    return Array.from(map.values());
};
var sortString = function (s) {
    return s.split('').sort().join('');
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
