/* 20220412
function nthMax(arr, target) {
    if (target < 1 || target >= arr.length) return null;
    let sorted = arr.sort((a, b) => b - a);
    let ct = 0;
    for (let i = 0; i < sorted.length; i++) {
      let n = sorted[i];
      if (n === sorted[i+1]) i++;
      else {
        ct += 1;
        if (ct === target) return n;
      }
    }
    return null;
  }

let a = [1,2,3,2,5,6,7];
let target = 7;
console.log(nthMax(a, target))
*/

// FIND DUPLICATE CHARS AND AMT . 20220412. 10:18:46
/*
{'a':2, 'b':1, 'c': 1}
{'a'
 0123 = 4
'abca'
    i
Plan
- define result obj, empty;
- iterate through all chars in the str
- check if the char is a key in resObj;
  - if not, create one with val 1;
  - else increment val += 1;
- iterate through all key in resObj
  - check if val = 1 => delete that key
- return resObj;

function findDuplicate(str) {
    if (typeof str !== 'string') return false;
    let res = {};					// {'a':2}
    for (let i = 0; i < str.length; i++) {	// i = 4 < 4
      let c = str[i];				// c = 'a'
      if (res[c]) res[c] += 1;			// F
      else res[c] = 1;				// T
    }
    for (let key in res) {
      if (res[key] === 1) delete res[key]
    }
    return res;
  };
*/
//  console.log(findDuplicate('abca'))



////////////////////////////////////////
// REVERSE A STRING 20220412. 06:53.16
/*'abc'
    i j
 'c'+'b'+'a' + ''
*/ /*
function reverse(str) {
    if (typeof str !== 'string') return false;	//
    let res = '';					// res = 'cba'
    for (let i = 0; i < str.length; i++) {	// i = 3
      let c = str[i];				// c = 'c'
      res = c + res;				// 'c' + 'ba' = 'cba'
    }
    return res;
  }
*/

  /*
   012 = 3
  'abc'
      i
  */


// 20220413-1. 04:52:59
// function reverse(str) {
//     if (typeof str !== 'string') return false;
//     let res = '';					// res = 'cba'
//     for (let i = str.length - 1; i >= 0; i--) {	// i = 0 >= 0 T
//       let c = str[i];				// c = 'a'
//       res = res + c;
//     }
//     return res;
//   }
  /*

   0
   012 = 3
  'abc'
  */

// let s = 'abc'
// console.log(reverse(s))

// 20220414. 11:00.42
// Move negatives to the front of list
// function moveNeg(nums) {
//     let len = nums.length;
//     for (let i = 0; i < len; i++) {
//         let n = nums[i];
//         if (n > 0) {
//             let spliced = nums.splice(i, 1)[0];
//             nums.push(spliced);
//             i--;
//             len--;
//         }
//     }
//     return nums;
// }

// let nums = [1,4,3,-2,-1,1,5,3,-2,1,6,-1,4];
// console.log(moveNeg(nums))

class Name {
    constructor(x, y) {
        thix.x = x;
        this.y = y;
    }
}
