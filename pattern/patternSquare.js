let string = ""
const patternSquare = (len) =>{
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            string += "*"  
        }
        string += "\n"
    }
}
patternSquare(5)
console.log(string)


