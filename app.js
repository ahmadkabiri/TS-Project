"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
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
