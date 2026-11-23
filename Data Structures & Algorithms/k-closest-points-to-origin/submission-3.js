class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const ret = [];
        for (const p of points) {
            const d = Math.sqrt(p[0] ** 2 + p[1] ** 2);
            ret.push([d,p]);
            ret.sort((a,b)=> a[0] - b[0]);
            if (ret.length > k) ret.pop();
        }
        return ret.map((r) => r[1]);
    }
}
