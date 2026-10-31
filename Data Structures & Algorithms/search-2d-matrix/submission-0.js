class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const m = matrix.length;
        const n = matrix[0].length;

        const targetRow = this.reduceRows(matrix, target, 0, m - 1);
        const targetCol = this.reduceCols(matrix, target, targetRow, 0, n - 1);
        if (matrix[targetRow][targetCol] == target) return true;
        return false;
    }

    reduceRows(matrix, target, lower, upper) {
        const mid = lower + Math.ceil(upper - lower);
        if (lower == upper) return lower;
        if (matrix[mid][0] > target) return this.reduceRows(matrix, target, lower, mid - 1);
        else return this.reduceRows(matrix, target, mid, upper);
    }

    reduceCols(matrix, target, row, lower, upper) {
        const mid = lower + Math.ceil(upper - lower);
        if (lower == upper) return lower;
        if (matrix[row][mid] > target) return this.reduceCols(matrix, target, row, lower, mid - 1);
        else return this.reduceCols(matrix, target, row, mid, upper);
    }
}
