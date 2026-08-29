/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function (matchsticks) {
    let total = 0;
    let maxLength = 0;

    for (const stick of matchsticks) {
        total += stick;
        maxLength = Math.max(maxLength, stick);
    }

    const targetSideLength = Math.floor(total / 4);
    const remainder = total % 4;

    if (remainder !== 0 || targetSideLength < maxLength) {
        return false;
    }

    matchsticks.sort((a, b) => b - a);

    const sticks = new Array(4).fill(0);

    const dfs = function (index, sticks) {
        if (index === matchsticks.length) {
            return true;
        }

        for (let stickIndex = 0; stickIndex < 4; stickIndex++) {

            if (stickIndex > 0 && sticks[stickIndex] === sticks[stickIndex - 1]) continue;

            sticks[stickIndex] += matchsticks[index];

            if (sticks[stickIndex] <= targetSideLength && dfs(index + 1, sticks)) {
                return true;
            }

            sticks[stickIndex] -= matchsticks[index];
        }

        return false;
    }

    return dfs(0, sticks);
};