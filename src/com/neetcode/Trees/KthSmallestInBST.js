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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k, stack = []) {
    if(!root) return stack;

    return dfs(root, k , stack);
};

const dfs = (root, k, stack) => {
    if(root.left) kthSmallest(root.left, k, stack);

    stack.push(root.val);

    if(root.right) kthSmallest(root.right, k, stack);

    return stack[(k - 1)];
};

//iterative in-Order traversal
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k, stack = []) {
    while (k--) {
        root = moveLeft(root, stack);

        if (k === 0) return root.val;
        
        root = root.right;
    }
};

const moveLeft = (root, stack) => {
    while (root) {
        stack.push(root);
        root = root.left;
    }

    return stack.pop();
}
