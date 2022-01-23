/* leetcode 20220122
Runtime: 125 ms, faster than 11.14% of JavaScript online submissions for Binary Tree Preorder Traversal.
Memory Usage: 38.6 MB, less than 83.34% of JavaScript online submissions for Binary Tree Preorder Traversal.

var preorderTraversal = function(root) {
    const result = [];
    function traverse(root) {
        if (!root) return result;
        result.push(root.val);
        traverse(root.left);
        traverse(root.right);
    }
    traverse(root);
    return result;
}; */

/*
Runtime: 137 ms, faster than 5.11% of JavaScript online submissions for Binary Tree Preorder Traversal.
Memory Usage: 38.5 MB, less than 89.70% of JavaScript online submissions for Binary Tree Preorder Traversal.
*/
var preorderTraversal = (root) => {
    const stack = [],
          result = [];
    while(root || stack.length) {
        if (root) {
            stack.push(root);
            result.push(root.val)
            root = root.left;
        } else {
            root = stack.pop();
            root = root.right;
        }
    }
    return result;
}
