str = ""
const patternRTriangle = (len) => {
    for (let i = 1; i <=len; i++) {
        for (let j = 0; j < len-i; j++) {
            str += " "           
        } 
        for (let k = 0; k < i; k++) {
            str += "*"
            
        }
        str += "\n"      
    }
}

patternRTriangle(5)
console.log(str)