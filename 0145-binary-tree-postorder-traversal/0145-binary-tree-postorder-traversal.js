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
var postorderTraversal = function(root) {
    const dfs = function(root, result) {
        if(!root) return result;

        dfs(root.left, result);
        dfs(root.right, result);
        result.push(root.val);
    }

    const result = [];
    dfs(root, result);
    return result;
};