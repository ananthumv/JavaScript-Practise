str = ""
const patternDiamond = (len) =>{
    for (let i = 1; i <= len; i++) {
        for (let j = 1; j <= len-i; j++) {
            str += " "
        }for (let k = 0; k < 2*i-1; k++) {
            str += "*"
        }str += "\n"
    }
    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++) {
            str += " "
        }for (let k = 0; k < 2*(len-i)-1; k++) {
            str += "*"
        }str += "\n"
    }
}

patternDiamond(5)
console.log(str)