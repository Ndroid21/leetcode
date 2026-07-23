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
var isSymmetric = function(root) {

    var checkSymmetric = function(left, right) {
        if(!left && !right) return true;
        if(!left || !right) return false;

        return checkSymmetric(left.left, right.right) && checkSymmetric(left.right, right.left) && left.val === right.val;
    }

    return checkSymmetric(root.right, root.left);

};