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
    const isBST = function (curr, low, high) {
        if (!curr) return true;

        if ((low !== null && low >= curr.val) || (high !== null && high <= curr.val)) return false;

        return isBST(curr.left, low, curr.val) && isBST(curr.right, curr.val, high);
    }

    return isBST(root, null, null);
};