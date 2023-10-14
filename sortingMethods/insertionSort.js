const insertionSort = (arr) =>{
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]
        j = i - 1
        while (j >= 0 && arr[j]>key) {
            arr[j+1] = arr[j]
			j = j - 1
        }
        arr[j + 1] = key
    }
    return arr
}

let start = performance.now()
console.log(insertionSort([22,2,3,12,18,3,1,23]))
let end = performance.now()

console.log(end-start)