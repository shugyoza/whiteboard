/* Leetcode 20220126. t: 11:51:00. https://leetcode.com/problems/power-of-two/submissions/
Given an integer n, return true if it is a power of two. Otherwise, return false.

An integer n is a power of two, if there exists an integer x such that n == 2x.



Example 1:

Input: n = 1
Output: true
Explanation: 20 = 1
Example 2:

Input: n = 16
Output: true
Explanation: 24 = 16
Example 3:

Input: n = 3
Output: false


Constraints:

-231 <= n <= 231 - 1


Follow up: Could you solve it without loops/recursion?

///////

Runtime: 98 ms, faster than 29.21% of JavaScript online submissions for Power of Two.
Memory Usage: 39.5 MB, less than 99.56% of JavaScript online submissions for Power of Two.

const isPowerOfTwo = (n) => {
  if (n < 0) return false;
  if (n === 1) return true;
  let i = 2;
  while (i <= n) {		// 16 < 17
    if (i === n) return true;
    i *= 2;
  }
  return false;
} */

/*
Runtime: 113 ms, faster than 22.90% of JavaScript online submissions for Power of Two.
Memory Usage: 40.2 MB, less than 72.17% of JavaScript online submissions for Power of Two.

*/
const isPowerOfTwo = (n) => {
    if (n < 1) return false;
    if (n === 1) return true;
    let i = n;
    while (i >= 2) {
        if (i % 2 > 0) return false;
        i = i / 2;
    }
    return true
}
