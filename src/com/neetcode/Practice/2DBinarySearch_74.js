//2d binary search

const searchMatrix = (matrix, target) => {
    let rows = matrix.length;
    let cols = matrix[0].length;

    let [first, last] = [ 0, (rows * cols) - 1 ];

    while (first <= last) {
        let mid = (first + last) >> 1;
        let curRow = Math.floor(mid / cols);
        let curCol = mid % cols;

        if (target < matrix[curRow][curCol])
            last = mid - 1;
        else if(target > matrix[curRow][curCol])
            first = mid + 1;
        else return true;
    }
    
    return false;
}

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3));
