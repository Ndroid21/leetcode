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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
    if (!root && !subRoot) return true;
    if (!root || !subRoot) return false;

    return isSameTree(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

var isSameTree = function (p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;

    let isLeftSameTree = isSameTree(p.left, q.left);
    let isRightSameTree = isSameTree(p.right, q.right);

    return isLeftSameTree && isRightSameTree && p.val === q.val;
}