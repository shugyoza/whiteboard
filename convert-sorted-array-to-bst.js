function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/*
Runtime: 151 ms, faster than 13.28% of JavaScript online submissions for Convert Sorted Array to Binary Search Tree.
Memory Usage: 41.6 MB, less than 19.96% of JavaScript online submissions for Convert Sorted Array to Binary Search Tree.
*/
var sortedArrayToBST = function(nums, start = 0, end = nums.length-1) {                 // [-10,-3,0,5,9]
    function constructBST(start, end) {
        if (start > end) return null;
        if (start == end) return new TreeNode(nums[start]);
        const mid = start + Math.floor((end - start) / 2);
        const root = new TreeNode(nums[mid]);
        root.left = constructBST(start, mid-1);
        root.right = constructBST(mid+1, end);
        return root;
    }
    return constructBST(0, nums.length-1)
};

/*
Runtime: 116 ms, faster than 37.78% of JavaScript online submissions for Convert Sorted Array to Binary Search Tree.
Memory Usage: 41.5 MB, less than 42.88% of JavaScript online submissions for Convert Sorted Array to Binary Search Tree.

var sortedArrayToBST = (nums) => {
    if (!nums.length) return null;
    let mid = Math.floor(nums.length / 2);
    let root = new TreeNode(nums[mid]);
    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid+1));
    return root;
};
*/

/* does not work
function sortedArrayToBST(nums) {
    let bt = { val: null, left: null, right: null },
        node = bt,
        minI = 0;                                       // -10
        maxI = nums.length - 1;                         // 9
    while (nums.length) {                               // 5                                    2 => T
        let midI = Math.floor((minI + maxI) / 2);       // 0 + 4 / 2 = 2                        0+2/2=0
                                                        // nums[2] = 0                          nums[0]=-10
        node.val = nums[midI];                          // {val: 0, left: { val: -10, left: null, right: null} , right: null}
        node.left = null;
        node.right = null;
        let lNums = nums.slice(0, midI);                // [-10, -3]
        let rNums = nums.slice(midI);                   // [5, 9]
        if (lNums.length) {                             // 2 => T
            nums = lNums;                               // [-10, -3]
            node = node.left;                           // null
            continue;                                   // next iteration
        }
        if (rNums) {
            nums = rNums;
            node = node.right;
            continue;
        }
    }
}
*/

let bst = {
    val: 0,
    left:   { val: -3,
            left: { val: -10, left: null,right: null },
            right: null },
    right:  { val: 9,
            left: { val: 5, left: null, right: null },
            right: null }
}
//               x x   x
//            0  1 2 3 4 = 5
let nums = [-10,-3,0,5,9];
console.log(sortedArrayToBST(nums))

// node.left = { val: nums[midI - 1], left: null, right: null };   // { val: 0, left: {val:-3, left: null, right: null }, right: null }}
// node.right = { val: nums[maxI], left: null, right: null };      // { val: 0, left: {val:-3, left: null, right: null }, right: {val: 9, left: null, right: null} } }
