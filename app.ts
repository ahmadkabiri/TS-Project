// const assertion (const cast)

// reasign and mutate

// let num : 12 = 12 

let num = 12 as const

num = 12

let numbers = [12,13] as const ;


numbers = [12,13]

// numbers = [14, 15] 

// numbers.push(20)

console.log(numbers)

const user = {
    id : 1 ,
    name : 'Amin'
} as const

console.log(user)

// user.name = 'ali'

console.log(user)

function sum (num1:number , num2 : number) : number {
    return num1 + num2
}

console.log(sum(...numbers));

const favorites = ['js',"study"] as const


const users = [
    {id : 1 , name : 'Amin' , favorites}
] as const

users[0].favorites.push('coding')

console.log(users)


// Example 3 


let actions = [
    {type : 'ADD_TODO'},
    {type : "REOMVE_TODO"}
] as const

for (const action of actions) {
    if(action.type ==='CREATED') {
        console.log('created')
    } else {
        console.log('Removed');
        
    }
}



























