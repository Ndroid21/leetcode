/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    const result = [];

    const board = Array.from({ length: n }, () => Array(n).fill('.'));
    const diagonal = Array(n << 1).fill(0);
    const antidiagonal = Array(n << 1).fill(0);
    const columns = Array(n).fill(0);

    const dfs = (row) => {

        if (row === n) {
            result.push(board.map(row => row.join("")));
        }

        for (let col = 0; col < n; col++) {
            if (columns[col] + diagonal[row + col] + antidiagonal[n - row + col] === 0) {
                board[row][col] = 'Q';
                columns[col] = 1;
                diagonal[row + col] = 1;
                antidiagonal[n - row + col] = 1;

                dfs(row + 1);

                board[row][col] = '.';
                columns[col] = 0;
                diagonal[row + col] = 0;
                antidiagonal[n - row + col] = 0;
            }
        }
    }

    dfs(0);

    return result;
};