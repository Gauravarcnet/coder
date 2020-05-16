class Node{
    constructor(data,next){
        this.data = data
        this.next = next
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.length = 0
    }
    add(data){
        const newHead = new Node(data, this.head)
        this.length++
        this.head = newHead
    }
    getFirst(){
        return this.head
    }   

    getLast(){
        let currentNode = this.head
        while(currentNode && currentNode.next){
            currentNode = currentNode.next
        }
        return currentNode
    }

    
}

const Link = new LinkedList()
Link.add(5)
Link.add(6)
console.log(Link.getLast());
