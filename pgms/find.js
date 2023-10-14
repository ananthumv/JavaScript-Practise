const find = (arr,arr2) =>{
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]===arr2[0]&&arr[i+1]===arr2[1]&&arr[i+2]===arr2[2]){
            return i
        }
    }
    return -1
}

console.log(find([1,2,3,4,5,6,7],[1,3,2]))
console.log(find([1,2,3,4,5,6,7],[4,5,6]))