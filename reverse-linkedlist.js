// Leetcode 20220124

// var reverseList = function(head) {
//     let [prev, current] = [null, head]
//     while(current) {
//         [current.next, prev, current] = [prev, current, current.next]
//     }
//     return prev
// }

/*
Runtime: 108 ms, faster than 34.11% of JavaScript online submissions for Reverse Linked List.
Memory Usage: 40 MB, less than 95.00% of JavaScript online submissions for Reverse Linked List.
*/
/*
function reverseList(head) {
    if (!head) return null;
    let prev = null,
        current = head;
    while (current) {
        let next = current.next;    // save next for traverse
        current.next = prev;        // change current's pointer from next to previous
        prev = current;             // previous traverse to current
        current = next;             // current traverse to 'current.next'
    }
    return prev;
}
*/

// 01/25/2022 08:06	Accepted	134 ms	40.9 MB	javascript
function reverseList(head, prev = null) {
    if (!head) return prev; // if there's no head, return previous node, else
    let next = head.next    // save head.next for next recursion
    head.next = prev;       // change the head's pointer to point previous
    return reverseList(next, head) // repeat process
}

/* does not work
function reverseList(head, prev = null, next = null) {
    if (!head) return null;
    next = head.next;
    head.next = prev;
    prev = head;
    return reverseList(next, prev, head.next)
} */
