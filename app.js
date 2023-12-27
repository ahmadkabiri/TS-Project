// const assertion (const cast)
// reasign and mutate
// let num : 12 = 12 
var num = 12;
num = 12;
var numbers = [12, 13];
numbers = [12, 13];
// numbers = [14, 15] 
// numbers.push(20)
console.log(numbers);
var user = {
    id: 1,
    name: 'Amin'
};
console.log(user);
// user.name = 'ali'
console.log(user);
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum.apply(void 0, numbers));
var favorites = ['js', "study"];
var users = [
    { id: 1, name: 'Amin', favorites: favorites }
];
users[0].favorites.push('coding');
console.log(users);
// Example 3 
var actions = [
    { type: 'ADD_TODO' },
    { type: "REOMVE_TODO" }
];
for (var _i = 0, actions_1 = actions; _i < actions_1.length; _i++) {
    var action = actions_1[_i];
    if (action.type === 'CREATED') {
        console.log('created');
    }
    else {
        console.log('Removed');
    }
}
