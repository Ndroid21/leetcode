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
var averageOfSubtree = function (root) {
    const dfs = function (node) {
        if (node === null) {
            return { sum: 0, count: 0, nodeCount: 0 };
        }

        let { sum: leftSum, nodeCount: leftNodeCount, count: leftCount } = dfs(node.left);
        let { sum: rightSum, nodeCount: rightNodeCount, count: rightCount } = dfs(node.right);

        let totalSum = leftSum + rightSum + node.val;
        let totalNodeCount = leftNodeCount + rightNodeCount + 1;

        let average = Math.floor(totalSum / totalNodeCount);

        if (average === node.val) {
            return { sum: totalSum, nodeCount: totalNodeCount, count: leftCount + rightCount + 1 }
        } else {
            return { sum: totalSum, nodeCount: totalNodeCount, count: leftCount + rightCount }
        }
    }

    return dfs(root).count;
};