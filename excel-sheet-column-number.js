/* Leetcode 20210122
171. Excel Sheet Column Number
Easy

2272

229

Add to List

Share
Given a string columnTitle that represents the column title as appear in an Excel sheet, return its corresponding column number.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28
...


Example 1:

Input: columnTitle = "A"
Output: 1
Example 2:

Input: columnTitle = "AB"
Output: 28
Example 3:

Input: columnTitle = "ZY"
Output: 701


Constraints:

1 <= columnTitle.length <= 7
columnTitle consists only of uppercase English letters.
columnTitle is in the range ["A", "FXSHRXW"].

Runtime: 116 ms, faster than 44.68% of JavaScript online submissions for Excel Sheet Column Number.
Memory Usage: 42.2 MB, less than 6.47% of JavaScript online submissions for Excel Sheet Column Number.
*/
var titleToNumber = function(columnTitle) {
    let sum = 0, mult = 1, base = 26;
    for (let i = columnTitle.length - 1; i >= 0; i--) {
        let c = columnTitle[i].toUpperCase();
        let ascii = c.charCodeAt(0);
        let n = ascii - 64;
        sum = sum + n * mult;
        mult *= base;
    }
    console.log(sum)
    return sum;
};
