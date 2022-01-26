/* Leetcode 20220125
Given a string s, find the length of the longest substring without repeating characters.



Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

/*
Runtime: 375 ms, faster than 21.15% of JavaScript online submissions for Longest Substring Without Repeating Characters.
Memory Usage: 45.7 MB, less than 20.24% of JavaScript online submissions for Longest Substring Without Repeating Characters.
*/
const lengthOfLongestSubstring = (s) => {
    let chk = {}, count = 0, max = 0;
    for (let i = 0; i < s.length; i++) {		//
      if (chk.hasOwnProperty(s[i])) {
         max = Math.max(count, max);
           for (let key in chk) {
             if (chk[key] < chk[s[i]]) {
                delete chk[key];
                count--;
             }
           }
           chk[s[i]] = i;
      } else if (!chk.hasOwnProperty(s[i])) {
        chk[s[i]] = i;
        count += 1;
      }
    }
    max = Math.max(count, max);
    return max;
  }

/*
Runtime: 268 ms, faster than 29.44% of JavaScript online submissions for Longest Substring Without Repeating Characters.
Memory Usage: 47 MB, less than 14.19% of JavaScript online submissions for Longest Substring Without Repeating Characters.

const lengthOfLongestSubstring = (s) => {
    let chk = {}, count = 0, arr = [];
    for (let i = 0; i < s.length; i++) {		//
      if (chk.hasOwnProperty(s[i])) {
         arr.push(count);
           for (let key in chk) {
             if (chk[key] < chk[s[i]]) {
                delete chk[key];
                count--;
             }
           }
           chk[s[i]] = i;
      } else if (!chk.hasOwnProperty(s[i])) {
        chk[s[i]] = i;
        count += 1;
      }
    }
    arr.push(count);
    let max = 0;
    for (let j = 0; j < arr.length; j++) {
      let ct = arr[j];
      if (max < ct) {
        max = ct;
      }
    }
    return max;
  }
*/

/*
const lengthOfLongestSubstring = (s) => {
  let chk = {}, count = 0, arr = [];
  for (let i = 0; i < s.length; i++) {		//
    if (chk.hasOwnProperty(s[i])) {
       arr.push(count);
       if (s[i] === s[i-1]) {
         count = 1;
         chk = {};
       } else chk[s[i]] = i;
    } else {
      chk[s[i]] = i;
      count += 1;
    }
  }
  arr.push(count);
  let max = 0;
  for (let j = 0; j < arr.length; j++) {
    let ct = arr[j];
    if (max < ct) {
      max = ct;
    }
  }
  return max;
}
*/

/* does not work on 'anviaj'. if there's duplicate ('a'), we have to restart from 'n'.
that means we can't use if, but have to find index of the first duplicate and restart
iteration from there. But we cannot use .indexOf since .indexOf only return values of
the first occurence.

const lengthOfLongestSubstring = (s) => {
  let chk = new Set(), aSubstr = [];
  for (let i = 0; i < s.length; i++) {		//
    if (chk.has(s[i])) {
       aSubstr.push(chk);
       if (s[i] != s[i-1]) chk = new Set(s[i],s[i-1]);
       else chk = new Set(s[i]);
    } else {
      chk.add(s[i]);
    }
  }
  aSubstr.push(chk);
  let longest = 0;
  for (let j = 0; j < aSubstr.length; j++) {
    let subLen = aSubstr[j];
    if (longest < subLen.size) {
      longest = subLen.size;
    }
  }
  return longest;
}
*/

/* does not work on 'dvdf'. If there's duplicate, we have to restart from 'd'. try if
const lengthOfLongestSubstring = (s) => {
  let chk = new Set(), aSubstr = [];
  for (let i = 0; i < s.length; i++) {		//
    if (chk.has(s[i])) {
       aSubstr.push(chk);
       chk = new Set(s[i]);
    } else {
      chk.add(s[i]);
    }
  }
  aSubstr.push(chk);
  let longest = 0;
  for (let j = 0; j < aSubstr.length; j++) {
    let subLen = aSubstr[j];
    if (longest < subLen.size) {
      longest = subLen.size;
    }
  }
  return longest;
}
*/

/* may be work but must refactor (what if i = s.length - 1 but s[i] == s[i-1]?)
const lengthOfLongestSubstring = (s) => {
  let chk = new Set(), subS = '', aSubstr = [];
  for (let i = 0; i < s.length; i++) {		//
    if (chk.has(s[i]) || i == s.length - 1]) {
       aSubstr.push(subS);
       subS = s[i];
       chk = new Set(s[i]);
    } else {
      chk.add(s[i]);
      subS += s[i];
    }
  }
  let longest = 0;
  for (let j = 0; j < aSubstr.length; j++) {
    let str = aSubstr[j];
    if (longest < str.length) {
      longest = str.length;
    }
  }
  return longest;
}
*/

/*
     c
012345 = 6
pwwkew

*/

/*
const lengthOfLongestSubstring = (s) => {
  let substr = new Set(), aSubstr = [];
  for (let i = 0; i < s.length; i++) {		// 'w'
    if (s[i] == s[i-1]) {
      aSubstr.push(substr);
      substr = new Set(s[i]);			// substr = 'w'
    }						// ['pw',
    else if (s[i] != s[i-1] substr.add(s[i]);	// substr  = 'wke'
  }
  if (substr.size > 1) aSubstr.push(substr);
  let longest = 0;
  for (let j = 0; j < aSubstr.length; j++) {
    let str = aSubstr[j];
    if (longest < str.size) {
      longest = str.size;
    }
  }
  return longest;
}
*/


/*
const lengthOfLongestSubstring = (s) => {
  let substr = '', aSubstr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] != s[i-1]) substr += s[i];			// ['abcabcb', 'berb']
    else if (s[i] == s[i-1] && s[i] != s[i+1]) {
      aSubstr.push(substr);
      subst = s[i];
    }
  }
  let longest = '';
  for (let j = 0; j < aSubstr.length; j++) {
    let str = aSubstr[j];
    if (longest.length < str.length) {
      longest = str;
    }
  }
  return longest;
}
*/

/*
             c
abcabcbbberbbb
str = ''
[]
*/

// s[i] != s[i-1] str += c
// s[i] == s[i-1] && s[i] != s[i+1] push subs to arr, and set str = '';
// iterate through the result Array comparing length in every els, and return longest
