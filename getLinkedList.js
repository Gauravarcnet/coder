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
    unshift(data){
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
    clear(){
        this.head = null
        this.length = 0
    }
    shift(){

        if(!this.head){
            return
        }

        const oldHead = this.head
        this.head = this.head.next
        this.length--
        return oldHead
    }
    pop(){

        if(!this.head){
            return
        }
        if(this.length === 1){
            return this.shift
        }

        const last = this.getLast()
        let current = this.head

        while(current.next !== last){
            current = current.next
        }

        current.next = null
        this.length--
        return last
    }

    get(index){

        if(index >= this.length || index < 0){
            return null
        }

        let counter = 0
        let current = this.head

        while(counter<index){
            current = current.next
            counter++
        }

        return current
    }

    
}

const Link = new LinkedList()
Link.unshift(5)
Link.unshift(6)
console.log(Link.get(1));
