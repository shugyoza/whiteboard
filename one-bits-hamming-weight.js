/* Leetcode 20220124
191. Number of 1 Bits
Easy

2419

741

Add to List

Share
Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

Note:

Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3, the input represents the signed integer. -3.


Example 1:

Input: n = 00000000000000000000000000001011
Output: 3
Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
Example 2:

Input: n = 00000000000000000000000010000000
Output: 1
Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.
Example 3:

Input: n = 11111111111111111111111111111101
Output: 31
Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.


Constraints:

The input must be a binary string of length 32.


Follow up: If this function is called many times, how would you optimize it?
*/

/*
Runtime: 107 ms, faster than 35.75% of JavaScript online submissions for Number of 1 Bits.
Memory Usage: 39.8 MB, less than 91.34% of JavaScript online submissions for Number of 1 Bits.
*/
var hammingWeight = function(n) {
    // convert n into a binary str
    // add 0 to convert binary str in 32 bits
    // iterate through the completed str and count the ones

    // refactor: iterate as if we're converting a dec into binary str manually,
    // but instead of adding the chars into binary str, we just add the '1's to a counter while doing it
    // return the counter at the end
    let sum = n,
        count = 0;                                // 3
    for (let n = sum; sum > 0; sum = Math.floor(sum/2)) {   // 0 > 0 F
        if (sum % 2 > 0) count += 1;                        // 1 % 2 = 1 > 0 T
    }
    return count;
};

/*
Runtime: 171 ms, faster than 5.06% of JavaScript online submissions for Number of 1 Bits.
Memory Usage: 40.5 MB, less than 22.50% of JavaScript online submissions for Number of 1 Bits.

const hammingWeight = (n) => {
    let bStr = n.toString(2),
        count = 0;
    for (let i = bStr.length - 1; i >= 0; i--) {
        if (bStr[i] == '1') count += 1;
    }
    return count;
}
*/
