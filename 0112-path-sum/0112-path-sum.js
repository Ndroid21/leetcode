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
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    let ans = false;

    const traverse = function(curr, sum) {
        let newSum = curr.val + sum;

        if(!curr.left && !curr.right) {
            if(newSum === targetSum) {
                ans = ans || true;
                return;
            }
        }

        curr.left && traverse(curr.left, newSum);
        curr.right && traverse(curr.right, newSum);
    }

    root && traverse(root, 0);

    return ans;
};