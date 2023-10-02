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
var isBalanced = function(root) {
    const [_height, _isBalanced] = isRootBalanced(root);

    return _isBalanced;
};

var isRootBalanced = (node) => {
    let isBaseCase = node === null;
    if(isBaseCase) return [0, true];

    return dfs(node);
}

var dfs = (node) => {
    const [left, isLeftBalanced] = isRootBalanced(node.left);
    const [right, isRightBalanced] = isRootBalanced(node.right);
    const [height, difference] = [1 + Math.max(left, right), Math.abs(left - right)];

    const isAcceptableHeight = difference <= 1;
    const _isBalanced = isLeftBalanced && isRightBalanced;
    const isNodeBalanced = isAcceptableHeight && _isBalanced;

    return [height, isNodeBalanced];
}