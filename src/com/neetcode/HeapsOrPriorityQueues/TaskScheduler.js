/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const frequencyMap = getFrequencyMap(tasks);
    const maxFrequency = getMaxFrequency(frequencyMap);
    const noOfFrequentTasks = getMostFrequent(maxFrequency, frequencyMap);

    const interval = (maxFrequency - 1) * (n + 1) + noOfFrequentTasks;

    return Math.max(interval, tasks.length);
};

const getFrequencyMap = (tasks, frequencyMap = new Array(26).fill(0)) => {
    for (const task of tasks) {
        const index = task.charCodeAt(0) - 'A'.charCodeAt(0);
        frequencyMap[index]++;
    }

    return frequencyMap;
}

const getMaxFrequency = (frequencyMap, maxFreq = 0) => {
    for(const n of frequencyMap) {
        if(n > 0) 
            maxFreq = Math.max(n, maxFreq);
    }

    return maxFreq;
}

const getMostFrequent = (maxFrequency, frequencyMap, mostFrequent = 0) => {
    for(const n of frequencyMap) {
        if(maxFrequency === n)
            mostFrequent++;
    }

    return mostFrequent;
}

//Solution with MAX HEAP and a QUEUE
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const freqMap = getFrequencyMap(tasks);
    const maxHeap = new MaxPriorityQueue();
    const q = [];
	
    //adding the counts into the heap
    freqMap.forEach((e) => {
        if(e) maxHeap.enqueue(e);
    });

    let time = 0;
    while(!maxHeap.isEmpty() || q.length) {
        time++;

	//if heap is not empty take the max count and decrement it by 1
	//if the value is !== 0 we add it to the queue by the next time it can be used
        if(!maxHeap.isEmpty()) {
            let count = maxHeap.dequeue().element - 1;
            if(count) {
                q.push( [count, time + n] );
            }
        }
	//if there is an entry in queue which is equal to time we pop it from queue and add to heap
        if(q.length && q[0][1] === time) {
            maxHeap.enqueue( q.shift()[0] );
        }
    }

    return time;
};

function getFrequencyMap(tasks, freqMap = new Array(26).fill(0)) {
    for(const task of tasks) {
        const index = task.charCodeAt(0) - 'A'.charCodeAt(0);
        freqMap[index]++;
    }
    return freqMap;
}
