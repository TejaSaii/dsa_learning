import java.util.Stack;

import javax.swing.tree.TreeNode;

class IncreasingOrderSearchtree_Stack_897 {
    Stack<TreeNode> stack = new Stack<>();
    public TreeNode increasingBST(TreeNode root) {
        decBST(root);
        TreeNode temp = stack.pop(), newRoot = temp;
        
        while(!stack.isEmpty()){
            temp.right = stack.pop();
            temp.left = null;
            temp = temp.right;
        }
        return newRoot;
    }
    public Stack<TreeNode> decBST(TreeNode root){
        if(root != null){
            decBST(root.right);
            stack.push(root);
            decBST(root.left);
        }
        return stack;
    }
}