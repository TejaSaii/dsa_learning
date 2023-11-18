const twoSum = (numbers, target) => {
    let [i, j] = [0, numbers.length - 1];
    while (i < j) {
        let sum = numbers[i] + numbers[j];
        if (sum > target) {
            j--;
        }
        else if (sum < target) {
            i++;
        }
        else return [i + 1, j + 1];
    }
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
