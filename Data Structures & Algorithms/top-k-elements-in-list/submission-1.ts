class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        // build freq map
        let freqMap: Record<number, number> = {};
        for (const n of nums) {
            if (n in freqMap) {
                freqMap[n]++;
            } else {
                freqMap[n] = 1;
            }
        }
        // filter entries by k-th freq
        return Object.entries(freqMap)
            .sort(([, aFreq], [, bFreq]) => bFreq - aFreq)
            .slice(0, k)
            .map(([v, freq]) => parseInt(v));
    }
}
