class Queue{
    constructor(){
        this.items = []
        this.front = 0
        this.rear = 0
    }

    enQueue(item){
        this.items[this.rear] = item
        this.rear++
    }
    deQueue(){
        if(this.isEmpty() == true){
            return "Queue is empty"
        }else{
            const item = this.items[this.front] 
            delete this.items[this.front] 
            this.items.shift()
            this.rear--
            return item
        }
    }

    peek() {
        if(this.isEmpty() == true){
            return "Queue is empty"
        }
        return this.items[this.front]
    }

    isEmpty() {
        return this.items.length ===0
    }

}


let myQueue = new Queue

myQueue.enQueue(9) 
myQueue.enQueue(8)
myQueue.enQueue(7)
myQueue.enQueue(6)
myQueue.enQueue(3) 
myQueue.enQueue(5)
console.log(myQueue)
console.log(myQueue.deQueue()) 
console.log(myQueue)
console.log(myQueue.deQueue()) 
console.log(myQueue)
console.log(myQueue.deQueue()) 
console.log(myQueue)
console.log(myQueue.deQueue()) 
console.log(myQueue)
console.log(myQueue.deQueue()) 
console.log(myQueue)
console.log(myQueue.deQueue()) 
console.log(myQueue)
console.log(myQueue.deQueue()) 
console.log(myQueue)



console.log(myQueue.peek())
console.log(myQueue.isEmpty())
