class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const openerByClosed: Record<string, string> = {
            ')': '(',
            '}': '{',
            ']': '['
        };
        let visited: string[] = [];
        if (s.length % 2 === 1) {
            // uneven length can never be valid
            return false;
        }
        for (const c of s) {
            // push open bracket
            if (c === '(' || c === '[' || c === '{') {
                visited.push(c);
            }
            // pop closed brackets
            if (c === ')' || c === ']' || c === '}') {
                const recentOpened = visited.pop();
                if (recentOpened !== openerByClosed[c]) {
                    // closed in wrong order, invalid
                    return false;
                }
            }
        }
        return visited.length === 0;
    }
}
