// const ADMIN = 'ADMIN'
// const USER = 'USER'
// const TEACHER = 'TEACHER'
var Role;
(function (Role) {
    Role[Role["Admin"] = 10] = "Admin";
    Role[Role["User"] = 11] = "User";
    Role[Role["Teacher"] = 12] = "Teacher";
})(Role || (Role = {}));
console.log(Role);
var user = {
    id: 1,
    name: 'amin',
    age: 22,
    role: Role.Admin,
};
console.log(Role.Admin);
console.log(Role.User);
console.log(Role.Teacher);
if (user.role === Role.Admin) {
    console.log('شما به این صفحه دسترسی دارید');
}
else {
    console.log('شما به این صفحه دسترسی ندارید');
}
