/*
190. Reverse Bits
Easy

2621

741

Add to List

Share
Reverse bits of a given 32 bits unsigned integer.

Note:

Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 above, the input represents the signed integer -3 and the output represents the signed integer -1073741825.


Example 1:

Input: n = 00000010100101000001111010011100
Output:    964176192 (00111001011110000010100101000000)
Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.
Example 2:

Input: n = 11111111111111111111111111111101
Output:   3221225471 (10111111111111111111111111111111)
Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.


Constraints:

The input must be a binary string of length 32


Follow up: If this function is called many times, how would you optimize it?
*/

var reverseBits = function(n) {

    //Runtime: 109 ms, faster than 35.81% of JavaScript online submissions for Reverse Bits.
    //Memory Usage: 41.2 MB, less than 5.47% of JavaScript online submissions for Reverse Bits.

        let bStr = '', bStrComp = '';
        for (let sum = n; sum > 0; sum = Math.floor( sum/2 )) {
            if (sum % 2 > 0) bStr = '1' + bStr;
            else bStr = '0' + bStr;
        }
        for (let i = 0; i < 32; i++) {
            if (!bStr[i]) bStrComp = bStrComp + '0';
            else bStrComp = bStr[i] + bStrComp;
        }
        return parseInt(bStrComp, 2);

    /*
    Runtime: 88 ms, faster than 66.87% of JavaScript online submissions for Reverse Bits.
    Memory Usage: 41 MB, less than 9.29% of JavaScript online submissions for Reverse Bits.

        let bStr = n.toString(2);
        let bStrComp = ''
        for (let i = 0; i < 32; i++) {
            let char = bStr[i];
            if (char) bStrComp = char + bStrComp;
            else bStrComp = bStrComp + '0';
        }
        // console.log(n, bStr, bStr.length, bStrComp, bStrComp.length, parseInt(bStrComp, 2))
        return parseInt(bStrComp, 2)
        */
    };
