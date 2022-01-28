/* Leetcode 20220128: https://leetcode.com/problems/longest-palindromic-substring/
Given a string s, return the longest palindromic substring in s.



Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"


Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.
*/

/* NO!
var longestPalindrome = function(s) {
    let res = '',
        i = 1,
        stack = [s[0]],
        str = '';
    while (i > s.length) {
        if (s[i] != stack[stack.length - 1] && s[i] != stack[stack.length - 2] && stack[stack.length - 2]) {
            if (res.length < str.length) {
                res = str;
                str = '';
            }
            else str = '';
        } else if (s[i] == stack[stack.length - 1]) {
            if (!str.length) str = s[i] + stack.pop();
            else if (str.length) {
                if (res.length < str.length) {
                    res = str;
                    str = '';
                }
                else str = ''
            }
        } else if (s[i] != stack[stack.length - 1] && s[i] == stack[stack.length - 2] && stack[stack.length - 1] && stack[stack.length - 2]) {
            let mid = stack.pop();
            str = stack[stack.length - 1] + mid + s[i];
        }
        stack.push(s[i]);
    }
    return res;
};
*/

/*
Runtime: 7242 ms, faster than 5.01% of JavaScript online submissions for Longest Palindromic Substring.
Memory Usage: 49.1 MB, less than 13.16% of JavaScript online submissions for Longest Palindromic Substring.
*/

var isPalindrome = (s, startIdx = 0, endIdx = s.length - 1) => {
    for (let i = startIdx, j = endIdx; i <= j; i++, j--) {
        if (s[i] != s[j]) return;
        if (i >= j) return s.slice(startIdx, endIdx + 1);
    }
    return s.slice(startIdx, endIdx + 1);
}
// console.log(isPalindrome('a', 0, 0))

var longestPalindrome = (s) => {
    let res = ''; // res = [];
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s.length; j++) {
            let palindrome = isPalindrome(s, i, j);
            // if (palindrome) res.push(palindrome);
            if (palindrome && res.length <= palindrome.length) res = palindrome;
        }
    }
    return res === '' ? null : res;
}

// console.log(longestPalindrome('cbbd'))
/*          res
            stack ['b']
01234 = 5
babad       str 'ba'
  i
*/
