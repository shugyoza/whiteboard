/* Leetcode 20220123
167. Two Sum II - Input Array Is Sorted
Easy

4393

863

Add to List

Share
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.



Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
Example 2:

Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
Example 3:

Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].


Constraints:

2 <= numbers.length <= 3 * 104
-1000 <= numbers[i] <= 1000
numbers is sorted in non-decreasing order.
-1000 <= target <= 1000
The tests are generated such that there is exactly one solution.

////////

Runtime: 357 ms, faster than 8.53% of JavaScript online submissions for Two Sum II - Input Array Is Sorted.
Memory Usage: 39.2 MB, less than 55.42% of JavaScript online submissions for Two Sum II - Input Array Is Sorted.

const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {	 // i = 0 < 4 => T
    let numA = nums[i];				         // A = 2
    for (let j = i+1; j < nums.length; j++) {	// j = 1 < 4 => T
      let numB = nums[j];			 // B = 7
      if (numA + numB === target) {		// 2 + 7 = 9 === 9 ? T
        return [i+1, j+1]			 // [1, 2]
      }
    }
  }
  return [];
} */

/*
Runtime: 88 ms, faster than 52.66% of JavaScript online submissions for Two Sum II - Input Array Is Sorted.
Memory Usage: 38.7 MB, less than 92.28% of JavaScript online submissions for Two Sum II - Input Array Is Sorted.

Runtime: 72 ms, faster than 88.44% of JavaScript online submissions for Two Sum II - Input Array Is Sorted.
Memory Usage: 39.5 MB, less than 23.38% of JavaScript online submissions for Two Sum II - Input Array Is Sorted.
** the last one we use .hasOwnProperty for both key checking.
*/
const twoSum = (nums, target) => {
    let chk = {};					// {'2':0}
    for (let i = 0; i < nums.length; i++) {	// i = 1 < 4 => T
      let num = nums[i];				// n = 7
      let diff = target - num;			// 9 - 7 => 2
      if (chk.hasOwnProperty(diff)) return [chk[diff]+1, i+1];	// chk[2] ? T => [1, 2]
      if (!chk.hasOwnProperty(num)) chk[num] = i;		// !chk[2] ? T => 0
    }
    return [];
  }
