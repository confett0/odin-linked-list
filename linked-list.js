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

    at(index) {
        let currentNode = this.head;
        let count = 0;

        while(currentNode) {
            if (count === index) {
                return currentNode;
            }
            count++;
            currentNode = currentNode.next;
        }
        return -1;
    }

    pop() {
        let node = this.head;
        let prevNode = null;
        if (node) {
            while (node.next) {
                prevNode = node;
                node = node.next
            }
        }

        prevNode.next = null;
    }

    contains(value) {
        let currentNode = this.head;

        while(currentNode) {
            if (currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }

    find(value) {
        let currentNode = this.head;
        let index = 0;

        while(currentNode) {
            if (currentNode.value === value) {
                return index;
            }
            currentNode = currentNode.next;
            index++;
        }
        return null;
    }

    toString() {
        let string = "";
        let currentNode = this.head;

        while (currentNode) {
        string += `( ${currentNode.value} ) -> `;
        currentNode = currentNode.next;
        }
        string += "null";
        return string;
    }

    insertAt(value, index) {
        let currentNode = this.head;
        let count = 0;

        while (currentNode) {
            if (count === index - 1) {
                const newNode = new Node(value);
                newNode.next = currentNode.next;
                currentNode.next = newNode;
            }
            count++;
            currentNode = currentNode.next;
        }
    }

    removeNodeAt(index) {
        let currentNode = this.head;
        let count = 0;

        while (currentNode) {
            if (count === index - 1) {
                currentNode.next = currentNode.next.next;
            }
            count++;
            currentNode = currentNode.next;
        }
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
let node3 = new Node(8)
node1.next = node2
node2.next = node3

let list = new LinkedList(node1);

console.log(list);