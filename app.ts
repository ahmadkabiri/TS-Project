
type combine = number | string // Alias Type

type BoolOrNum = boolean | number

let item1 : combine | BoolOrNum = 12 ;
let item2 : combine | boolean = 13 ;
let item3 : combine = 14 ;
type fakeText = 'math'|'string'

item1 = true

item2 = true
 type ejma = number | string

// const sum = (num1:ejma,num2:number | string) : number | string => {
const sum = (num1:ejma,num2:ejma) : ejma => {

    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 + num2
    } else {
        return num1.toString() + num2.toString()
    }
}


