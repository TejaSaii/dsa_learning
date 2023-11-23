//2d binary search
//using single binary search

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

//using two binary searches
const searchMatrix2 = (matrix, target) => {

    if(matrix.length === 1 && matrix[0].length === 1) return matrix[0][0] === target;

    let [first, last] = [ 0, matrix.length - 1];
    let end = matrix[0].length - 1;
    while(first <= last) {
        let mid = (first + last) >> 1;
        if(target < matrix[mid][0])
            last = mid - 1;
        else if(target > matrix[mid][0]){
            if(target <= matrix[mid][end])
                return search(matrix[mid], target);
            first = mid + 1;
        }
        else return true;
    }
    return false;
}

const search = (arr, target) => {
    let [first, last] = [0, arr.length - 1];
    while(first <= last) {
        let mid = (first + last) >> 1;
        if(target < arr[mid]) last = mid - 1;
        
        else if(target > arr[mid]) first = mid + 1;

        else return true;
    }

    return false;
}

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3));
console.log(searchMatrix2([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3));
