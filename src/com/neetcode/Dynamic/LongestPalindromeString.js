/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
     if(!s.length) return '';

     const [left, right] = search(s);

     return s.slice(left, right + 1);
};

const search = (s, left = 0, right = 0) => {
    for(let i = 0; i < s.length; i++) {
        //for checking when center index is i (odd length)
        const len1 = getLength(s, i, i);
        //for checking when center index is between i and i + 1 (even length)
        const len2 = getLength(s, i, i + 1);

        const [ length, window ] = [ Math.max(len1, len2), right - left ];
        if(length <= window) continue;

        left = i - ((length - 1) >> 1);
        right = i + (length >> 1);
    }

    return [left, right];
}

const getLength = (s, left, right) => {
    const canExpand = () => (left >= 0 && right < s.length);
    const isSame = () => s[left] === s[right];

    const isPalindrome = () => canExpand() && isSame();
    while(isPalindrome()){
        left--;
        right++;
    }
    //the diff b/w r and l is decremented by 1 because
    // (r - l + 1) gives the length of the string
    // we need to decrement by the above result by 2 as the
    // the while loop ends after decrementing l and r by 1
    // hence (r - l + 1 - 2) = r - l - 1;
    return right - left - 1;
}
