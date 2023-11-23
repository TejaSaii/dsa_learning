//contest 
//easy

const findMinimumOperations = (s1, s2, s3) => {
    let [n1, n2, n3] = [s1.length, s2.length, s3.length];
    let i = 0;
    for(; i < Math.min(n1, n2, n3); i++) {
        let [e1, e2, e3] = [s1[i], s2[i], s3[i]];
        
        if(e1 !== e2) break;
        if(e2 !== e3) break;
    }

    if(i === 0) return -1;
    else return (n1 - i) + (n2 - i) + (n3 - i);
}

console.log(findMinimumOperations('abc', 'abb', 'ab'));
