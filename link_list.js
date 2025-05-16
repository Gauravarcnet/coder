class Node {

    constructor(data,next) {
        this.head = data;
        this.next = next;
    }

}

class Linked_List {

    constructor() {
        this.head = null;
        this.size = 0;
    }
    // Insert
    insert(data) {
        let newNode = new Node(data, this.head);
        console.log(newNode);
        this.head = newNode;
        this.size++;
    }

    //printData
    printData(data) {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.head);
            currentNode = currentNode.next;
        }
    }
    // insertATLast
    insertAtLast(data) {
        let newNode = new Node(data, null);
        if (!this.head) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
        this.size++;
    }

    // insertAtIndex
    insertAtIndex(data, index) {
        if (index < 0 || index > this.size) {
            console.log("Invalid index");
            return;
        }
        if (index === 0) {
            this.insert(data);
        } else {
            let newNode = new Node(data, null);
            let currentNode = this.head;
            for (let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }
            newNode.next = currentNode.next;
            currentNode.next = newNode;
            this.size++;
        }
    }
    removeAtIndex(data, index) {
        if (index < 0 || index >= this.size) {
            console.log("Invalid index");
            return;
        }
        if (index === 0) {
            this.head = this.head.next;
        } else {
            let currentNode = this.head;
            for (let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }
            currentNode.next = currentNode.next.next;
        }
        this.size--;
    }
    


    
}


let nodeInstance = new Linked_List();
nodeInstance.insert(20)
nodeInstance.insert(30)
nodeInstance.insert(40)
nodeInstance.insert(50)

// nodeInstance.insert(90)
// nodeInstance.insertAtIndex(70, 1)
// nodeInstance.insertAtIndex(80, 1)
// nodeInstance.insertAtIndex(60, 3)





nodeInstance.printData()

// console.log(JSON.stringify(nodeInstance));