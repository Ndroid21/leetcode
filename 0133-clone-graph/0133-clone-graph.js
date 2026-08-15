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

    const stack = [root];
    const visited = new Map();
    const clonedRootNode = new Node(root.val);
    visited.set(root, clonedRootNode);

    while (stack.length > 0) {
        const curr = stack.pop();
        const clonedNode = visited.get(curr);

        for (const n of curr.neighbors) {
            if (!visited.has(n)) {
                stack.push(n);
                visited.set(n, new Node(n.val));
            }
            clonedNode.neighbors.push(visited.get(n));
        }
    }

    return clonedRootNode;
};