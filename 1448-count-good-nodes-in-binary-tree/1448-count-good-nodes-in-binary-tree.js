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
var goodNodes = function (root) {
    const dfs = function (node, high) {
        if (node === null) {
            return 0;
        }

        let count = 0;
        if (node.val >= high) {
            count += 1;
            high = node.val;
        }

        return dfs(node.left, high) + dfs(node.right, high) + count;
    }

    let result = dfs(root, root.val);

    return result;
};