/* Leetcode 20220127: https://leetcode.com/problems/missing-number/
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.



Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
Example 2:

Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
Example 3:

Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.


Constraints:

n == nums.length
1 <= n <= 104
0 <= nums[i] <= n
All the numbers of nums are unique.


Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?
*/
/*
Runtime: 110 ms, faster than 44.08% of JavaScript online submissions for Missing Number.
Memory Usage: 44.5 MB, less than 11.40% of JavaScript online submissions for Missing Number.

var missingNumber = function(nums) {
   let ct = 0;
   for (let i = 0; i < nums.length; i++) {
       ct = ct + i + 1;
   }
    for (let j = 0; j < nums.length; j++) {
        ct -= nums[j];
    }
    return ct;
}; */

/*
Runtime: 78 ms, faster than 86.33% of JavaScript online submissions for Missing Number.
Memory Usage: 44.2 MB, less than 11.84% of JavaScript online submissions for Missing Number.
*/
var missingNumber = (nums) => {
    let ct = 0;
    for (let i = 0; i < nums.length; i++) {
        ct = ct + i + 1;
        ct = ct - nums[i];
    }
    return ct;
}
