const groupAnagrams = (strs: string[]): string[][] => {
    const map = new Map<string, string[]>();
    for (let str of strs) {
        let key = sortString(str);
        if (!map.has(key)){
            map.set(key, []);
        }
        let arr= map.get(key)!;
        arr.push(str);
    }
    return Array.from(map.values());
}

const sortString = (s : String) => {
    return s.split('').sort().join('');
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
