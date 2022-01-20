const linkedList = {
    val: 5,
    next: {
        val: 3,
        next: {
            val: 10,
            next: null,
        }
    }
};

const arr = [];
let currentNode = linkedList;

while (currentNode !== null) {
    arr.push(currentNode.val) // TODO, e.g. push val to arr;
    currentNode = currentNode.next;
}
console.log(arr);
