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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let res = [];
    let queue = root ? [root] : [];
    while (queue.length) {
        let arr = [];
        let counter = queue.length;
        while (counter > 0) {
            let cur = queue.shift();
            arr.push(cur.val);
            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
            counter--;
        }
        res.push(arr);
    }
    return res;
};