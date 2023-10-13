/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const minHeap = new MinPriorityQueue();
    nums.forEach((num) => {
        minHeap.enqueue(num);

        if(minHeap.size() > k)
            minHeap.dequeue();
    });

    return minHeap.dequeue().element;
};
