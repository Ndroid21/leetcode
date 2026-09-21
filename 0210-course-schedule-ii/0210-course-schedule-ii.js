/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    const adjList = new Map();
    const inDegree = new Map();

    for (let i = 0; i < numCourses; i++) {
        adjList.set(i, []);
        inDegree.set(i, 0);
    }

    for (let [to, from] of prerequisites) {
        adjList.get(from).push(to);
        inDegree.set(to, inDegree.get(to) + 1);
    }

    const q = [];
    for (let [course, degree] of inDegree) {
        if (degree === 0) {
            q.push(course);
        }
    }

    const result = [];
    while (q.length > 0) {
        const node = q.shift();
        result.push(node);

        for (const neighbor of adjList.get(node)) {
            inDegree.set(neighbor, inDegree.get(neighbor) - 1);
            if (inDegree.get(neighbor) === 0) q.push(neighbor);
        }
    }

    return result.length === numCourses ? result : [];
};