/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const dfs = function (row, col, index) {
        if (index === word.length) {
            result = true;
            return;
        }

        let original = board[row][col];
        board[row][col] = '#';

        if (row > 0 && board[row - 1][col] === word[index]) {
            dfs(row - 1, col, index + 1);
        }
        if (row < m - 1 && board[row + 1][col] === word[index]) {
            dfs(row + 1, col, index + 1);
        }
        if (col > 0 && board[row][col - 1] === word[index]) {
            dfs(row, col - 1, index + 1);
        }
        if (col < n - 1 && board[row][col + 1] === word[index]) {
            dfs(row, col + 1, index + 1);
        }

        board[row][col] = original;
    }

    const m = board.length;
    const n = board[0].length;
    let result = false;
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === word[0]) {
                dfs(i, j, 1);
            }
        }
    }

    return result;
};