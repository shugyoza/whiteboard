/* Leetcode 20220125
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.



Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true
Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false


Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
0 <= k <= 105

Runtime: 301 ms, faster than 25.66% of JavaScript online submissions for Contains Duplicate II.
Memory Usage: 72.8 MB, less than 5.03% of JavaScript online submissions for Contains Duplicate II.
*/
const containsNearbyDuplicate = (nums, k) => {
    let chk = {};
    for (let i = 0; i < nums.length; i++) {
      let n = nums[i];
      if (chk.hasOwnProperty(n)) {
        let res = Math.abs(chk[n][1] - i);
        if (res <= k) return true;
        else chk[n][1] = i;
      }
      else chk[n] = [n, i];
    }
    return false;
  }
