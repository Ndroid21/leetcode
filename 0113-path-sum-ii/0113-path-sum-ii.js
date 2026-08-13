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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    const dfs = function(node, remSum, path) {
        if(!node) return;
        if (node.left === null && node.right === null && (remSum - node.val) === 0) {
            path.push(node.val);
            result.push([...path]);
            path.pop();
            return;
        }

        path.push(node.val);
        dfs(node.left, remSum - node.val, path);
        dfs(node.right, remSum - node.val, path);
        path.pop();
    }

    const result = [];
    dfs(root, targetSum, []);
    return result;
};