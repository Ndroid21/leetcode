/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
    tiles = tiles.split('').sort().join('');
    const used = new Array(26).fill(0);
    const getIndexFromTilesAt = function (index) {
        return tiles[index].charCodeAt() - 'A'.charCodeAt();
    }

    for (let i = 0; i < tiles.length; i++) {
        const index = getIndexFromTilesAt(i);
        used[index] += 1;
    }

    const dfs = function (length) {
        if (length === tiles.length) {
            return 0;
        }

        let count = 0;

        for (let i = 0; i < tiles.length; i++) {
            if (i > 0 && tiles[i] === tiles[i - 1]) continue;
            const index = getIndexFromTilesAt(i);
            
            if (used[index] <= 0) continue;

            used[index] -= 1;
            count += 1;

            count += dfs(length + 1);
            used[index] += 1;
        }

        return count;
    }

    return dfs(0);
};
