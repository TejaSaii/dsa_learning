const longestPalindrome = (s) => {
    let res = "";
    let resLen = 0;
    for(let i = 0; i < s.length; i++) {
        let [left, right] = [i, i];
        while(0 <= left && right < s.length && s[left] === s[right]){
            let len = right - left + 1;
            if(resLen < len){
                resLen = len;
                res = s.slice(left, right + 1);
            }
            left--;
            right++;
        }

        [left, right] = [i, i + 1];
        while(0 <= left && right < s.length && s[left] === s[right]){
            let len = right - left + 1;
            if(resLen < len){
                resLen = len;
                res = s.slice(left, right + 1);
            }
            left--;
            right++;
        }
    }

    return res;
}

console.log(longestPalindrome("babad"));
