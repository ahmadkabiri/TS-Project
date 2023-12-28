var item1 = 12;
var item2 = 13;
var item3 = 14;
item1 = true;
item2 = true;
// const sum = (num1:ejma,num2:number | string) : number | string => {
var sum = function (num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else {
        return num1.toString() + num2.toString();
    }
};
