/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
    const getDist = ([x, y]) => {
        return Math.sqrt((x ** 2) + (y ** 2));
    }

    const maxHeap = new MaxPriorityQueue({ priority: (e) => e.dist});
    points.forEach((point) => {
        let dist = getDist(point);
        let front = maxHeap.front()?.element || -Infinity;
        
        if (maxHeap.size() < k) {
            maxHeap.enqueue({ dist, point });
        }
        else if (front.dist > dist) {
            maxHeap.dequeue();
            maxHeap.enqueue({ dist, point });
        }
    });

    let res = [];
    while (k > 0) {
        res.push(maxHeap.dequeue().element.point);
        k--;
    }

    return res;
};
