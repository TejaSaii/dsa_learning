const isSubsequence = (s, t) => {
    //edgecases
    if(!s.length) return true;
    if(s.length > t.length) return false;

    //normal scenario
    let matches = 0;
    for(let i = 0; i < t.length; i++) {
        if(s[matches] === t[i]){
            matches++;
        }
    }
    return matches === s.length;
}

console.log(isSubsequence('abc', 'ahbgdc'));
console.log(isSubsequence('axc', 'ahbgdc'));
