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
 * @return {boolean}
 */
var isValidBST = function (root) {
    const dfs = function(node) {
        if (!node) return true;

        if (! dfs(node.left)) {
            return false;
        }

        if (prev !== null && prev >= node.val) {
            return false;
        }
        prev = node.val;

        return dfs(node.right);
    }

    let prev = null;

    return dfs(root);
};