const countSubstrings = (s) => {
    let res = 0;
    for(let i = 0; i < s.length; i++) {
        let [left, right] = [i, i];
        while(0 <= left && right < s.length && s[left] === s[right]){
            res++;
            left--;
            right++;
        }
        [left, right] = [i, i + 1];
        while(0 <= left && right < s.length && s[left] === s[right]){
            res++;
            left--;
            right++;
        }
    }
    return res;
}

console.log(countSubstrings("aaa"));
console.log(countSubstrings("abc"));
