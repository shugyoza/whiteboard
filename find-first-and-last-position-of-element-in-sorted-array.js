/* Leetcode 20220204: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/submissions/
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.



Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]


Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109
*/

/* No
var searchRange = function(nums, target) {
    let l = 0,                                                  // 0
        r = nums.length - 1,                                    // 5
        res = [];
    while (l < r) {                                            // 0 < 1 T
        let mid = Math.floor((l + r) / 2);                      // 0 + 1 / 2 = .5 => 0
        if (nums[mid] === target) {                             // 5 === 6 F
            let i = mid - 1, j = mid + 1;                       // i = undefined, j = 1;
            if (nums[i] !== target) res[0] = mid;               // 5 != 6 F
            if (nums[j] !== target) res[1] = mid;               // 7 != 6 F
            if (nums[i] === target || nums[j] === target) {     // F
                while (nums[i - 1] === target) i--;
                while (nums[j + 1] === target) j++;
                res = [i, j];
            }
        } else if (nums[mid] < target) {                        // 5 < 6 T
            l = mid + 1;                                        // l = 1
        } else r = mid - 1;
    }
    return [-1, -1];
};
*/

/* does not pass spec
const searchRange = (nums, target) => {
    let res = [nums.indexOf(target)];
    if (res[0] === - 1) return [-1, -1];
    else {
        let l = res[0],
            r = nums.length - 1,
            mid;
        while (l <= r) {
            mid = Math.floor((l + r) / 2);
            if (nums[mid] === target) {
                l = mid + 1;
            }
        }
        res[1] = mid === undefined ? res[0] : mid;
        return res;
    }
}
*/
/* Runtime: 66 ms, faster than 93.72% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.
Memory Usage: 42.2 MB, less than 13.31% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array. */

const searchRange = (nums, target) => {
    if (!nums.length || target === undefined) return [-1, -1];
    let start = 0,
        end = nums.length - 1,
        res = [];
    while (start <= end) {
        if (end - start <= 1 && nums[end] !== target && nums[start] !== target) return [-1, -1]
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) {
            res = [mid, mid];
            while(nums[res[0] - 1] === target) res[0]--;
            while(nums[res[1] + 1] === target) res[1]++;
            return res;
        } else if (nums[mid] < target) {
            start = mid + 1;
        } else end = mid - 1;
    }
    // console.log(res)
    // return res;
}

/*

          m
       s
[5, 7, 7, 8, 8, 10]     8 6   res = [3, 4]
 0  1  2  3  4  5  = 6
                e

*/
// console.log(searchRange([], ))
// console.log(searchRange([5,7,7,8,8,10], 6))
// console.log(searchRange([5,7,7,8,8,10], 8))
// console.log(searchRange([2,2], 2))
// console.log(searchRange([1,3],1))
// console.log(searchRange([2,2],1))
// console.log(searchRange([1,4],4))
// console.log(searchRange([0,0,0,1,2,3], 0))
// console.log(searchRange([1],0))
