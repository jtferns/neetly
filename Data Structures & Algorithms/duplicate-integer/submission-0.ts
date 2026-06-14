class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let seen = {}
        for (let v of nums) {
            if (seen[v]) {
                return true;
            }
            seen[v] = true; 
        }
        return false;
    }
}
