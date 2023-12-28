const sum = (num1 : number , num2 : number) : number => {
    return num1 + num2
}

const logger = (param) : void => {
    console.log(`result => ${param}`)
}

let testFunc : (num1 : number , num2 : number) => number

testFunc = sum

// testFunc = 20

testFunc = logger

console.log(sum(12,8));

console.log(testFunc(12,8))











