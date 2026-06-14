class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        // let seen = {}
        // for (let v of nums) {
        //     if (seen[v]) {
        //         return true;
        //     }
        //     seen[v] = true; 
        // }
        // return false;
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
