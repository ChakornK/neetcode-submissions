class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for (const j in nums) {
            const req = target - nums[+j];
            const i = nums.indexOf(req);
            if (i != -1 && i < +j) return [i,+j];
        }
    }
}
