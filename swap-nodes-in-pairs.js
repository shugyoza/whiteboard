/* Leetcode 24. 20220203: https://leetcode.com/problems/swap-nodes-in-pairs/
Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)



Example 1:


Input: head = [1,2,3,4]
Output: [2,1,4,3]
Example 2:

Input: head = []
Output: []
Example 3:

Input: head = [1]
Output: [1]


Constraints:

The number of nodes in the list is in the range [0, 100].
0 <= Node.val <= 100
*/
/* Runtime: 95 ms, faster than 42.12% of JavaScript online submissions for Swap Nodes in Pairs.
Memory Usage: 42.4 MB, less than 5.52% of JavaScript online submissions for Swap Nodes in Pairs. */

var swapPairs = function(head) {
    if (!head) return null;
    if (!head.next) return head;
    let prev = head, node = prev.next, next = node.next;
    while (node || next) {
        node.next = prev;
        if (next) {
            if (!next.next) prev.next = next;
            else if (next.next) prev.next = next.next;
        } else if (!next) prev.next = null;
        if (prev === head) {
            head = node;
        };
        node = prev.next ? prev.next : next;
        prev = next;
        next = node ? node.next : null;
    }
    return head;
};

/* Runtime: 56 ms, faster than 99.83% of JavaScript online submissions for Swap Nodes in Pairs.
Memory Usage: 42.5 MB, less than 5.52% of JavaScript online submissions for Swap Nodes in Pairs.
const swapPairs = (head) => {
    // If there's no head, it's null, return head is the same with return null;
    // If there's head.next, we must return the head anyway;
    if (!head || !head.next) return head;
    let next = head.next; // save head.next in a variable
    let nextNext = head.next.next; // save head.next.next in a variable for subsequent invocation
    next.next = head;   //change the next node pointer to point to this node
    head.next = swapPairs(nextNext); // change this node's pointer to whatever the result of subsequent call
    return next;        // return next, because next would be the new head off this switching process
} */
