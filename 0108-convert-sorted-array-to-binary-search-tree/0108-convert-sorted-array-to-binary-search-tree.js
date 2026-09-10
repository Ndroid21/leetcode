/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    const generateBST = function (left, right) {
        if (left > right) {
            return null;
        }

        let mid = Math.floor((right + left) / 2);

        const node = new TreeNode(nums[mid]);

        node.left = generateBST(left, mid - 1);
        node.right = generateBST(mid + 1, right);

        return node;
    }

    return generateBST(0, nums.length - 1);
};