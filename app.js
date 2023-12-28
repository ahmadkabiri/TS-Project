var sum = function (num1, num2) {
    return num1 + num2;
};
var logger = function (param) {
    console.log("result => ".concat(param));
};
var testFunc;
testFunc = sum;
// testFunc = 20
testFunc = logger;
console.log(sum(12, 8));
console.log(testFunc(12, 8));
