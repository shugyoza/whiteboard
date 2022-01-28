/* Leetcode 20220127: https://leetcode.com/problems/ugly-number/
An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

Given an integer n, return true if n is an ugly number.



Example 1:

Input: n = 6
Output: true
Explanation: 6 = 2 × 3
Example 2:

Input: n = 1
Output: true
Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.
Example 3:

Input: n = 14
Output: false
Explanation: 14 is not ugly since it includes the prime factor 7.


Constraints:

-231 <= n <= 231 - 1
*/
/*
I could not solve this. The solution is interesting. It built
on the fact that 'a prime number can only be divided by 1 and itself.'
A number that can be completely divided by 2, 3 or 5 should always
be divided until it became '1'. Otherwise, that means that positive number is a prime!
*/
const isUgly = (n) => {
    let num = n;
    if (num < 1) return false;
    while (num > 1) {
        if (num % 2 === 0) num = num / 2;
        else if (num % 3 === 0) num = num / 3;
        else if (num % 5 === 0) num = num / 5;
        else return false;
    }
    return num === 1;
}
/* helper works. fn does not work
const isPrime = (n) => {
    if (n < 2) return false;
    for (let i = n-1; i >= 2; i--) {
        if (n % i === 0) return false;
    }
    return true;
}

const isUgly = (n) => {
    if (n === 1) return true;
    if (n < 1 || (n % 2 > 0 && n % 3 > 0 && n % 5 > 0)) return false;
    let mid = Math.ceil(n / 2);
    for (let i = mid; i >= 2; i--) {
        if (n % i == 0 && i != 2 && i != 3 && i != 5 && isPrime(i)) {
            return false;
        }
    }
    return true;
}
*/

/* cheatsheet
var isUgly = function(num) {
    if (!num) return false;
    while (num > 1) {
        if (num % 2 == 0) num /= 2;
        else if (num % 3 == 0) num /= 3;
        else if (num % 5 == 0) num /= 5;
        else return false;
    }
    return num == 1;
    // To check if a number is ugly, we keep dividing it by either 2,3 or 5
    // until it becomes 1. If it cannot become 1 (no more divisible by 2,3 or 5),
    // then return false;
    // Time Complexity: O(n)
    // Space Complexity: O(1)
}; */
