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
