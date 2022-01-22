/* LeetCode 20220122
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.



Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.


Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.

I: s,
O: bool palindrome or not
C:
Q:
- what if s not a string;
- what if the string '';
P:
- remove all non alphanumeric chars, have them in an array;
- iterate from end and start both at the same time, s[i] !== s[j] return false
- at the end of loop, return true;
O(2N), s: O(N)
*/

/* Needs 48 minutes to solve.
Runtime: 116 ms, faster than 40.32% of JavaScript online submissions for Valid Palindrome.
Memory Usage: 48.2 MB, less than 6.51% of JavaScript online submissions for Valid Palindrome.
*/
var isPalindrome = (s) => {
    if (s.length <= 1) return true;
    let res = [];								// []
    for (let i = 0; i < s.length; i++) {					// i=2 n='a'
        let c = s[i].toLowerCase();
      if ((c >= '0' && c <= '9') || (c >= 'a' && c <= 'z')) {		// T
        res.push(c);
      }							// ['r','a','c'
    }
    for (let j = 0, k = res.length-1; j < res.length; j++, k--) {
      if (res[j] !== res[k]) return false;
    }
    return true;
  }


  /* does not work to an extend
  var isPalindrome = (s) => {
    let check = s.match(/\s+/); 						// F
    if (check.length === 1 && !check[0].length) return true;		// F
    let res = [];								// []
    for (let i = 0; i < s.length; i++) {					// i=2 n='a'
        let c = s[i].toLowerCase();
      if ((c >= '0' && c <= '9') || (c >= 'a' && c <= 'z')) {		// T
        res.push(s[i]);
      }							// ['r','a','c'
    }
    for (let j = 0, k = res.length-1; j < res.length; j++, k--) {
      if (res[j] !== res[k]) return false;
    }
    return true;
  }
  */

  /*  0123456 = 7
      racecar
  */
