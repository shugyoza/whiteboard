/* Leetcode 20220126: https://leetcode.com/problems/invert-binary-tree/
Given the root of a binary tree, invert the tree, and return its root.



Example 1:


Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]
Example 2:


Input: root = [2,1,3]
Output: [2,3,1]
Example 3:

Input: root = []
Output: []


Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
*/
/*
Runtime: 80 ms, faster than 56.34% of JavaScript online submissions for Invert Binary Tree.
Memory Usage: 40 MB, less than 51.77% of JavaScript online submissions for Invert Binary Tree.

var invertTree = function(root) {
    if (!root) return null;
    let left = invertTree(root.left)
    let right = invertTree(root.right)
    root.left = right;
    root.right = left;
    return root
};
*/

/*
Runtime: 80 ms, faster than 56.34% of JavaScript online submissions for Invert Binary Tree.
Memory Usage: 39.8 MB, less than 75.18% of JavaScript online submissions for Invert Binary Tree.
*/
const invertTree = (root) => {
    if (!root) return null;             // if there's no root return null
    let q = [root];                     // define a q and push root into q
    while (q.length) {                  // while there's still nodes in q
        const len = q.length;           // define the length to push to q, length represent amount of nodes in a layer
        for (let i = 0; i < len; i++) { // we're going to push all the children nodes on the next layer
            let node = q.shift();       // define the (parent) node
            let left = node.left;       // save the left node to exchange with the right
            let right = node.right;     // save the right node to exchange with the left
            node.right = left;          // exchange right node with left node
            node.left = right;          // exchange left node with right node
            if (node.left) q.push(node.left);   // if there's left child node, push to q
            if (node.right) q.push(node.right); // if there's right child node, push to q
        }
    }
    return root;                        // return the root
}
