string = ""
const patternHollow = (len) =>{
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (i === 0 || i===len-1) {
        string +="*"
      } else if (j===0 || j === len-1) {
        string += "*"
      } else string += " "   
    }  string += "\n"  
  }
}

patternHollow(5)

console.log(string)