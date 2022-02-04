/* Leetcode 29. 20220203: https://leetcode.com/problems/divide-two-integers/
Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

Return the quotient after dividing dividend by divisor.

Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231, then return -231.



Example 1:

Input: dividend = 10, divisor = 3
Output: 3
Explanation: 10/3 = 3.33333.. which is truncated to 3.
Example 2:

Input: dividend = 7, divisor = -3
Output: -2
Explanation: 7/-3 = -2.33333.. which is truncated to -2.


Constraints:

-231 <= dividend, divisor <= 231 - 1
divisor != 0
*/
/*
I = dividend num, divisor num;
O: a num, result of dividend/divisor, floored;
C: no *, /, %. That leaves us with + and -
Q:
- what if num is not a typeof number
P:
- A * is basically the frequency of addition.
- so we can just do a loop adding our divisor up to the first instance it is gte dividend;
*/
/* Works, but does not pass max distance (dividend = -21474836482, divisor = 2)
var divide = function(dividend, divisor) {
    if (divisor === 0 || !divisor) return;
    let ct = 0;
    let i = divisor < 0 ? (0 - divisor) : divisor;      // if divisor is negative, normalize
    let max = dividend < 0 ? (0 - dividend) : dividend; // if dividend is negative, normalize
    const incr = divisor < 0 ? (0 - divisor) : divisor; // we need constant incrementer
    while (i <= max) { // 1 <= 1 T
        i = i + incr;     // 1 + 1 = 2 // we can't i = i + i as i gets bigger in each iteration
        ct = ct + 1;    // 1
    }
    let res = ct;
    if (divisor < 0 ^ dividend < 0) res = -res; // if either divisor OR dividend but NOT BOTH is negative, return res as negative
    if (res > 2147483648 - 1) res = 2147483648 - 1;
    if (res < -2147483648) res = -2147483648;
    return res;
};
*/

/* Runtime: 8085 ms, faster than 5.09% of JavaScript online submissions for Divide Two Integers.
Memory Usage: 44 MB, less than 9.32% of JavaScript online submissions for Divide Two Integers. */
var divide = function(dividend, divisor) {
    if (divisor === 0 || !divisor) return;
    let ct = 0;
    let i = divisor < 0 ? (0 - divisor) : divisor;      // if divisor is negative, normalize
    let max = dividend < 0 ? (0 - dividend) : dividend; // if dividend is negative, normalize
    const incr = divisor < 0 ? (0 - divisor) : divisor; // we need constant incrementer
    while (i <= max) { // 6 <= 7 T
        i = i + incr;     // 6 + 3 = 9 // we can't i = i + i as i gets bigger in each iteration
        max = max - incr; // 7 - 3 = 4
        ct = ct + 2;      // 4
    } // because we're doing iteration from both ways, when we exit the loop, for sure there's an
    // overlapping, thus over-count. We need to adjust our count to be more accurate. We need to
    // determine how much should we discount from our count.
    let decr = 0, dif = i - max, res;   // find the difference first, set counter for discount
    while (dif > 0) {       // 2 > 0 T  // loop, increment counter for every full value of divisor
        if (dif <= incr) break;         // exit loop if there's not enough to divide anymore
        dif = dif - incr;   // 2 - 3 = 2    // else we subtract our difference
        decr++;             // 1        // and increment our decrement counter
    } res = ct - decr;                  // we subtract the count with our decrementer value
    if (divisor < 0 ^ dividend < 0) res = -res; // if either divisor OR dividend but NOT BOTH is negative, return res as negative
    if (res > 2147483648 - 1) res = 2147483648 - 1;
    if (res < -2147483648) res = -2147483648;
    // console.log(res, ct, i, max)
    return res;
};

/* FAILED refactor
var divide = function(dividend, divisor) {
    if (divisor === 0 || !divisor) return;
    if (divisor === -1 && dividend < 0) {
        if (0 - dividend > 2147483648 - 1) return 2147483648 - 1;
        if (0 - dividend < -2147483648) return -2147483648;
        return 0 - dividend;
    }
    if (divisor === -1 && dividend > 0) return -dividend;
    if (divisor === 1 && dividend > 0) {
        if (dividend >= 2147483648 - 1) return 2147483648 - 1;
        return dividend;
    }
    if (divisor === 1 && dividend < 0) {
        if (dividend <= -2147483648) return -2147483648;
        return dividend
    }
    let ct = 0, mult = 0;
    let i = divisor < 0 ? (0 - divisor) : divisor;
    let max = dividend < 0 ? (0 - dividend) : dividend;
    let incr = divisor < 0 ? (0 - divisor) : divisor;
    while (i <= max) {
        i = i + incr;     // 6 + 3 = 9 // we can't i = i + i as i gets bigger in each iteration
        max = max - incr; // 7 - 3 = 4
        incr = incr + incr;
        mult++;
        ct = ct + mult;      // 4
    }
    ct = ct * 2;
    let dif = i - max, disc = 0;
    // console.log(dif, i, max)
    incr = divisor < 0 ? (0 - divisor) : divisor;
    while (dif > incr) {
        // if (dif < incr) break;
        dif = dif - incr;
        disc++;
    }
    let res = ct - disc;
    if (divisor < 0 ^ dividend < 0) res = -res; // if either divisor OR dividend but NOT BOTH is negative, return res as negative
    if (res > 2147483648 - 1) res = 2147483648 - 1;
    if (res < -2147483648) res = -2147483648;
    // console.log(res, ct, i, max, disc)
    return res;
};
*/
console.log(divide(-2147483648, 1))
// console.log(divide(2147483647,1))
// console.log(divide(-1,-1))
// console.log(divide(1,1))
// console.log(divide(1,-1))
// console.log(divide(-2147483648, -1))
// divide(-2147483648, 2)
// divide(-1, -1)
// divide(7, -3)
// divd -7, divs -3, -2
