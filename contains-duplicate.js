/* Leetcode 20220125
217. Contains Duplicate
Easy

3551

918

Add to List

Share
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.



Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true


Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
*/

/*
Runtime: 143 ms, faster than 43.58% of JavaScript online submissions for Contains Duplicate.
Memory Usage: 47.3 MB, less than 65.10% of JavaScript online submissions for Contains Duplicate.
*/
const containsDuplicate = (nums) => {
    let chk = new Set();
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        if (chk.has(n)) return true;
        chk.add(n);
    }
    return false;
}

/*
Runtime: 183 ms, faster than 25.72% of JavaScript online submissions for Contains Duplicate.
Memory Usage: 48.8 MB, less than 2

var containsDuplicate = function(nums) {
    let chk = {};   // {'1': 2, '2':1, '3':1, }
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        if (chk.hasOwnProperty(n)) chk[n] += 1;
        if (chk[n] > 1) return true;
        else chk[n] = 1;
    }
    return false;
};
*/
//        n
//  0 1 2 3 = 4
// [1,2,3,1]
