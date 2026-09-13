/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function (img1, img2) {
    const n = img1.length;
    const count = new Map();
    let maxCount = 0;

    for (let row1 = 0; row1 < n; ++row1) {
        for (let col1 = 0; col1 < n; ++col1) {
            if (img1[row1][col1] === 1) {
                for (let row2 = 0; row2 < n; ++row2) {
                    for (let col2 = 0; col2 < n; ++col2) {
                        if (img2[row2][col2] === 1) {
                            const rowOffset = row1 - row2;
                            const colOffset = col1 - col2;

                            const key = rowOffset * 200 + colOffset;
                            const totalCount = (count.get(key) ?? 0) + 1;
                            count.set(key, totalCount);
                            maxCount = Math.max(maxCount, totalCount);
                        }
                    }
                }
            }
        }
    }

    return maxCount;
};