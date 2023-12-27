var sum = function (num1, num2) {
    return num1 + num2;
};
var logger = function (param) {
    console.log('Result => ', param);
};
console.log(logger(logger('hiiiiiii')));
var logger2 = function (param) {
    console.log('Result => ', param);
    return undefined;
};
console.log(logger('hiiiii'));
