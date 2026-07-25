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
var maxDepth = function(root) {
    if (!root) return 0;

    let maxiDepth = 0;
    const traverse = function(curr, depth) {
        maxiDepth = Math.max(maxiDepth, depth);

        curr.left && traverse(curr.left, depth + 1);
        curr.right && traverse(curr.right, depth + 1);
    }

    traverse(root, 1);

    return maxiDepth;
};