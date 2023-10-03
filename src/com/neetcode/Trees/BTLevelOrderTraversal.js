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


//using recursive dfs
var levelOrder = function(root, level = 0, res = []) {
    if(!root) return [];
    if(level === res.length){
        res.push([]);
    }

    res[level].push(root.val);
    levelOrder(root.left, level + 1, res);
    levelOrder(root.right, level + 1, res);

    return res;
};