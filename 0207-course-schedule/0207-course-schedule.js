/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    if (numCourses === 1 && prerequisites.length > 0) return false;

    const adjList = new Map();
    const inDegree = new Map();
    for (let i = 0; i < numCourses; i++) {
        adjList.set(i, []);
        inDegree.set(i, 0);
    }

    for (const [to, from] of prerequisites) {
        const list = adjList.get(from);
        list.push(to);
        adjList.set(from, list);
        inDegree.set(to, inDegree.get(to) + 1);
    }

    console.log(adjList, inDegree);

    const q = [];
    for (let i = 0; i < inDegree.size; i++) {
        if (inDegree.get(i) === 0) {
            q.push(i);
        }
    }

    if (q.length === 0) {
        return false;
    }

    let completed = 0;

    while (q.length > 0) {
        const node = q.shift();

        completed++;

        for (let neighbor of adjList.get(node)) {
            inDegree.set(neighbor, inDegree.get(neighbor) - 1);
            if (inDegree.get(neighbor) === 0) {
                q.push(neighbor);
            }
        }
    }

    return completed === numCourses;
};