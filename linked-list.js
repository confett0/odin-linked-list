class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    append(value) {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        lastNode.next = new Node(value);
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    size() {
        let node = this.head;
        let counter = 0;
        while(node) {
            counter++;
            node = node.next;
        }
        return counter;
    }

    head() {
        return this.head;
    }

    tail() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

let node1 = new Node(2)
let node2 = new Node(5)
node1.next = node2

let list = new LinkedList(node1);

console.log(list);