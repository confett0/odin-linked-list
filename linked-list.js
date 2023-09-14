class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }

        let currentNode = this.head;
        if (currentNode) {
            while (currentNode.next) {
                currentNode = currentNode.next
            }
        }
        currentNode.next = newNode;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    size() {
        let currentNode = this.head;
        let counter = 0;
        while(currentNode) {
            counter++;
            currentNode = currentNode.next;
        }
        return counter;
    }

    getHead() {
        return this.head;
    }

    tail() {
        let currentNode = this.head;
            while (currentNode && currentNode.next) {
                currentNode = currentNode.next
            }
        return currentNode;
    }

    at(index) {
        if (index < 0) return null;
        let currentNode = this.head;
        let count = 0;

        while(currentNode) {
            if (count === index) {
                return currentNode;
            }
            count++;
            currentNode = currentNode.next;
        }
        return null;
    }

    pop() {
        if (!this.head) return 'This list is empty';
        if (!this.head.next) {
            this.head = null;
            return;
        }

        let currentNode = this.head;
        let prevNode = null;
        if (currentNode) {
            while (currentNode.next) {
                prevNode = node;
                currentNode = currentNode.next
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
        if (index < 0 || index > this.size()) {
            return 'Please insert a valid index number';
        }

        if (index === 0) {
            this.prepend(value);
            return;
        }

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
        if (index < 0 || index >= this.size()) {
            return 'Please insert a valid index number';
        }

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

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