var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var users = ['ali', 'ahmad', 'babak'];
users.push('mohammad');
var randoms = [];
randoms.push(12);
randoms.push(false);
console.log(users);
console.log(randoms);
console.log(__spreadArray(__spreadArray([], users, true), randoms, true));
for (var index in users) {
    console.log(users[index]);
    // users[index].map()
}
var roles = [
    [1, 'admin', false],
    [2, 'user']
];
console.log(roles);
// export {}
