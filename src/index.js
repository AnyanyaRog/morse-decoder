
function decode(expr) {
    // write your solution here
   let result = ""
   let tmp = expr.trim()
  let stk = ""
  for(let i = 0; i < tmp.length; i++){
    let s = tmp[i]
    stk += s
    switch(stk){   
      case "**********":
        result += " "
        stk = ""
        break;
      case "0000000010":
        result += "e"
        stk = ""
        break;
      case "0000000011":
        result += "t"
        stk = ""
        break;
      case "0000001010":
        result += "i"
        stk = ""
        break;
      case "0000101010":
        result += "s"
        stk = ""
        break;
      case "0010101010":
        result += "h"
        stk = ""
        break;
      case "0010101011":
        result += "v"
        stk = ""
        break;
      case "0000101011":
        result += "u"
        stk = ""
        break;
      case "0010101110":
        result += "f"
        stk = ""
        break;
      case "0000001011":
        result += "a"
        stk = ""
        break;
      case "0000101110":
        result += "r"
        stk = ""
        break;
      case "0010111010":
        result += "l"
        stk = ""
        break;
      case "0000101111":
        result += "w"
        stk = ""
        break;
      case "0010111110":
        result += "p"
        stk = ""
        break;
      case "0010111111":
        result += "j"
        stk = ""
        break;
      case "0000001110":
        result += "n"
        stk = ""
        break;
      case "0000111010":
        result += "d"
        stk = ""
        break;
      case "0011101010":
        result += "b"
        stk = ""
        break;
      case "0011101011":
        result += "x"
        stk = ""
        break;
      case "0000111011":
        result += "k"
        stk = ""
        break;
      case "0011101110":
        result += "c"
        stk = ""
        break;
      case "0011101111":
        result += "y"
        stk = ""
        break;
      case "0000001111":
        result += "m"
        stk = ""
        break;
      case "0000111110":
        result += "g"
        stk = ""
        break;
      case "0011111010":
        result += "z"
        stk = ""
        break;
      case "0011111011":
        result += "q"
        stk = ""
        break;
      case "-.-.-- ":
        result += "!"
        stk = ""
        break;
      case ".-.-.- ":
        result += "."
        stk = ""
        break;
      case "0000111111":
        result += "o"
        stk = ""
        break;
      case "1011111111":
        result += "1"
        stk = ""
        break;
      case "1010111111":
        result += "2"
        stk = ""
        break;
      case "1010101111":
        result += "3"
        stk = ""
        break;
      case "1010101011":
        result += "4"
        stk = ""
        break;
        case "1010101010":
            result += "5"
            stk = ""
            break;
      case "1110101010":
        result += "6"
        stk = ""
        break;
      case "1111101010":
        result += "7"
        stk = ""
        break;
      case "1111111010":
        result += "8"
        stk = ""
        break;
      case "1111111110":
        result += "9"
        stk = ""
        break;
      case "1111111111":
        result += "0"
        stk = ""
        break;

    }
  }
  return result
}


module.exports = {
    decode
}