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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (s, t) {
    if (!t) return true;
    if (!s) return false;
  
    if (sameTree(s, t)) {
      return true;
    }
    else {
      return isSubtree(s.left, t) || isSubtree(s.right, t);
    }
  };
  
  const sameTree = (s, t) => {
    if (!s && !t) return true;
    if (s && t && s.val === t.val){
      return sameTree(s.left, t.left) && sameTree(s.right, t.right);
    }
    return false;
  }