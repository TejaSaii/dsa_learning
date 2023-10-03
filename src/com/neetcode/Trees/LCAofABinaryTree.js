/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    let curr = root;
    while (curr) {
        if (p.val > curr.val && q.val > curr.val) {
            curr = curr.right;
        }
        else if (p.val < curr.val && q.val < curr.val) {
            curr = curr.left;
        }
        else {
            return curr;
        }
    }
};


//Recursive solution
var lowestCommonAncestor = function (root, p, q) {
    if(!root) return null;

    if(p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p, q);
    }
    if(p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q);
    }
    return root;
};