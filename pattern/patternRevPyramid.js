
str = ""
const patternRevPyramid = (len) =>{
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < i; j++) {
            str += " "
        }for (let k = 0; k < 2*(len-i)-1; k++) {
            str += "*"
        }str += "\n"
    }
}

patternRevPyramid(5)
console.log(str)