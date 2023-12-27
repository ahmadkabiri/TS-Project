// const ADMIN = 'ADMIN'
// const USER = 'USER'
// const TEACHER = 'TEACHER'

enum Role {
    Admin = 10,
    User ,
    Teacher,

}

console.log(Role)

const user : {
    id : number ,
    name : string ,
    age : number ,
    role : Role
} = {
id : 1 ,
name : 'amin' ,
age : 22 ,
role : Role.Admin,
}

console.log(Role.Admin)
console.log(Role.User)
console.log(Role.Teacher)



if(user.role === Role.Admin) {
    console.log('شما به این صفحه دسترسی دارید')
} else {
    console.log('شما به این صفحه دسترسی ندارید');
    
}















