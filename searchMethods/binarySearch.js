const arr = []
for(i=0; i<1000000; i++){
    arr.push(i)
}

const binarySearch = (arr, key) => {
    let start = 0;
    let end = arr.length - 1

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)

        if (arr[mid] === key) {
            return mid;
        } else if (arr[mid] < key) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
    return -1
}



let start = performance.now()
console.log(binarySearch(arr,65742))
let end = performance.now()

console.log(end-start)