class Stack{
    constructor(){
        this.items = []
        this.top = -1
    }

    push(item){
        this.items.push(item)
        this.top++
    }

    pop(){
        if(this.items.length === 0)
        return "underFlow"
        this.top--
        return this.items.pop()
        
    }

    peek() { 
        if(this.items.length === 0)
        return "underFlow"
        let item = this.items[this.top] 
        return item
    } 

    isEmpty() {    
        return this.items.length === 0
    } 
}



let myStack = new Stack()

// console.log(myStack.isEmpty())
// myStack.push(1)
// myStack.push(2) 
// myStack.push(3) 

// console.log(myStack)
// console.log(myStack.peek()) 

// myStack.pop()
// console.log("printing stack after pop")
// console.log(myStack)
myStack.push(9) 
myStack.push(8)
myStack.push(7)
myStack.push(6)
myStack.push(3) 
myStack.push(5)
console.log(myStack)
console.log(myStack.pop()) 
console.log(myStack)
console.log(myStack.pop()) 
console.log(myStack)
console.log(myStack.pop()) 
console.log(myStack)
console.log(myStack.pop()) 
console.log(myStack)
console.log(myStack.pop()) 
console.log(myStack)
console.log(myStack.pop()) 
console.log(myStack)
console.log(myStack.pop()) 
console.log(myStack)



console.log(myStack.peek())
console.log(myStack.isEmpty())