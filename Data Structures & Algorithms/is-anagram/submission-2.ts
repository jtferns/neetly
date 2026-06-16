class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        // length-check
        if (s.length !== t.length) {
            return false;
        }
        // build a char frequency lookup
        const toChars = (text: string): Record<string, number> => {
            return [...text].reduce((acc, c: string) => {
                return {
                    ...acc,
                    [c]: c in acc ? acc[c] += 1 : 1,
                }
            }, {} satisfies Record<string, number>)
        }
        // construct char freq maps for both
        const sChars = toChars(s);
        const tChars = toChars(t);
        
        // compute char freq map keys, using sorted chars
        const sKey = Object.entries(sChars).sort((a, b) => a[0].localeCompare(b[0])).toString()
        const tKey = Object.entries(tChars).sort((a, b) => a[0].localeCompare(b[0])).toString()
        
        // if these match, s and t are anagrams of each other
        return sKey === tKey;
    }
}
