const isPalindrome = (s) => {
    let str = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
    let [i, j] = [0, str.length - 1];
    while(i <= j) {
        if(str[i] !== str[j]){
            return false;   
        }
        i++;
        j--;
    }
    return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
