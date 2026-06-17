class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // group strs by canonical keys
        let groupedAnagrams: Record<string, string[]> = {};
        for (const str of strs) {
            // ordered chars should always be identical as a canonical key
            const key = str.split("").sort().join("");
            if (key in groupedAnagrams) {
                groupedAnagrams[key].push(str);
            } else {
                groupedAnagrams[key] = [str];
            }
        }
        return Object.values(groupedAnagrams);
    }
}
