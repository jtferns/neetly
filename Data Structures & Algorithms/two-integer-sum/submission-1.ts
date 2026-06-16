class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // build lookup of seen <value, index>
        let seen = {}
        for (let [idx, n] of nums.entries()) {
            let complement = target - n;
            // when recording seen value, check if complement was already seen
            if (seen[complement] != null) {
                // return the matching indexes, assuming seen values are earlier
                return [seen[complement], idx];
            }
            // record n's index
            seen[n] = idx;
        }
        // after checking all of nums, there are no pairs
        return [];
    }
}
