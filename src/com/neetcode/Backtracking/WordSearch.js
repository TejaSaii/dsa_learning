/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const [rows, cols] = [board.length, board[0].length];
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (dfs(board, word, r, c, 0))
                return true;
        }
    }

    return false;
};

const dfs = (board, word, r, c, i) => {
    if (i === word.length) return true;

    if (isOutOfBound(board, r, c)) return false;

    if (board[r][c] !== word[i]) return false;

    board[r][c] = '*';

    const hasWord = dfs(board, word, r - 1, c, i + 1) ||
                    dfs(board, word, r + 1, c, i + 1) ||
                    dfs(board, word, r, c - 1, i + 1) ||
                    dfs(board, word, r, c + 1, i + 1);

    board[r][c] = word[i];
    return hasWord;
}

const isOutOfBound = (board, r, c) => {
    const isRowOutOfBounds = r < 0 || r >= board.length;
    const isColOutOfBounds = c < 0 || c >= board[0].length;

    return isRowOutOfBounds || isColOutOfBounds;
}
