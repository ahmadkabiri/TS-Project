 let users:string[] = ['ali','ahmad','babak' ]

 users.push('mohammad')

 let randoms:(number|boolean)[] = []

 randoms.push(12)
 randoms.push(false)

console.log(users)
console.log(randoms)
console.log([...users,...randoms])

for(let index in users) {
    console.log(users[index])
    // users[index].map()
}
let roles:(string|number|boolean)[][] = [
    [1,'admin',false],
    [2,'user']
]

console.log(roles)
// export {}