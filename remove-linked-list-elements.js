/*
203. Remove Linked List Elements
Easy

4315

154

Add to List

Share
Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.



Example 1:


Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]
Example 2:

Input: head = [], val = 1
Output: []
Example 3:

Input: head = [7,7,7,7], val = 7
Output: []


Constraints:

The number of nodes in the list is in the range [0, 104].
1 <= Node.val <= 50
0 <= val <= 50
*/
var removeElements = function(head, val) {
    if (!head) return null;					// F
    let toDelete;
    while (head.val == val) {				// 1 = 6 F
        toDelete = head;
        if (!head.next) return head = null;
        else head = head.next;
        toDelete.next = null;
    }
    let currentNode = head;				// cur = 5
    while (currentNode.next) {				// next ? 6 => T
        if (currentNode.next.val == val) {		// 6 = 6 ? T
            if (!currentNode.next.next) currentNode.next = null;
            else currentNode.next = currentNode.next.next;	// 6 => undefined
        }
        else currentNode = currentNode.next;		// cur = 5
    }
    return head
};
