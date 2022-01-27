/* Leetcode 20220127: https://leetcode.com/problems/binary-tree-paths/
Given the root of a binary tree, return all root-to-leaf paths in any order.

A leaf is a node with no children.



Example 1:


Input: root = [1,2,3,null,5]
Output: ["1->2->5","1->3"]
Example 2:

Input: root = [1]
Output: ["1"]


Constraints:

The number of nodes in the tree is in the range [1, 100].
-100 <= Node.val <= 100
*/

/*
Runtime: 64 ms, faster than 99.36% of JavaScript online submissions for Binary Tree Paths.
Memory Usage: 43.9 MB, less than 5.03% of JavaScript online submissions for Binary Tree Paths.
*/
var binaryTreePaths = (root) => {
    let res = [];
    let paths = ['' + root.val];
    let q = [root];
    while (q.length) {
        let len = q.length;
        for (let i = 0; i < len; i++) {
            let node = q.shift(),
                path = paths.shift();
            if (!node.left && !node.right) {
                res.push(path)
            }
            if (node.left) {
                paths.push(path + '->' + node.left.val);
                q.push(node.left);
            }
            if (node.right) {
                paths.push(path + '->' + node.right.val);
                q.push(node.right);
            }
        }
    }
    return res;
}

/* does not work
var binaryTreePaths = function(root, current = '', res = []) {
    if (!root) return res;
    if (!root.left && !root.right) {
        if (!current.length) {
            current = current + root.val;
            res.push(current);
            return res;
        } else {
            current = current + '->' + root.val;
            res.push(current);
            return res;
        }
    }
    if (!root.left && root.right) {
        if (current.length) {
            current = current + '->' + root.val;
            return binaryTreePaths(root.right, current, res);
        } else {
            current = current + root.val;
            return binaryTreePaths(root.right, current, res);
        }
    }
    if (!root.right && root.left) {
        if (current.length) {
            current = current + '->' + root.val;
            return binaryTreePaths(root.left, current, res);
        }
        current = current + root.val;
        return binaryTreePaths(root.left, current, res);
    }
   binaryTreePaths(root.left, '' + root.val, res);
   binaryTreePaths(root.right, '' + root.val, res);
    return res;
};
*/

/* Does not work
var binaryTreePaths = (root, s = '', res = []) => {
    if (!root) return res;
    if (!root.left && !root.right) {
        s = s + root.val;
        res.push(s);
        return res;
    }
    if (root.left) {
        s = s + '->' + root.val;
        binaryTreePaths(root.left, s, res);
    }
    if (root.right) {
        s = s + '->' + root.val
        binaryTreePaths(root.right, s, res);
    }
    return binaryTreePaths(root);
} */
