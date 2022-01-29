/* Leetcode 20220128: https://leetcode.com/problems/zigzag-conversion/
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);


Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
Example 3:

Input: s = "A", numRows = 1
Output: "A"


Constraints:

1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000
*/
/* NO!
var convert = function(s, numRows) {
    let res = [], subA = [], fin = [],
        midQ = numRows - 2,
        full = true, i = 0;
    while (i < s.length) {
        if (full === true) {
            for (let j = 0; j < numRows && i + j < s.length; j++) {
                subA.push(s[i + j]);
            }
            res.push(subA);
            subA = [];
            i += numRows;
        } else if (full === false) {
            subA.push('');
            for (let k = 0; k < midQ && i + k < s.length; k++) {
                res.push([s[i + k]])
            }
            subA.push('');
            res.push(subA);
            i += midQ;
            subA = [];
        }
        full = !full;
    }
    let l = m = 0;
    while (m < numRows) {
        let mod = m % (numRows - 1);
        if (mod > 0) {
            for (l; l < res.length; l)
        }
        fin.push(res[m][l]);

    }
    console.log(fin, res);
};
*/
/*
Runtime: 132 ms, faster than 52.50% of JavaScript online submissions for Zigzag Conversion.
Memory Usage: 50.4 MB, less than 10.29% of JavaScript online submissions for Zigzag Conversion.
*/
var convert = (s, numRows) => {
    if (numRows === 1) return s;            // if there's only 1 numRows, we don't have to work;
    let res = [], row = 0, bool = true      // define res to contain our rows, row to define which subArr we're going to push
    for (let i = 0; i < numRows; i++) {     // and bool to determine when we increment/decrement for the right row to push
        res.push([]);                       // make the rows
    }
    for (let j = 0; j < s.length; j++) {    // iterate through all the chars in the string
        while (bool == true && j < s.length && row <= numRows) {
            if (row == numRows) {           // if we hit the max. rows, we want to start decrement
                bool = false;               // false switch to turn on decrementing row
                row = row - 2;              // -2 for adjustment cause we won't fill idx 0 & last idx in the 'connecting subArr'
                // break;                   // no Break! when we break, the outer loop will increment j
            } else if (row != numRows) {
                res[row].push(s[j]);
                row++;
                j++;
            }
        }
        while (bool == false && j < s.length && row >= 0) {
            if (row == 0) {
                bool = true;
                j--                         // I have no idea why I should use this, debugging shows we need to do this
                // row = 0;                 // probably due to (similar to the) reason that we won't fill idx0 and last idx;
                // break;
            } else if (row != 0) {
            res[row].push(s[j]);
                row--;
                j++;
            }
        }
    }
    let fin = res.map(el => el.join('')).join('');
    return fin;
}


/*                              [ [PA], [AP], [Y]  ]
01234567890123 = 14         res = [ [P,I,N], [A,L,S,I,G], [Y,A,H,R], [P,I] ], row = 0, j = 4, bool = true, numRows = 3
PAYPALISHIRING                       0         1           2       3
    j
*/









/* res = [[PAYP][A][L][ISHI][R][I][NG]], subA = [NG], full = true , numRows = 4, midQ = 4 - 2 = 2
         [[PAYPA]  P H A L I G Y I R A N        P A Y P A L I S H I R I N G
          [xLxxx]                               0 1 2 3 4 5 6 7 8 9 0 1 2 3 = 14
          [xxIxx]                               .               .
          [xxxSx]
          [HIRIN]
          [xGxxx]]
                     j
            i
01234567890123 = 14
PAYPALISHIRING
*/
