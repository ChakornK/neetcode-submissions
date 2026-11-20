class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const dict = {};
        const buckets = Array.from({length: nums.length + 1}, () => []);
        for (const n of nums) {
            dict[n] = (dict[n] ?? 0) + 1;
        }
        for (const [a,b] of Object.entries(dict)) {
            buckets[b].push(a);
        }
        buckets.reverse()
        const res = [];
        for (const e of buckets) {
            for (const t of e) {
                res.push(t);
                if (res.length === k) return res;
            }
        }
        return res;
    }
}
