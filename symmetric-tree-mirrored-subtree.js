/*
Runtime: 127 ms, faster than 28.14% of JavaScript online submissions for Symmetric Tree.
Memory Usage: 41.1 MB, less than 38.76% of JavaScript online submissions for Symmetric Tree.

var isMirrorTree = (p, q) => {
    if (!p && !q) return true;
    if (!p || !q || p.val !== q.val) return false;
    return isMirrorTree(p.left, q.right) && isSameTree(p.right, q.left);
}
*/
/*
Runtime: 128 ms, faster than 27.37% of JavaScript online submissions for Symmetric Tree.
Memory Usage: 40.3 MB, less than 96.23% of JavaScript online submissions for Symmetric Tree.

const isMirrorTree = (a, b) => {
    const qA = [a],
          qB = [b];
    while (qA.length && qB.length) {
        const currentA = qA.shift(),
              currentB = qB.shift();
        if (currentA === null || currentB === null) {
            if (currentA !== currentB) return false;
            else continue;
        }
        if (currentA.val !== currentB.val) return false;
        qA.push(currentA.left, currentA.right);
        qB.push(currentB.right, currentB.left);
    }
if (qA.length || qB.length) return false;
return true;
}
*/
/*
Runtime: 76 ms, faster than 95.81% of JavaScript online submissions for Symmetric Tree.
Memory Usage: 41.2 MB, less than 26.98% of JavaScript online submissions for Symmetric Tree.
*/
const isMirrorTree = (a, b) => {
    const stackA = [],
        stackB = [];
    while (a || b || stackA.length || stackB.length) {
        while (a) {
            stackA.push(a);
            a = a.left;
        }
        while (b) {
            stackB.push(b);
            b = b.right;
        }
        a = stackA.pop();
        b = stackB.pop();
        if (!a && !b) continue;
        if (!a || !b || a.val !== b.val) return false;
        stackA.push(null);
        stackB.push(null);
        a = a.right;
        b = b.left;
    }
    return true;
}

var isSymmetric = function(root) {
    return isMirrorTree(root.left, root.right);
};
