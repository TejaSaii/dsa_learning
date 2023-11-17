function topKFrequent1(nums: number[], k: number) {
    const map = new Map<number, number>();
    const keyArr: number[][]= new Array(nums.length + 1).fill(0);
    let res: number[] = [];

    for(const n of nums) {
        map.set(n, 1 + map.get(n)! || 0);
    }

    for (let [key, count] of map) {
        let bucket = keyArr[count];
        if(!bucket){
            bucket = [];
        }
        bucket.push(key);
        keyArr[count] = bucket;
    }

    keyArr.reverse();

    for (let keys of keyArr) {
        if (k <= 0) break;
        if(keys) {
            for(let key of keys) {
                res.push(key);
                k--;
            }
        }
    }

    return res;
}

console.log(topKFrequent1([4,4,5,3,2,1,8,2,3,1,2,1,2], 3));
