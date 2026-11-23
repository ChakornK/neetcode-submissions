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
            this.insert(ret, [d, p], k);
        }
        return ret.map((r) => r[1]);
    }
    insert(arr, el, k) {
        if (arr.length === 0) return arr.push(el);
        let min = 0;
        let max = arr.length;
        while (min !== max) {
            const med = (max + min) >> 1;
            if (arr[med][0] > el[0]) max = med;
            else min = med + 1;
        }
        arr.splice(min, 0, el);
        if (arr.length > k) arr.pop();
    }
}
