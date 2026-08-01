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
 * @return {number[]}
 */
var findMode = function(root) {
    let map = new Map();
    let modeCount = 0;

    const dfs = function (node) {
        if(!node) return;

        map.set(node.val, (map.get(node.val) || 0) + 1);
        if(map.get(node.val) > modeCount) {
            modeCount = map.get(node.val);
        }

        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);

    const result = [];
    for (let [key, val] of map) {
        if(val === modeCount) {
            result.push(key);
        }
    }

    return result;
};