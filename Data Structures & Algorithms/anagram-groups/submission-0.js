class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = {};
        for (const s of strs) {
            const sorted = s.split("").sort().join();
            if (!groups[sorted]) groups[sorted] = [];
            groups[sorted].push(s);
        }
        return Object.values(groups);
    }
}
