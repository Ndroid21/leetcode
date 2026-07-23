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
var isBalanced = function (root) {
    const dfs = function (node) {
        if (!node) return { balanced: true, depth: 0 };

        const left = dfs(node.left);
        const right = dfs(node.right);

        let currentNodeBalanced = false;
        if (Math.abs(left.depth - right.depth) <= 1 && left.balanced && right.balanced) {
            currentNodeBalanced = true;
        }

        return { balanced: currentNodeBalanced, depth: Math.max(left.depth, right.depth) + 1 }
    }

    const { balanced } = dfs(root);
    return balanced;
};