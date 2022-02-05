/* Leetcode 20220205: https://leetcode.com/problems/next-permutation/submissions/
A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

For example, for arr = [1,2,3], the following are considered permutations of arr: [1,2,3], [1,3,2], [3,1,2], [2,3,1].
The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

For example, the next permutation of arr = [1,2,3] is [1,3,2].
Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
Given an array of integers nums, find the next permutation of nums.

The replacement must be in place and use only constant extra memory.



Example 1:

Input: nums = [1,2,3]
Output: [1,3,2]
Example 2:

Input: nums = [3,2,1]
Output: [1,2,3]
Example 3:

Input: nums = [1,1,5]
Output: [1,5,1]


Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 100
*/

/* does not work
var nextPermutation = function(nums) {
    let i = nums[nums.length - 1],
        pivot = i - 1;
    while (nums[i] < nums[pivot]) {
        i--;
    }
    console.log(11, i, pivot, nums)
    let j = i;
    while (nums[j] > nums[j++]) {
        j++;
    }
    console.log(16, j, nums)
    let tmp = nums[pivot];
    nums[pivot] = nums[j];
    nums[j] = tmp;
    console.log(20, nums)
    while (nums[i] > nums[i + 1]) {
        tmp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = tmp;
        i++
    }
    console.log(nums)
}; */

/* Two days to finally be able to solve this.
So, basically what we need to do is to keep iterating backwards from the end
of array while the numbers are still in order. Stop iterating where the order
broke. Then we exchange that number (where the order broke) with the immediate
greater number we found between the end of array and the idx where that number is.
Afterwards we reverse the order (from the previous order. If previous order it was
ascending, then now we make it descending, and vice versa).

Otherwise, if we keep iterating backwards until idx 0, that means there is not a
lexicographical value greater than the current, we then just reverse the order of
the whole numbers in the array.

Runtime: 87 ms, faster than 66.31% of JavaScript online submissions for Next Permutation.
Memory Usage: 42.6 MB, less than 19.10% of JavaScript online submissions for Next Permutation.
*/
const nextPermutation = (nums) => {
    let x, y, tmp, max, a, b;                   // define variables we're going to use
    let i = nums.length - 1;                    // define the variable for traversing the array
    while (i >= 0 && nums[i] <= nums[i-1]) {    // while i has not been at the beginning of array
        i--;                                    //   and while the order has not been broken, keep
    };                                          //   iterating backwards
    max = nums[i];                              // exit loop, we're at spot where max. num is. This num should be at the end of result arr
    x = i - 1;                                  // the idx before max. num is where we should switch the num with a slight greater num
    if (x === -1) {                             // however, if that idx is -1, means there's no lexicographically greater than current arr
        for (let i = 0, j = nums.length - 1; i < j; i++, j--) { // as such, we just need to iterate the whole arr
            let a = nums[i], b = nums[j];       // storing values temporarily in variable
            nums[i] = b;                        // to switch between an idx and the counterpart idx, to reverse the whole arr
            nums[j] = a;
        }
        return nums;                            // return the reversed nums after we exit the loop
    }                                           // else, if there's a lexicographical greater 'number' than the current formation
    tmp = nums[x];                              // store in a variable, the num that we need to replace with a slight greater num
    i = nums.length - 1;                        // reset the variable for another traverse to find our replacement num (the slight greater one)
    while (nums[i] <= nums[x] ) {               // if it is still less than or equal to the num we're going to replace,
        i--;                                    //   keep iterate backwards
    }                                           // as we exit the loop, we're at the idx of our replacement num
    y = i;                                      // store the idx in a temp variable
    nums[x] = nums[y];                          // do the switch
    nums[y] = tmp;
                                                // then we are going to reverse the order or arr elements start from the replaced idx
    i = nums.length - 1;                        // reset our i variable for another arr traversal from the end of arr
    x = x + 1;                                  // set our x variable for arr traversal from the idx after the replaced num
    while (x < i) {                             // while both traversing variable is iterating to meet at the 'center'
        let a = nums[x],                        // store each's value in a temp variable
            b = nums[i];
        nums[x] = b;                            // then do the switch using value reassignment
        nums[i] = a;
        x++;                                    // after each switch, iterate for the next one
        i--
    }
    return nums                                 // as we exit the loop, the order should have been replaced and everything done
}

// nextPermutation([3,2,1])
// nextPermutation([1,1,5])
// nextPermutation([1,5,1])
// nextPermutation([1,3,2])
//                    p i
// nextPermutation([1,3,7,4,2]) // 1 4 2 3 7
//                        ^ j
//               0 1 2 3 4 5 6 = 7
// nextPermutation([0,1,2,5,3,3,0]) // 0 1 3 0 2 3 5
//               0 1 3 0 2 3 5
//                       i x
