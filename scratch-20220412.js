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
// FIND DUPLICATE CHARS AND AMT 10:18:46
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
*/
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

//  console.log(findDuplicate('abca'))

// REVERSE A STRING 06:53.16
/*'abc'
    i j
 'c'+'b'+'a' + ''
*/
function reverse(str) {
    if (typeof str !== 'string') return false;	//
    let res = '';					// res = 'cba'
    for (let i = 0; i < str.length; i++) {	// i = 3
      let c = str[i];				// c = 'c'
      res = c + res;				// 'c' + 'ba' = 'cba'
    }
    return res;
  }

  /*
   012 = 3
  'abc'
      i
  */

// let s = 'abc'
// console.log(reverse(s))
