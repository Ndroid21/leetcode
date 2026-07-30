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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const dfs = function (node, path) {
        if(!node.left && !node.right) {
            path.push(node.val);
            result.push(path.join('->'));
            path.pop();
            return;
        }

        path.push(node.val);
        node.left && dfs(node.left, path);
        node.right && dfs(node.right, path);
        path.pop();
    }

    const result = [];
    dfs(root, []);

    return result;
};