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
var findMode = function(root) {
    let prev = null;
    let count = 0;
    let max = 0;
    let result = [];

    const dfs = function(node) {
        if(!node) return;

        dfs(node.left);

        if(prev !== null && prev.val === node.val) {
            count++;
        } else {
            count = 1;
        }

        if(max < count) {
            result = [node.val];
            max = count;
        } else if(max === count) {
            result.push(node.val);
        }

        prev = node;

        dfs(node.right);
    }

    dfs(root);

    return result;
};