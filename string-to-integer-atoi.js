/* Leetcode 20220129: https://leetcode.com/problems/string-to-integer-atoi/
Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

The algorithm for myAtoi(string s) is as follows:

Read in and ignore any leading whitespace.
Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
Return the integer as the final result.
Note:

Only the space character ' ' is considered a whitespace character.
Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.


Example 1:

Input: s = "42"
Output: 42
Explanation: The underlined characters are what is read in, the caret is the current reader position.
Step 1: "42" (no characters read because there is no leading whitespace)
         ^
Step 2: "42" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "42" ("42" is read in)
           ^
The parsed integer is 42.
Since 42 is in the range [-231, 231 - 1], the final result is 42.
Example 2:

Input: s = "   -42"
Output: -42
Explanation:
Step 1: "   -42" (leading whitespace is read and ignored)
            ^
Step 2: "   -42" ('-' is read, so the result should be negative)
             ^
Step 3: "   -42" ("42" is read in)
               ^
The parsed integer is -42.
Since -42 is in the range [-231, 231 - 1], the final result is -42.
Example 3:

Input: s = "4193 with words"
Output: 4193
Explanation:
Step 1: "4193 with words" (no characters read because there is no leading whitespace)
         ^
Step 2: "4193 with words" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "4193 with words" ("4193" is read in; reading stops because the next character is a non-digit)
             ^
The parsed integer is 4193.
Since 4193 is in the range [-231, 231 - 1], the final result is 4193.


Constraints:

0 <= s.length <= 200
s consists of English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.'.
*/
/*
Runtime: 141 ms, faster than 32.96% of JavaScript online submissions for String to Integer (atoi).
Memory Usage: 43.7 MB, less than 7.66% of JavaScript online submissions for String to Integer (atoi).
*/
var myAtoi = function(s) {
    let trimmed = s.trim()
    let filtered = trimmed.match(/^[-+]?[^a-zA-Z-\s+]+/g); // no alphabet, space, nor '-'
    let res = !filtered ? 0 : ((filtered[0] - 0) || 0); // if filtered is null, than 0, else filtered[0]-0 OR 0 (if it's NaN)
    // console.log(filtered, res)
    if (res >= 2147483648) return 2147483647;
    if (res < -2147483648) return -2147483648;
    return res;
};


/* NO!
const myAtoi = (s) => {
    let n = '', a = '', z = 0;
    for (let i = 0; i < s.length; i++) {
        if ((s[i] == '+' && s[i - 1] == '-') ||
            (s[i] == '-' && s[i - 1] == '+')) return 0;
        if ((s[i] === '+' || s[i] === '-') && !n) n += s[i];
        if (s[i].toUpperCase().charCodeAt(0) >= 65 &&
            s[i].toUpperCase().charCodeAt(0) <= 90) {
            if (!n) return 0;
            if (n) break;
        }
        if (s[i] === '0' && (!n || n === '-' || n === '+')) {
            z += 1;
            continue;
        }
        if ((s[i] === '-' || s[i] === '+') && (s[i-1] === '0' || s[i-1] === '1' || s[i-1] === '2' || s[i-1] === '3' ||
             s[i-1] === '4' || s[i-1] === '5' || s[i-1] === '6' || s[i-1] === '7' ||
             s[i-1] === '8' || s[i-1] === '9') && s[i+1] && (s[i+1].charCodeAt(0)) ) return 0
        /*if ((s[i] === '-' || s[i] === '+') &&
            (s[i-1] === '0' || s[i-1] === '1' || s[i-1] === '2' || s[i-1] === '3' ||
             s[i-1] === '4' || s[i-1] === '5' || s[i-1] === '6' || s[i-1] === '7' ||
             s[i-1] === '8' || s[i-1] === '9')) return 0;*/
        if (s[i] === '0' || s[i] === '1' || s[i] === '2' || s[i] === '3' ||
            s[i] === '4' || s[i] === '5' || s[i] === '6' || s[i] === '7' ||
            s[i] === '8' || s[i] === '9' || s[i] === '.') {
            if (!n && z > 0 && s[i-1] === ' ') return 0;
            if (s[i - 1] === ' ' && n) break;
            if (s[i - 1] === '-' || s[i - 1] === '+' && s[i - 2] != /[0-9]/) n = s[i - 1] + s[i];
            else n += s[i];
        }
    }
    // console.log([47, s, n])
    n = n - 0
    // if (typeof n != 'number') return 0;
    if (isNaN(n)) return 0
    n = Math.floor(n);
    // console.log([50, s, n])
    if (n >= 2147483648) return 2147483647;
    if (n < -2147483648) return -2147483648;
    return n;
} */
// console.log(myAtoi("0  123"))//"+"))//"-000000000000001"))//"00000-42a1234"))//"00000-42a1234"))//"-5-"))//"  0000000000012345678"))//"   +0 123"))//"  -0012a42"))//"3.14159"))//"4193 with words"))//"      -42"))//"-+12") // '-5-'))//"words and 987")//'42'))//

// === '0' || s[i] === '1' || s[i] === '2' || s[i] === '3' || s[i] === '4' || s[i] === '5' || s[i] === '6' || s[i] === '7' || s[i] === '8' || s[i] === '9'
