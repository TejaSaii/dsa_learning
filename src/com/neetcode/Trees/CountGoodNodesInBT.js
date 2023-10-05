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
var goodNodes = function(root, maxValue = root.val, res = [0]) {
    if(!root) return 0;
    if(root.val >= maxValue) res[0]++;
    maxValue = Math.max(root.val, maxValue);
    goodNodes(root.left, maxValue, res);
    goodNodes(root.right, maxValue, res);
    
    return res[0];
};
