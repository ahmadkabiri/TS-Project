
// as < >

// const numbers = <const>[12,13] 
// const numbers = [12,13] as const


// numbers.push(20)

// Casting in dom project

const linkElem = document.querySelector('#link') as HTMLAnchorElement
const userNameInput = document.querySelector('input') as HTMLInputElement
const passwordInput = <HTMLInputElement> document.querySelector('.password') 
// const btnElem = document.querySelector('button') as HTMLButtonElement
const btnElem = document.querySelector('button')!



// console.log(btnElem?.innerHTML)
// console.log(btnElem.innerHTML)
console.log((btnElem as HTMLButtonElement).innerHTML);





















