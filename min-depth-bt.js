/*
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

/////////
Runtime: 248 ms, faster than 67.41% of JavaScript online submissions for Minimum Depth of Binary Tree.
Memory Usage: 76.9 MB, less than 56.33% of JavaScript online submissions for Minimum Depth of Binary Tree.

var minDepth = function(root) {
    if (!root) return 0;
    const q = [root];
    let h = 0;
    while (q.length) {
        const len = q.length;
        for (let i = 0; i < len; i++) {
            let node = q.shift();
            if (!node.left && !node.right) return h + 1;
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
        h++;
    }
    return h;
};
*/

/*
Runtime: 318 ms, faster than 43.86% of JavaScript online submissions for Minimum Depth of Binary Tree.
Memory Usage: 103.6 MB, less than 18.48% of JavaScript online submissions for Minimum Depth of Binary Tree.
*/
var minDepth = function(root) {
    if (!root) return 0;
    if (!root.left) return minDepth(root.right) + 1;
    if (!root.right) return minDepth(root.left) + 1;
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
}
