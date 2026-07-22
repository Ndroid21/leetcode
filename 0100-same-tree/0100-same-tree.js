/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    if (!p && !q) return true;
    if (!p) return false;
    if (!q) return false;

    const isLeftTreeSame = isSameTree(p.left, q.left);
    const isRightTreeSame = isSameTree(p.right, q.right);

    return (isLeftTreeSame && isRightTreeSame && p.val === q.val);
};