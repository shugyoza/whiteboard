
function xclTitleToNum(str) {
    let mult = 1, sum = 0;
    let char, num;
    for (let i = str.length - 1; i >= 0; i--) {
        char = str[i].toUpperCase(); // ensure char is uppercased to uniformized
        num = char.charCodeAt(0) - 64; // ascii code for 'A' is 65. -1 is to represent index-th
        sum += num * mult; // sum = sum + (num * mult)
        mult *= 26 // afore-char change every square-times of the char, e.g.: cs[i-1] = cs[i]^2
    }
    // console.log([sum, num, sum - num, mult, char]);
    return sum;
}
// console.log('A'.charCodeAt(0))
xclTitleToNum('Z')      // 26
xclTitleToNum('AY')     // 51
xclTitleToNum('AZ')     // 52
xclTitleToNum('CB')     // 80
xclTitleToNum('YZ')     // 676
xclTitleToNum('ZZ')     // 702
xclTitleToNum('AAC')    // 705

function numToXclTitle(colNum) {
    let sum = colNum, base = 26, mult, arr = [], s = '';
    for (let i = 1; i < sum; i *= base) {
        arr.push(i)
    }
    arr[0] = sum % base;
    for (let j = 0; j < arr.length; j++) {
        mult = arr[j];
        let n = (sum % base) * mult;
        let ascii = n + 64;
        s = String.fromCharCode(ascii) + s;
        sum = sum - mult;
    }
    console.log([arr, s])
    return s;
}


numToXclTitle(26)
numToXclTitle(51)
numToXclTitle(52)
numToXclTitle(80)
numToXclTitle(676)
numToXclTitle(702)
numToXclTitle(705)

/*
function numToXclTitle(colNum) {
    let sum = colNum,                           // 705
        ct = 0,                                 // 0
        base = 26,                              // 26
        str = '',                               // ''
        c,
        num = sum % base;
    while (sum >= 0) {                          // 702 > 0 T
        if (num % base === 0) {                 // 702 % 26 = 0 => T
            num = 26;                           // num = 26
            sum -= 1;                           // sum =
        }
        c = String.fromCharCode(num + 64);      // 3 + 64 = 67 => 'C'
        str = c + str;                          // C'
        sum = sum - (num * Math.pow(base, ct)); // = 705 - (3 * Math.pow(26, 0))
        c++;                                    // = 705 - (3 * 1) = 702
        base = Math.pow(base, ct)               // 26,1 = 26
    }                                           //
    // console.log(colNum - (26 + 64)) // + 64
    return (str);
}
*/
