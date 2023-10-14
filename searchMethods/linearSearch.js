function linearSearch(arr, key){
     for(let i = 0; i < arr.length; i++){
        if(arr[i] === key){
            return i
        }
    }
    return -1
}

const array = []
for(i=0; i<1000000; i++){
    array.push(i)
}
let start = performance.now()
console.log(linearSearch(array,10000000))
let end = performance.now()

console.log(end-start)