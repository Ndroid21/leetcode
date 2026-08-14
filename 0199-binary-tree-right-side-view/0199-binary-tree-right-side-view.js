/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
    const q = [root];
    const result = [];

    while (q.length > 0) {
        const n = q.length;
        if (q[0]) result.push(q[0]?.val);

        for (let i = 0; i < n; i++) {
            const node = q.shift();

            if (node?.right) q.push(node.right);
            if (node?.left) q.push(node.left);
        }
    }

    return result;
};