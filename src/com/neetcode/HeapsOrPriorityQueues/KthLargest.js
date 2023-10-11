const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

class KthLargest {
    /**
    * @param {number} k
    * @param {number[]} nums
    * @constructor
    */
    constructor(k, nums) {
        this.k = k;
        this.minHeap = new MinPriorityQueue();

        nums.forEach((num) => this.add(num));
    }

    /**
    * @param {number} val
    * @return {number}
    */
    add(val) {
        let { minHeap } = this;

        if (minHeap.size() < this.k) {
            minHeap.enqueue(val);
        }
        else if (val > this.top()) {
            minHeap.dequeue();
            minHeap.enqueue(val);
        }

        return this.top();
    }

    top() {
        return this.minHeap.front()?.element || 0;
    }
}

let k = 3;
const nums = [7, 3, 2, 9, 11, 4];
const obj = new KthLargest(k, nums);
console.log(obj.add(13));
console.log(obj.add(20));
console.log(obj.add(21));
console.log(obj.add(22));
