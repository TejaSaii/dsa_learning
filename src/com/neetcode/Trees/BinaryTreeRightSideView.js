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
var rightSideView = function (root, res = [], q = []) {
    if (!root) return res;
    q.push(root);
    while (q.length) {
        //we save the rightmost element in the queue to the res;
        res.push(q.at(-1).val);
        let len = q.length;
        for (let i = 0; i < len; i++) {
            let curr = q.shift();
            if (curr.left) q.push(curr.left);
            if (curr.right) q.push(curr.right);
        }
    }

    return res;
};