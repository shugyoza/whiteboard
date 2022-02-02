/* Leetcode 20220201: https://leetcode.com/problems/remove-nth-node-from-end-of-list/
Given the head of a linked list, remove the nth node from the end of the list and return its head.



Example 1:


Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]


Constraints:

The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz


Follow up: Could you do this in one pass?
*/

/* does not work
var removeNthFromEnd = function(head, n) {
    if (!head) return null;
    let node = head, len = 0, toReturn;
    while (node) {      // first iteration to get the length
        node = node.next;
        len++;
    }
    len = len - n === 0 ? len : len - n;      // determine how many iteration to reach the node before the node to delete
    node = head;        // reassign node for the second iteration
    while (node.next) {      // second iteration
        if (len === 1) {// if len is 0, we are at node to delete. we want to be at the node before it
            if (!node.next.next) return node.next = null;
            else {
                node.next = node.next.next ? node.next.next : null
            }; // reassign current node's 'next' to the node after the deleted one
            return head;// return head
        }
        node = node.next;
        len--;
    }
}; */
/*
Runtime: 73 ms, faster than 86.34% of JavaScript online submissions for Remove Nth Node From End of List.
Memory Usage: 42.3 MB, less than 8.53% of JavaScript online submissions for Remove Nth Node From End of List.
*/
var removeNthFromEnd = function(head, n) {
    if (!head) return null;
    let len = 0, node = head;
    while (node) {              // first iteration to count the length
        len++;                  // every visited node, increment length
        node = node.next;       // traverse to next node;
    }
    if (len === n) {            // if length == n, for sure it's the head we want to delete
        head = head.next;       // we just need to reassign the head to the next node
        return head;            // return the new head;
    }
    len = len - n;              // else we want to know how many times we need to traverse;
    node = head;                // reassign the node to traverse
    while (node) {              // second traversal
        if (len === 1) {        // if the len is 1, we are at the node before the one to delete
            if (!node.next.next) {
                node.next = null;  // if there's no node after the one to delete, set current's next point to null
            }
            else node.next = node.next.next; // else, set current's next to point the node after the one to delete.
            return head;        // return head of ll
        }
        node = node.next;       // else when len is > 1, just traverse fwd
        len--;                  // and decrement the len
    }
}
*/
/* does not work
var removeNthFromEnd = function(head, n) {
    if (!head) return null;
    let node = head, len = 0, toReturn;
    while (node) {      // first iteration to get the length
        node = node.next;
        len++;
    }
    len = len - n === 0 ? len : len - n;      // determine how many iteration to reach the node before the node to delete
    node = head;        // reassign node for the second iteration
    while (node.next) {      // second iteration
        if (len === 1) {// if len is 0, we are at node to delete. we want to be at the node before it
            if (!node.next.next) return node.next = null;
            else {
                node.next = node.next.next ? node.next.next : null
            }; // reassign current node's 'next' to the node after the deleted one
            return head;// return head
        }
        node = node.next;
        len--;
    }
}; */
/*
Runtime: 73 ms, faster than 86.34% of JavaScript online submissions for Remove Nth Node From End of List.
Memory Usage: 42.3 MB, less than 8.53% of JavaScript online submissions for Remove Nth Node From End of List.
*/
var removeNthFromEnd = function(head, n) {
    if (!head) return null;
    let len = 0, node = head;
    while (node) {              // first iteration to count the length
        len++;                  // every visited node, increment length
        node = node.next;       // traverse to next node;
    }
    if (len === n) {            // if length == n, for sure it's the head we want to delete
        head = head.next;       // we just need to reassign the head to the next node
        return head;            // return the new head;
    }
    len = len - n;              // else we want to know how many times we need to traverse;
    node = head;                // reassign the node to traverse
    while (node) {              // second traversal
        if (len === 1) {        // if the len is 1, we are at the node before the one to delete
            if (!node.next.next) {
                node.next = null;  // if there's no node after the one to delete, set current's next point to null
            }
            else node.next = node.next.next; // else, set current's next to point the node after the one to delete.
            return head;        // return head of ll
        }
        node = node.next;       // else when len is > 1, just traverse fwd
        len--;                  // and decrement the len
    }
}
