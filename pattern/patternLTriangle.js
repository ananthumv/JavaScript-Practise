str = ""
const patternLTriangle = (len) =>{
    for (let i = 0; i <= len; i++) {
        for (let j = 0; j < i; j++) {   
            str += "*" 
        } str += "\n" 
        // for (let k = 0; k < i+1; k++) {
        //     str += "*" 
        // }str += "\n" 
    }
}

patternLTriangle(5)
console.log(str)