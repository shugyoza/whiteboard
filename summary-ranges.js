/* Leetcode 20220126: https://leetcode.com/problems/summary-ranges/
You are given a sorted unique integer array nums.

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

Each range [a,b] in the list should be output as:

"a->b" if a != b
"a" if a == b


Example 1:

Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"
Example 2:

Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"


Constraints:

0 <= nums.length <= 20
-231 <= nums[i] <= 231 - 1
All the values of nums are unique.
nums is sorted in ascending order.
*/

/* 30:12:19. One typo: closing parentheses, missing defensive !nums.length.
Note: !nums is NOT !nums.length for an array;

Runtime: 108 ms, faster than 22.92% of JavaScript online submissions for Summary Ranges.
Memory Usage: 38.5 MB, less than 83.15% of JavaScript online submissions for Summary Ranges.

const summaryRanges = (nums) => {
  if (!nums.length) return [];
  let res = [], trk = [];
  trk.push([nums[0],nums[0]]);
  for (let i = 1; i < nums.length; i++) {
    let n = nums[i];
    if (n - trk[trk.length-1][1] === 1) {
      trk[trk.length-1][1] = n;
    } else if (n - trk[trk.length-1][1] > 1) {
      trk.push([n, n]);
    }
  }
  for (let j = 0; j < trk.length; j++) {
    let r = trk[j];
    if (r[0] === r[1]) res.push('' + r[0]);
    else res.push(`${r[0]}->${r[1]}`);
  }
  return res;
}
*/

/*
Runtime: 72 ms, faster than 76.18% of JavaScript online submissions for Summary Ranges.
Memory Usage: 38.8 MB, less than 32.58% of JavaScript online submissions for Summary Ranges.

const summaryRanges = (nums) => {
  if (!nums.length) return [];
  let res = [], start = nums[0], end = nums[0];
  for (let i = 1; i < nums.length; i++) {
      let n = nums[i];
      if (n - end === 1) {
          end = n;
      } else if (n - end > 1) {
          if (end - start === 0) {
              res.push('' + start);
              start = end = n;
          }
          else {
              res.push(`${start}->${end}`);
              start = end = n;
          }
      }
  }
  if (start === end) {
      res.push ('' + start);
  } else res.push(`${start}->${end}`);
  return res;
}
*/

/*
Runtime: 89 ms, faster than 38.88% of JavaScript online submissions for Summary Ranges.
Memory Usage: 38.7 MB, less than 45.17% of JavaScript online submissions for Summary Ranges.
*/
const summaryRanges = (nums) => {
    if (!nums.length) return [];
    let res = [nums[0]], end = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let n = nums[i];
        if (n - end === 1) {
            end = n;
        } else if (n - end > 1) {
            if (end - res[res.length-1] === 0) {
                res[res.length - 1] += '';
                res[res.length] = end = n;
            }
            else {
                res[res.length - 1] = `${res[res.length - 1]}->${end}`;
                res[res.length] = end = n;
            }
        }
    }
    if (res[res.length - 1] === end) {
        res[res.length - 1] += '';
    } else res[res.length - 1] = `${res[res.length - 1]}->${end}`;
    return res;
  }
