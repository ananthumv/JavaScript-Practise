const arrayAvg = (array) => {
    var total = 0
    for (let i = 0; i < array.length-1; i++) {
        let element = array[i]
        total = total + element
    }
    // array.forEach((element) =>{
    //     total += element;
    // })

    return total / array.length
}

console.log(arrayAvg([10,10]))