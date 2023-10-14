const bubbleSort = (array) =>{
    for (let i = 0; i < (array.length-1); i++) {
        for (let j = 0; j < array.length-i-1; j++) {
            if (array[j]>array[j+1]) {
                let c = array[j]
                array[j] = array[j+1]
                array[j+1] = c
            }
        }
    } 
    return array
}
let start = performance.now()
console.log(bubbleSort([22,2,3,12,18,3,1,23]))
let end = performance.now()

console.log(end-start)