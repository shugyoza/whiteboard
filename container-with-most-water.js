/* Leetcode 20220129: https://leetcode.com/problems/container-with-most-water/
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.



Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1


Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104
*/
/*
Runtime: 120 ms, faster than 44.44% of JavaScript online submissions for Container With Most Water.
Memory Usage: 49.4 MB, less than 5.02% of JavaScript online submissions for Container With Most Water.
*/
const maxArea = (height) => {
    let left = 0, right = height.length - 1, max = 0;
    while (left < right) {
        let top = Math.min(height[left], height[right]),
            vol = top * (right - left);
        max = Math.max(max, vol);
        if (height[left] <= top) left++;
        else if (height[right] <= top) right--;
    }
    return max;
}
/* NO
const maxArea = (height) => {
    let chk = {}, max = 0, vol = 0;
    for (let i = 0; i < height.length; i++) {
        let left = height[i];
        for (let j = i + 1; j < height.length; j++) {
            let right = height[j],
                top = Math.min(left, right);
            if (chk.hasOwnProperty(top)) {
                max = Math.max(max, chk[top] + top);
                continue;
            }
            else if (!chk.hasOwnProperty(top)) {
                vol = top * (j - i);
                max = Math.max(max, vol);
                chk[top] = vol;
            }
        }
    }
    return max;
} */

/*
var maxArea = function(height) {
    let max = 0;                                    // 16
    for (let i = 0; i < height.length; i++) {
        let left = height[i];                       // 5
        for (let j = i+1; j < height.length; j++) {
            let right = height[j],                  // 4
                top = Math.min(left, right);        // 4
            max = Math.max(max, top * (j - i));     // 16, 4 * (5-1)
        }
    }
    return max;
}; */

/*

           j
         i
 0 1 2 3 4 5 = 6
[1,8,6,2,5,4]
*/
