str = ""
const patternHolPyramid = (len) =>{
    for (let i = 1; i <= len; i++) {
        for (let j = 1; j <= len-i; j++) {
            str += " "
        }for (let k = 0; k < 2*i-1; k++) {
            if(i===1||i===len){
                str += "*"
            }else if(k===0||k===(2*i-2)){
                str += "*"
            } else str += " "
        }str += "\n"
    }
}

patternHolPyramid(5)
console.log(str)