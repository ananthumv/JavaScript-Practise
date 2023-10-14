const insertionAtMiddle = (arr, item) => {
    let mid = arr.length/2
    // for (let i = arr.length-1; i <= mid; i--) {
    //     arr[arr.length] = arr[arr.length-1] 
    // }
    let length = arr.length
    for(i = arr.length-1; i >= mid; i--){
        arr[length] = arr[i]
    }
    arr[mid] = item
    return arr
}



let start = performance.now()
console.log(insertionAtMiddle([22,2,3,12,18,3,1,23],20))
let end = performance.now()

console.log(end-start)