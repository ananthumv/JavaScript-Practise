str = ""
const patternHollow = (len) =>{
    for (let i = 1; i <= len; i++) {
        for (let j = 1; j <= len-i; j++) {
            str += " "
        }for (let k = 0; k < 2*i-1; k++) {
            str += "*"
            
        }
        str += "\n"
    }
}

patternHollow(5)
console.log(str)