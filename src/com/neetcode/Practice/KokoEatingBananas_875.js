const minEatingSpeed = (piles, h) => {
    //get the least and max eating speed of koko
    //the max eating speed can only be the maximum amount of bananas from all the piles
    let least = 1;
    let max = Math.max(...piles);
    let res = max;
    
    while(least <= max){
        let time = 0;
        let k = (least + max) >> 1;

        //get the time with current eating speed (k)
        for(const pile of piles) {
            time += Math.ceil(pile / k);
        }
        
        //in given time (h) what is the minimum eating speed koko can have
        if(time <= h) res = Math.min(res, k), max = k - 1;
        else least = k + 1;
    }
    return res;
}

console.log(minEatingSpeed([3,6,7,11], 8));
console.log(minEatingSpeed([312884470], 312884469));
