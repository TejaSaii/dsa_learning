/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let l = 1;
    let r = Math.max(...piles);
    while(l <= r) {
        let k = Math.floor((l + r) / 2);
        let sum = 0;
        for(const pile of piles) {
            sum += Math.ceil(pile / k);
        }
        if(sum <= h){
            r = k - 1;
        }
        else {
            l = k + 1;
        }
    }
    return l;
};