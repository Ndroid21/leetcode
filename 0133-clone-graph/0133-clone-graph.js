/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (root) {
    if (!root) return null;

    const q = [root];
    const visited = new Map();
    const clonedRootNode = new Node(root.val);
    visited.set(root, clonedRootNode);

    while (q.length > 0) {
        const curr = q.shift();
        const clonedNode = visited.get(curr);
        for (const n of curr.neighbors) {
            if (!visited.has(n)) {
                q.push(n);
                visited.set(n, new Node(n.val));
            }
            clonedNode.neighbors.push(visited.get(n));
        }
    }

    return clonedRootNode;
};