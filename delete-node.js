/* Leetcode 20220127 : https://leetcode.com/problems/delete-node-in-a-linked-list/
Write a function to delete a node in a singly-linked list. You will not be given access to the head of the list, instead you will be given access to the node to be deleted directly.

It is guaranteed that the node to be deleted is not a tail node in the list.



Example 1:


Input: head = [4,5,1,9], node = 5
Output: [4,1,9]
Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.
Example 2:


Input: head = [4,5,1,9], node = 1
Output: [4,5,9]
Explanation: You are given the third node with value 1, the linked list should become 4 -> 5 -> 9 after calling your function.


Constraints:

The number of the nodes in the given list is in the range [2, 1000].
-1000 <= Node.val <= 1000
The value of each node in the list is unique.
The node to be deleted is in the list and is not a tail node
*/

/* 19:45 time: O(N), space O(1)
Runtime: 102 ms, faster than 39.34% of JavaScript online submissions for Delete Node in a Linked List.
Memory Usage: 45 MB, less than 5.63% of JavaScript online submissions for Delete Node in a Linked List.

var deleteNode = function(node) {
    while (node.next) {
        if (!node.next.next) {
            node.val = node.next.val;
            node.next = null;
            return;
        }
        node.val = node.next.val;
        node = node.next;
    }
}; */

/*
Runtime: 68 ms, faster than 99.56% of JavaScript online submissions for Delete Node in a Linked List.
Memory Usage: 44.6 MB, less than 5.63% of JavaScript online submissions for Delete Node in a Linked List.
*/
var deleteNode = (node) => {
    if (!node.next.next) {
        node.val = node.next.val;
        node.next = null;
        return;
    }
    node.val = node.next.val;
    return deleteNode(node.next);
}
