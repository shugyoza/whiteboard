/* Leetcode 20220128: https://leetcode.com/problems/reverse-integer/
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).



Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21


Constraints:

-231 <= x <= 231 - 1
*/
/*
Runtime: 104 ms, faster than 47.50% of JavaScript online submissions for Reverse Integer.
Memory Usage: 44.2 MB, less than 5.06% of JavaScript online submissions for Reverse Integer.
*/
var reverse = function(x) {
    let mult = 1, ar = [], res = 0, base = 10,
        i = (x < 0) ? (x * -1) : x;
    while (i >= 1) {
        let n = i % base;
        ar.push(n);
        i = Math.floor(i / base);
    }
    for (let j = ar.length - 1; j >= 0; j--) {
        res = res + (ar[j] * mult);
        mult = mult * base;
    }
    if (res > 2147483647 || res < -2147483647) return 0;
    if (x < 0) return -res;
    else return res;
};
