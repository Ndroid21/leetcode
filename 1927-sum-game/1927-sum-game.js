/**
 * @param {string} num
 * @return {boolean}
 */
var sumGame = function (num) {
    const length = num.length;

    let questionMarksInFirstHalf = 0;
    let sumOfDigitsInFirstHalf = 0;

    let questionMarksInSecondHalf = 0;
    let sumOfDigitsInSecondHalf = 0;

    for (let i = 0; i < length >> 1; i++) {
        if (num[i] === '?') {
            questionMarksInFirstHalf++;
        } else {
            sumOfDigitsInFirstHalf += num[i].charCodeAt(0) - '0'.charCodeAt(0);
        }
    }

    for (let i = length >> 1; i < length; i++) {
        if (num[i] === '?') {
            questionMarksInSecondHalf++;
        } else {
            sumOfDigitsInSecondHalf += num[i].charCodeAt(0) - '0'.charCodeAt(0);
        }
    }

    const totalQuestionMarks = questionMarksInFirstHalf + questionMarksInSecondHalf;
    const sumDifference = sumOfDigitsInFirstHalf - sumOfDigitsInSecondHalf;
    const questionMarkDifference = questionMarksInSecondHalf - questionMarksInFirstHalf;

    return totalQuestionMarks % 2 === 1 || 2 * sumDifference !== 9 * questionMarkDifference;
}