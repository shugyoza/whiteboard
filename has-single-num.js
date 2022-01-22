/* Leetcode 20220122
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.



Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1


Constraints:

1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.

////////

01/22/2022 13:49	Accepted	193 ms	43.3 MB	javascript
01/22/2022 13:48	Accepted	135 ms	44.1 MB	javascript
01/22/2022 13:47	Accepted	156 ms	44.2 MB	javascript
01/22/2022 13:47	Runtime Error	N/A	N/A	javascript
01/22/2022 13:47	Accepted	84 ms	44 MB	javascript
01/22/2022 13:27	Wrong Answer	N/A	N/A	javascript
*/
var singleNumber = (nums) => {
    let chk = {};				// {'1':1}
    for (let i = 0; i < nums.length; i++) {	// 3 < 3 F
        let num = nums[i];			// 1
        if (chk.hasOwnProperty(num)) {// (chk[num]) {// (chk.hasOwnProperty(num)) {		// F
            delete chk[num];
        } else { // if (!chk[num]) {// (!chk.hasOwnProperty(num)) {	// T
            chk[num] = 1;			//
        }
    }
    return Object.keys(chk)[0];
    // for (let num in chk) {			// '1'
    //     if (num) return num - 0;		// '1' - 0 = 1
    // }
}
