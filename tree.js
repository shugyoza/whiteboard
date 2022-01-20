class Node {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    };
    create(val) {
        const newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let currentNode = this.root;

        const addSide = (side) => {
            if (!currentNode[side]) {
                currentNode[side] = newNode;
                return this;
            }
            currentNode = currentNode[side];
        }

        while (true) {
            if (val === currentNode.val) return this;
            if (val < currentNode.val) addSide('left');
            else addSide('right');
        }
    }
}

const tree = new BST();
tree.create(20);
tree.create(14);
tree.create(57);
tree.create(9);
tree.create(19);
tree.create(31);
tree.create(62);
tree.create(3);
tree.create(11);
tree.create(72);

console.log(tree);
