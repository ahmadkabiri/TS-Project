// Template Literal Type


let num1 = 12 
let num2 = 13

let sum = `Sum : ${num1 + num2}`


console.log(sum)

function setCssProperty(param : `${number}px` | `${number}em` | `${number}rem`) {
    return param
}
console.log(setCssProperty(`0rem`))




