
//enqueue O (N) linear and dequeue O(N)
class Queue{
    constructor(data){
        this.data = []

    }
    enqueue(data){
        this.data.shift(data)
    }
    dequeue(){
        return this.data.pop()
        
    }
}