const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    const maxHeap = new MaxPriorityQueue();
    stones.forEach(stone => maxHeap.enqueue(stone));

    while (maxHeap.size() > 1) {
        let l1 = maxHeap.dequeue().element;
        let l2 = maxHeap.dequeue().element;

        if (l1 !== l2) 
        maxHeap.enqueue(Math.abs(l1 - l2));
    }
    return maxHeap.front()?.element || 0;
};

const stones = [2, 7, 4, 1, 8, 1];
console.log(lastStoneWeight(stones));


