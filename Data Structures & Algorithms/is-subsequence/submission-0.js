class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        const charS = s.split("");
        for (let i = 0; i < t.length; i++) {
            if (charS.length == 0) return true;
            if (t[i] == charS[0]) charS.shift();
        }
        if (charS.length == 0) return true;
        return false;
    }
}
