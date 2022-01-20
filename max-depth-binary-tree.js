/*
Runtime: 136 ms, faster than 14.24% of JavaScript online submissions for Maximum Depth of Binary Tree.
Memory Usage: 42.1 MB, less than 15.72% of JavaScript online submissions for Maximum Depth of Binary Tree.

var maxDepth = function(root, result = 0) {
    if (!root) return result;
    result += 1;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
*/

/*
Runtime: 139 ms, faster than 12.26% of JavaScript online submissions for Maximum Depth of Binary Tree.
Memory Usage: 41.5 MB, less than 86.91% of JavaScript online submissions for Maximum Depth of Binary Tree.

var maxDepth = function(root) {
    if (!root) return 0;                         // if there's no root, return 0
    const q = [root];                            // define q with root node inside;
    let depth = 0;                               // define depth as 0;
    while (q.length) {                           // while q still has length;
        depth++;                                 // for sure there's a node (root) so increment depth
        const len = q.length;                    // capture the current length. needed to identify each layer
        for (let i = 0; i < len; i++) {          // use a loop to add more child nodes. for every root, there's always max. 2 childs;
            if (q[i].left) q.push(q[i].left);    // push if there's any;
            if (q[i].right) q.push(q[i].right);  // push if there's any
        }
        q.splice(0, len);                        // here where len shines. we trash the root as we've increment the depth. it no longer has any use.
    }
    return depth;                                // at the end of looping thru while loops, return the depth
}
*/

var maxDepth = function(root) {
    if (!root) return 0;
    const stk = [];
    let depth = 0;
    while (root || stk.length) {
        depth++;
        const len = stk.length * 2;
        for (let i = 0; i < len; i++) {
            if (stk[i].left) stk.push(stk[i].left);
            if (stk[i].right) stk.push(stk[i].right);
        }
    }
}
