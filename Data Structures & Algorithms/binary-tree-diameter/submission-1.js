/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        if (root == null) return 0;
        return this.dia(root);
    }
    dia(root) {
        if (root == null) return 0;
        return Math.max(this.depth(root.left) + this.depth(root.right), this.dia(root.left), this.dia(root.right));
    }
    depth(root) {
        if (root == null) return 0;
        return Math.max(this.depth(root.left) + 1, this.depth(root.right) + 1);
    }
}
