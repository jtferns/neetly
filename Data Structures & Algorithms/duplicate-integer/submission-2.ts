class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let seen = {}
        return nums.reduce((acc, v) => {
            if (seen[v]) {
                return true;
            }
            seen[v] = true;
            return acc;
        }, false)
    }
}
