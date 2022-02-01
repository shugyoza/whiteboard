/* Leetcode 20220201: https://leetcode.com/problems/letter-combinations-of-a-phone-number/
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.





Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]


Constraints:

0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].

*/
/* does not work [
  'ade', 'adf', 'aeg', 'aeh',
  'aei', 'afg', 'afh', 'afi',
  'bdg', 'bdh', 'bdi', 'beg',
  'beh', 'bei', 'bfg', 'bfh',
  'bfi', 'cdg', 'cdh', 'cdi',
  'ceg', 'ceh', 'cei', 'cfg',
  'cfh', 'cfi', 'add'
]

var letterCombinations = function(digits) {
    let res = [], fin = [];
    if (!digits.length || !digits) return res;
    const alp = {'2': ['a','b','c'],'3':['d','e','f'],'4':['g','h','i'],'5':['j','k','l'],'6':['m','n','o'],'7':['p','q','r','s'],'8':['t','u','v'],'9':['w','x','y','z'] };
    const ar = digits.match(/[0-9]/g).map((i) => alp[i]);
    res = [...ar[0]];
    let i = 1;
    while (i < ar.length) {
        let len = res.length;
        while (len >= 0) {
            let currentS = res.shift();
            if (currentS.length === digits.length) {
                res.push(currentS);
                return res;
            }
            for (let j = 0; j < ar[i].length; j++) {
                let newC = ar[i][j];
                res.push(currentS + newC);
            }
            len--;
        }
        i++;
    }
};
*/

/*
Runtime: 103 ms, faster than 33.03% of JavaScript online submissions for Letter Combinations of a Phone Number.
Memory Usage: 41.9 MB, less than 6.16% of JavaScript online submissions for Letter Combinations of a Phone Number.

var letterCombinations = function(digits) {
    if (!digits.length || !digits) return res;
    const alp = {'2': ['a','b','c'],'3':['d','e','f'],'4':['g','h','i'],'5':['j','k','l'],'6':['m','n','o'],'7':['p','q','r','s'],'8':['t','u','v'],'9':['w','x','y','z'] };
    const ar = digits.match(/[0-9]/g).map((i) => alp[i]);

    let reduced = ar.reduce((acc, el) => {
        let tmp = [];
        for (let i = 0; i < acc.length; i++) {
            let str = acc[i];
            for (let j = 0; j < el.length; j++) {
                let chr = el[j];
                tmp.push(str + chr);
            }
        }
        return acc = tmp;
    })
    return reduced;
}
*/

/*
Runtime: 85 ms, faster than 50.58% of JavaScript online submissions for Letter Combinations of a Phone Number.
Memory Usage: 42.2 MB, less than 5.72% of JavaScript online submissions for Letter Combinations of a Phone Number.

const letterCombinations = (digits) => {
    if (!digits.length || !digits) return [];
    const alp = {'2': ['a','b','c'],'3':['d','e','f'],'4':['g','h','i'],'5':['j','k','l'],'6':['m','n','o'],'7':['p','q','r','s'],'8':['t','u','v'],'9':['w','x','y','z'] };
    let ar = [ ...alp[digits[0]] ];
    for (let i = 1; i < digits.length; i++) {
        let num = digits[i];
        let tmp = [];
        for (let j = 0; j < ar.length; j++) {
            let str = ar[j];
            for (let k = 0; k < alp[num].length; k++) {
                let chr = alp[num][k];
                tmp.push(str + chr);
            }
        }
        ar = tmp;
    }
    return ar;
}
*/

/*
Runtime: 82 ms, faster than 52.58% of JavaScript online submissions for Letter Combinations of a Phone Number.
Memory Usage: 41.8 MB, less than 6.91% of JavaScript online submissions for Letter Combinations of a Phone Number.

const letterCombinations = (digits) => {
    if (!digits.length || !digits) return [];
    const alp = {'2': ['a','b','c'],'3':['d','e','f'],'4':['g','h','i'],'5':['j','k','l'],'6':['m','n','o'],'7':['p','q','r','s'],'8':['t','u','v'],'9':['w','x','y','z'] };
    let ar = [ ...alp[digits[0]] ];
    for (let i = 1; i < digits.length; i++) {
        let num = digits[i];
        let len = ar.length;
        for (let j = 0; j < len; j++) {
            let str = ar[j];
            for (let k = 0; k < alp[num].length; k++) {
                let chr = alp[num][k];
                ar.push(str + chr);
            }
        }
        ar.splice(0, len);
    }
    return ar;
} */

/*
Runtime: 77 ms, faster than 55.93% of JavaScript online submissions for Letter Combinations of a Phone Number.
Memory Usage: 41.6 MB, less than 7.76% of JavaScript online submissions for Letter Combinations of a Phone Number.
*/
const letterCombinations = (digits) => {
    if (!digits.length || !digits) return [];
    const alp = {'2': ['a','b','c'],'3':['d','e','f'],'4':['g','h','i'],'5':['j','k','l'],'6':['m','n','o'],'7':['p','q','r','s'],'8':['t','u','v'],'9':['w','x','y','z'] };
    let ar = [ ...alp[digits[0]] ];
    for (let i = 1; i < digits.length; i++) {
        let num = digits[i];
        let len = ar.length;
        while (len > 0) {
            let str = ar.shift();
            for (let k = 0; k < alp[num].length; k++) {
                let chr = alp[num][k];
                ar.push(str + chr);
            }
            len--
        }
    }
    return ar;
}

console.log(letterCombinations('234',))
