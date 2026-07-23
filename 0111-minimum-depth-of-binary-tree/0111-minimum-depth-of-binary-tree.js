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
 * @return {number}
 */
var minDepth = function (root) {
    if (!root) return 0;

    const leftDepth = root.left && minDepth(root.left);
    const rightDepth = root.right && minDepth(root.right);

    const minPath = leftDepth && rightDepth ? Math.min(leftDepth, rightDepth) : (leftDepth || rightDepth);

    return 1 + minPath;
};