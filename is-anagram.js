/* Leetcode 20220127: https://leetcode.com/problems/valid-anagram/

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.



Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false


Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.


Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

//////

Runtime: 150 ms, faster than 25.63% of JavaScript online submissions for Valid Anagram.
Memory Usage: 42.5 MB, less than 36.52% of JavaScript online submissions for Valid Anagram.
*/
var isAnagram = (s, t) => {
    if (s.length != t.length) return false;
    let chk = {};
    for (let i = 0; i < s.length; i++) {
      let cS = s[i];
      if (chk.hasOwnProperty(cS)) chk[cS] += 1;
      else if (!chk.hasOwnProperty(cS)) chk[cS] = 1;
    }
    for (let j = 0; j < t.length; j++) {
      let cT = t[j];
      if (chk.hasOwnProperty(cT)) chk[cT] -= 1;
      else if (!chk.hasOwnProperty(cT)) chk[cT] = -1;
    }
    for (let c in chk) {
      if (chk[c] !== 0) return false;
    }
    return true;
  }
