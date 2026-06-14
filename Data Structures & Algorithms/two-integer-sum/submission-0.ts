class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let seen = {};
        for (let [idx, n] of nums.entries()) {
            let complement = target - n;
            if (seen[complement] != null) {
                return [seen[complement], idx];
            }
            seen[n] = idx;
        }
        return [];
    }
}
