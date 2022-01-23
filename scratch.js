
/*
var merge = function(nums1, m, nums2, n) {
    if (m === 0) m += 1;
    let k = m + n - 1;           // k = 0
    let i = m - 1;                      // i = 0
    let j = n - 1;       // j = 0
    while (nums2.length >= 0) {          // 1 > 0 => T
        if (nums2[j] > nums1[i]) {     // -1 >= 0 => F
            nums1[k] = nums2[j];        // 1
            if (j - 1 > -1) j--;
            // console.log([15, nums1, nums1[i], nums2, nums2.length, nums2[j], k])
        }
        else {
            nums1[k] = nums1[i]         // 3
            nums1[i] = 0;
            if (i - 1 > -1) i--;
            // console.log([22, nums1, nums1[i], nums2, nums2.length, nums2[j], k])
        }
        k--;
    }
    console.log(nums1)
    return nums1;
};
*/

/*
var merge = function (nums1, m, nums2, n) {
    var insertPos = m + n - 1;
    m--; n--;
    while (n >= 0) {
        nums1[insertPos--] = (nums1[m] > nums2[n]) ? nums1[m--] : nums2[n--];
    }
    return nums1
};
*/
// console.log(0 > -1)

//           k
//           i
//           0 1 2 3 4 5 6 7 8 = 9
//  nums1 = [0,0,0,1,1,1,2,3,3]
let nums1 = [0,0,3,0,0,0,0,0,0] // [4,5,6,0,0,0]// [0] // [1,2,3,0,0,0];
let m = 3; // 3; // 0 // 6;
//            j
//            0 1 2 3 4 5 = 6
//          [-1]1,1,1,2,3
let nums2 = [-1,1,1,1,2,3] // [1,2,3]; // [1] // [2,5,6];
let n = 6; // 3; // 1

// console.log(merge(nums1, m, nums2, n))
//           i
//           k
//           0 1 2 3 4 5 = 6
//  nums1 = [1,2,3,4,5,6]
//               j
//           0 1 2 = 3
//  nums2 = []1,2,3


// console.log([-10,-3,0,5,9].slice(3))
let a = {val: '3', left: null, right: null};
let b = a// {val: '3', left: null, right: null};
console.log(a == b)
