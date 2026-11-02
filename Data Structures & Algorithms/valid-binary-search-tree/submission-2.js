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
     * @return {boolean}
     */
    isValidBST(root, min = -Infinity, max = Infinity) {
        if (root == null) return true;
        if (root.left && root.right && root.left.val > root.right.val) return false;
        if (root.val <= min || root.val >= max) return false;
        return this.isValidBST(root.left, min, Math.min(max, root.val)) && this.isValidBST(root.right, Math.max(min, root.val), max)
    }
}
