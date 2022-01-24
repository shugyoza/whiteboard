/* Leetcode 20220123
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.



Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2


Constraints:

n == nums.length
1 <= n <= 5 * 104
-231 <= nums[i] <= 231 - 1

Runtime: 136 ms, faster than 18.87% of JavaScript online submissions for Majority Element.
Memory Usage: 42.7 MB, less than 26.71% of JavaScript online submissions for Majority Element.

var majorityElement = function(nums) {
    let half = Math.ceil(nums.length / 2);
    let chk = {};
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (chk[num]) chk[num] += 1;
        if (!chk[num]) chk[num] = 1;
        if (chk[num] > half) return num;
    }
    for (let num in chk) {
        if (chk[num] >= half) return num - 0;
    }
    console.log(chk)
    return false;
}; */
