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
        if (!node) return [true, 0];

        const [leftBalanced, leftDepth] = dfs(node.left);
        const [rightBalanced, rightDepth] = dfs(node.right);

        let currentNodeBalanced = (Math.abs(leftDepth - rightDepth) <= 1 && leftBalanced && rightBalanced);

        return [currentNodeBalanced, Math.max(leftDepth, rightDepth) + 1 ];
    }

    const [ balanced ] = dfs(root);
    
    return balanced;
};