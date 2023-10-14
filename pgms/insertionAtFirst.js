const insertionAtFirst = (arr, item) => {
    let length = arr.length
    for (let i = length-1; i >= 0; i--) {
        arr[length] = arr[length-1] 
    }
    arr[0] = item
    return arr
}

console.log(insertionAtFirst([22,2,3,12,18,3,1,23],20))
console.log(insertionAtFirst([22,2,3,12,18,3,1,23],67))
