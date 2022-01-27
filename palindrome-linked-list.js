/* Leetcode 20220126: https://leetcode.com/problems/palindrome-linked-list/
Given the head of a singly linked list, return true if it is a palindrome.



Example 1:


Input: head = [1,2,2,1]
Output: true
Example 2:


Input: head = [1,2]
Output: false


Constraints:

The number of nodes in the list is in the range [1, 105].
0 <= Node.val <= 9


Follow up: Could you do it in O(n) time and O(1) space?
*/

/*
Runtime: 188 ms, faster than 74.75% of JavaScript online submissions for Palindrome Linked List.
Memory Usage: 65.8 MB, less than 74.64% of JavaScript online submissions for Palindrome Linked List.
*/
const isPalindrome = (head) => {
    if (!head) return false;
    if (head && !head.next) return true;
    const ar = [];
    while (head) {
        ar.push(head.val);
        head = head.next;
    }
    for (let i = 0, j = ar.length - 1; i < ar.length; i++, j--) {
        if (ar[i] !== ar[j]) return false;
    }
    return true;
}

/* does not work
const isPalindrome = (head) => {
    if (!head) return null;
    if (head && !head.next) return true;
    const stack = [];
    while (head) {
        if (head.val === stack[stack.length-1]) stack.pop();
        else if (!stack.length) stack.push(head.val);
        else if (head.val !== stack[stack.length - 1]) {
            if (head.val === stack[stack.length - 2]) {
                stack.pop();
                stack.pop()
            } else stack.push(head.val);
        }
        head = head.next;
    }
    return stack.length === 0;
}
*/

/* does not work
const isPalindrome = (head) => {
    if (!head) return null;
    if (head && !head.next) return true;
    const stk = {}; let ct = i = 0;
    while (head) {
        if (head.val === stk[i-1]) {
            delete stk[i-1];
            i--;
            ct++;
            head = head.next;
            continue;
        } else if (head.val != stk[i-1]) {
            if (head.val === stk[i-2]) {
                delete stk[i-2];
                i -= 2;
            } else {
                stk[i] = head.val;
                i++;
            }
	    head = head.next;
        }
    ct++;
    }
    let mid = Math.floor(ct / 2),
        chk = Object.entries(stk);
    console.log(chk, ct, mid)
    if (ct % 2 === 0 && chk.length === 0) return true;
    else if (ct % 2 === 1 && chk.length === 1 && mid == chk[0][0]) return true;
    else return false;
}
*/

const isPalindrome = (head) => {
    if (!head) return null;
    if (head && !head.next) return true;
    const stk = {}, ct = i = 0;
    while (head) {
        if (head.val === stk[i-1]) {
            delete stk[i-1];
            i--;
            ct++;
            head = head.next;
            continue;
        } else if (head.val != stk[i-1]) {
            if (head.val === stk[i-2]) {
                delete stk[i-2];
                i -= 2;
            } else {
		stk[i] = head.val;
                i++;
            }
	    head = head.next;
        }
    ct++;
    }
    let mid = Math.floor(stk.length / 2);
    let len = 0;
    for (let key in stk) {
        if (ct % 2 === 0 && stk.hasOwnProperty(key)) return false;
        else if (ct % 2 > 0 && stk.hasOwnProperty(key)) {
            len += 1;
            if (len > 1) return false;
            if (len === 1 && stk.hasOwnProperty(mid)) return true;
        }
    }
    return true;
}
/*

		  len = 3	       len = 6, mid = 3
		  i = 0                i = 1
[1,2,3] false     {1:0		       {1:4,1:1
      h                   h		            h
1-2-3 		    1-0-1		1-3-3-4-1-1
*/

/*
use a stack [];
while iterating, always check el vs stack[length-1];
if not the same, push;
if the same, pop
runtime o(n), space o(n);
*/
/* works on 1-0-1, but not 1-3-4-4-1
const isPalindrome = (head) => {
    if (!head) return null;
    if (head && !head.next) return true;
    const stack = [];
    while (head) {
        if (head.val === stack[stack.length-1]) stack.pop();
        else if (!stack.length) stack.push(head.val);
        else if (head.val !== stack[stack.length - 1]) {
            if (head.val === stack[stack.length - 2]) {
                stack.pop();
                stack.pop()
            } else stack.push(head.val);
        }
        head = head.next;
    }
    return stack.length === 0;
}

*/
