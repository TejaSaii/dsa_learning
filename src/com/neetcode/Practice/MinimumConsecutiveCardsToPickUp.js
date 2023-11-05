/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function(cards) {
    let res = Infinity;
    let map = new Map();
    for(let i = 0; i < cards.length; i++) {
        let card = cards[i];
        if(map.has(card)){
            res = Math.min(res, (i - map.get(card) + 1));
        }
        map.set(card, i);
    }
    
    return res === Infinity ? -1 : res;
};
