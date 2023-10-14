str = ""
const patternHollowTri = (len) =>{
    for (let i = 0; i <=len; i++) {
        for (let j = 0; j <= i; j++) {
            if (i===len) {
                str += "*"
            }else if (j===0||j===i) {
                str += "*"
            }else str += " "
        }str += "\n"
    }
}

patternHollowTri(5)
console.log(str)