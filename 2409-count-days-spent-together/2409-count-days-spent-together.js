/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function (arriveAlice, leaveAlice, arriveBob, leaveBob) {
    const overlapStart = arriveAlice < arriveBob ? arriveBob : arriveAlice;
    const overlapEnd = leaveAlice < leaveBob ? leaveAlice : leaveBob;

    const startDay = convertDateToDayOfYear(overlapStart);
    const endDay = convertDateToDayOfYear(overlapEnd);

    return Math.max(0, endDay - startDay + 1);
}

const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function convertDateToDayOfYear(dateString) {
    const [month, day] = dateString.split('-').map(num => parseInt(num));

    let totalDays = 0;

    for (let i = 0; i < month - 1; i++) {
        totalDays += daysInMonth[i];
    }

    totalDays += day;

    return totalDays;
}