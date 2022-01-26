/* Leetcode 20220126
Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.



Example 1:

Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2
Since 2 has only one digit, return it.
Example 2:

Input: num = 0
Output: 0


Constraints:

0 <= num <= 231 - 1
*/

/*
Runtime: 196 ms, faster than 5.02% of JavaScript online submissions for Add Digits.
Memory Usage: 40.3 MB, less than 61.03% of JavaScript online submissions for Add Digits.

var addDigits = function(num) {
    if (Math.floor(num / 10) === 0) return num;
    return addDigits((num % 10) + Math.floor(num / 10));
}; */

/*
Runtime: 171 ms, faster than 9.13% of JavaScript online submissions for Add Digits.
Memory Usage: 40.2 MB, less than 61.03% of JavaScript online submissions for Add Digits.
*/
const addDigits = (num) => {
    while (Math.floor(num / 10) > 0) {
        num = (num % 10) + Math.floor(num / 10);
    }
    return num;
}
