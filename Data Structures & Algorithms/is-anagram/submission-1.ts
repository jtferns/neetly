class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }
        let toChars = (item: string): Record<string, number> =>
            [...item].reduce(
                (acc, c) => ({
                    ...acc,
                    [c]: c in acc ? acc[c] + 1 : 1,
                }),
                {},
            );
        let sChars = toChars(s);
        let tChars = toChars(t);
        for (let k of Object.keys(sChars)) {
            if (!(k in tChars) || sChars[k] !== tChars[k]) {
                return false;
            }
        }
        return true;
    }
}
