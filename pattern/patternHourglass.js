str = ""
const patternHourglass = (len) =>{
    for (let i = 0; i <=len-1; i++) {
        for (let j = 0; j < i+1; j++) {
            str += " "
        }for (let k = 0; k < 2*(len-i)-1; k++) {
            str += "*"
        }str += "\n"
    }
    for (let i = 2; i <=len; i++) {
        for (let j = 0; j <= len-i; j++) {
            str += " "
        }for (let k = 0; k < 2*i-1; k++) {
            str += "*"
        }str += "\n"
    }
}

patternHourglass(5)
console.log(str)