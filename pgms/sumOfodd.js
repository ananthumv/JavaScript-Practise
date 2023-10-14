const sumOfodd = (array) => {
    // for (let i = 0; i < array.length; i++) {
    //     let element = array[i]
    //     if(element%2 != 0){
    //         total += element
    //     }
    // }
    let oddNum = array.filter(value => value % 2 != 0)
    let total = 0
        for (let i = 0; i < oddNum.length; i++) {
            let value = oddNum[i]
            total += value
        }
        return total
    
//     const sum = (oddNum) =>{
//         let total = 0
//         for (let i = 0; i < oddNum.length; i++) {
//             let value = oddNum[i]
//             total += value
//         }
//         return total
//    }
//    return
}
console.log(sumOfodd([3,10]))
console.log(sumOfodd([3,10,3]))

