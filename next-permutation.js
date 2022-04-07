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

const permute = (nums) => {
    const result = [],
          q = [ [[], [...nums]] ];
    while (q.length) {
        let [ currentSequence, availableNumbers ] = q.shift();
        if (!availableNumbers.length) {
            result.push(currentSequence);
            continue;
        }
        for (let i = 0; i < availableNumbers.length; i++) {
            let n = availableNumbers[i];
            q.push([ [...currentSequence, n], availableNumbers.slice(0, i).concat(availableNumbers.slice(i + 1)) ])
        }
    }
    return result;
}








/////
* Complete the 'checkDivisibility' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY arr as parameter.
 */
/*
I: array of Int
O: array of str 'YES' or 'NO'
C: 'YES' if there's any divisible by 8. No if there's none.
*/
// helper 1 turn a num into an array of sequence int
function nToArr(num) {
    const result = [];
    let i = num;
    let mult = 10;
    while (i > 0) {
        // grab the last digit
        let n = i % mult;
        // decrement, reassign new value into i
        i = Math.floor(i / mult);
        // put into array with .push O(1)
        result.push(n);
    }
    return result.reverse(); // O(N) still faster than .unshift for every iteration
}

// helper 2 get all the permutation and evaluate against mod
function permuteAndMod(nums, mod = 8) {
    // define the result array;
    const result = [];
    // create a 'node'
    let q = [ [ [], [...nums] ]];
    // while q still has length
    while (q.length) {
        // take out the 'node'
        let [ currentSequence, availableNumbers ] = q.shift();
        // if all the available numbers have been used
        if (!availableNumbers.length) {
            // convert it into an integer by .join and subtract with zero
            let n = currentSequence.join('') - 0;
            // check if % mod === true, if yes, return 'YES'
            if (n % mod === 0) return 'YES';
            // continue with next iteration
            continue;
        }
        // if there is still slots to fill
        for (let i = 0; i < availableNumbers.length; i++) {
            let n = availableNumbers[i];
            // push into the q, array with added int, and array of reduced available numbers choice.
            q.push([ [...currentSequence, n], availableNumbers.slice(0, i).concat(availableNumbers.slice(i + 1)) ])
        }
    }
    // if nothing % mod returns true, then everything is false
    return 'NO';
}

function checkDivisibility(arr, mod = 8) {
    if (!Array.isArray(arr) || !arr.length) return false
    // Write your code here
    // define result var
    const result = []
    // start loop through the arr
    for (let i = 0; i < arr.length; i++) {
        let n = arr[i];
        // if n % mod === 0
        if (n % mod === 0) {
            // just push 'YES' into result array
            result.push('YES');
            // and go with next iteration, no need to permute anymore
            continue;
        } 
        else {
            if (n < mod) result.push('NO');
            else {
                // convert the num into an arr, sequence of int
                let arrN = nToArr(n);
                // let arrN = ('' + n).split(''); // does not affect performance than callback
                // invoke helper and push it into result
                result.push(permuteAndMod(arrN))
            }
        } 
    }
    // console.log(arr)
    // return the array of result
    return result;
}


/*
Enter your query here.
Please append a semicolon ";" at the end of the query
*/
SELECT STUDENT_NAME, MAJOR_NAME FROM STUDENTS JOIN REGISTER ON REGISTER.STUDENT_ID = STUDENTS.STUDENT_ID JOIN MAJORS ON REGISTER.MAJOR_ID = MAJORS.MAJOR_ID LIMIT 20;