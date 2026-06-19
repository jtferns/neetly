class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        // transform s to alphanumeric
        const maybePal = s.replaceAll(/[^a-z0-9]/gi, "").toLowerCase();
        // match both halves simulatenously
        for (let i = 0; i < Math.round(maybePal.length / 2); i++) {
            const offset = maybePal.length - (i + 1);
            if (maybePal[i] !== maybePal[offset]) {
                // first mismatch disqualifies palindrome
                return false;
            }
        }
        // no mismatches, except for middle char in odd-length, qualifies palindrome
        return true;
    }
}
