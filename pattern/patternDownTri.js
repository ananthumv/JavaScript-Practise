str = ""
const patternDownTri = (len) =>{
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len-i; j++) {
            str += "*"
        }str +="\n"
    }
}

patternDownTri(5)
console.log(str)