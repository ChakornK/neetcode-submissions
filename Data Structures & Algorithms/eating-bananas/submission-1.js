class Solution {
    piles;
    h;
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        this.piles = piles;
        this.h = h;

        return this.optimize(0, Math.max(...piles));
    }

    optimize(minK, maxK) {
        if (minK == maxK) return minK;
        const k = Math.floor(minK+((maxK - minK) / 2));
        const newH = this.calc(k);
        if (newH > this.h) return this.optimize(k+1, maxK);
        return this.optimize(minK, k)
    }

    calc(k) {
        return this.piles.map((p) => Math.ceil(p/k)).reduce((a,b) => a+b);
    }
}
