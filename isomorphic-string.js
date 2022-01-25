/* Leetcode 20220124. 1:43 mins.
205. Isomorphic Strings
Easy

3129

605

Add to List

Share
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.



Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true


Constraints:

1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.


I: sA, sB;
O: bool;
C:
Q:
- what if any of input is not a str?
- what if s = '';
- what if char is not alphanumeric;
P:
- both s.length ===, not ? false : iterate
- define a chk = {};
- iterate both str altogether;
- for every iteration in sA:
---- if cA is not a key in chk, store the cA as a key, and the val: cB;
---- also check if cA
- for every iteration in sB:
---- if cB is not a val in chk, store
*/
/*
const isIsomorphic = (sA, sB) => {
    if (!sA || !sB || sA.length != sB.length) return false;	// F
    const chk = {};						// {}
    for (let i = 0; i < sA.length; i++) {			// i = 5 < 5 T
        let cA = sA[i], cB = sB[i]				// cA = 'r', cB = 'e'
        if (chk.hasOwnProperty(cA)) {				// F
            if (chk[cA] !== cB) return false;			// chk.p = 't' != 't' F
        }
        else if (!chk.hasOwnProperty(cA)) {			// chk.r = 'e';
            chk[cA] = cB;
        }
    }
    return true;
}
*/

/*
const isIsomorphic = (sA, sB) => {
    if (!sA || !sB || sA.length != sB.length) return false;	// F
    const chk = {};						// {}
    for (let i = 0; i < sA.length; i++) {			// i = 5 < 5 T
        let cA = sA[i], cB = sB[i]				// cA = 'r', cB = 'e'
        if (chk.hasOwnProperty(cA)) {				// F
            if (chk[cA] !== cB) return false;			// chk.p = 't' != 't' F
        }
	if (chk.hasOwnProperty(cB)) {
            if (chk[cB] !== cA) return false;
        }
        else if (!chk.hasOwnProperty(cA)) {			// chk.r = 'e';
            chk[cA] = cB;
        }
        else if (!chk.hasOwnProperty(cB)) {
            chk[cB] = cA;
        }
    }
    return true;
} */

/*
const isIsomorphic = (sA, sB) => {
    if (!sA || !sB || sA.length != sB.length) return false;	// F
    const chkA = {}, chkB = {}, resA = true, resB = false	// {}
    for (let i = 0; i < sA.length; i++) {			// i = 5 < 5 T
        let cA = sA[i], cB = sB[i]				// cA = 'r', cB = 'e'
        if (chkA.hasOwnProperty(cA)) {				// F
            if (chkA[cA] !== cB) resA = false;			// chk.p = 't' != 't' F
        }
	    if (chkB.hasOwnProperty(cB)) {
            if (chkB[cB] !== cA) resB = false;
        }
        else if (!chkA.hasOwnProperty(cA)) {			// chk.r = 'e';
            chkA[cA] = cB;
        }
        else if (!chkB.hasOwnProperty(cB)) {
            chkB[cB] = cA;
        }
        if (resA && resB == false) return false
    }
    return true;
}
*/
/*
Runtime: 459 ms, faster than 5.01% of JavaScript online submissions for Isomorphic Strings.
Memory Usage: 44.8 MB, less than 8.41% of JavaScript online submissions for Isomorphic Strings.

const isIsomorphic = (sA, sB) => {
    if (!sA || !sB || sA.length !== sB.length) return false;
    const chk = {};
    for (let i = 0; i < sA.length; i++) {
        let cA = sA[i], cB = sB[i];
        if (chk.hasOwnProperty(cA) && chk[cA] != cB) return false;
        if (!chk.hasOwnProperty(cA)) chk[cA] = cB;
        for (let key in chk) {
            if (chk[key] == cB && key != cA) return false;
        }
    }
    return true;
}
*/
/*
Runtime: 80 ms, faster than 93.19% of JavaScript online submissions for Isomorphic Strings.
Memory Usage: 40.8 MB, less than 56.96% of JavaScript online submissions for Isomorphic Strings.
*/
const isIsomorphic = (sA, sB) => {
    if (!sA || !sB || sA.length !== sB.length) return false;
    const chkA = {}, chkB = {};
    for (let i = 0; i < sA.length; i++) {
        let cA = sA[i], cB = sB[i];
        if (chkA.hasOwnProperty(cA) && chkA[cA] != cB) return false;
        if (chkB.hasOwnProperty(cB) && chkB[cB] != cA) return false;
        if (!chkA.hasOwnProperty(cA)) {
            chkA[cA] = cB;
            chkB[cB] = cA; // cA as a key in chkA, while cB is the value
        }
    }
    return true;
}
