/* Leetcode 20220126
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.



Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"


Constraints:

1 <= s.length <= 3 * 105
s consist of printable ASCII characters.
*/
/*
Runtime: 141 ms, faster than 36.56% of JavaScript online submissions for Reverse Vowels of a String.
Memory Usage: 46.5 MB, less than 29.80% of JavaScript online submissions for Reverse Vowels of a String.
*/
const reverseVowels = (s) => {
    let vowel = '', res = '', let idx = 0;
    for (let i = s.length - 1; i >= 0; i--) {
      let c = s[i];
      if (c.toLowerCase() === 'a' || c.toLowerCase() === 'i' || c.toLowerCase() === 'u' || c.toLowerCase() === 'e' || c.toLowerCase() === 'o') vowel += c;
    }
    for (let j = 0; j < s.length; j++) {
      let c = s[j];
      if (c.toLowerCase() === 'a' || c.toLowerCase() === 'i' || c.toLowerCase() === 'u' || c.toLowerCase() === 'e' || c.toLowerCase() === 'o') {
        res += vowel[idx];
        idx += 1;
      }
      else res += c;
    }
    return res;
  }

  /* res = res + c oe vowel: 'oe' idx=0
     c
  'hello'
  */
