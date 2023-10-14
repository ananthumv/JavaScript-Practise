const  bubbleSortDesending = (arr) =>{
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 0; j < (arr.length-i-1); j++) {
            if (arr[j]<arr[j+1]) {
                let c = arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=c
            }            
        }
    }
    return arr
}

console.log(bubbleSortDesending([22,2,3,12,18,3,1,23]))