var num1 = 5;
var num2 = 10;
var sum = num1 + num2;
var num3 = 30;
var num4 = 125;
var sum5 = num3 + num4;
var decLiteral2 = 6;
var hexLiteral2 = 0xf00d;
var binaryLiteral2 = 10;
var octalLiteral2 = 484;
var notalLiteral2 = NaN;
var infinityNumber2 = Infinity;
var myName = '小红';
var myAge = 12;
// 造句
var sentence = "My name is ".concat(myName, ",My age is ").concat(myAge);
document.body.innerHTML = sentence;
/**number[], string[]**/
var list = [1, 2, 3, 4];
var listString = ['1', '2', '3'];
// 任何数据错误都会进行提示
/**
 * 数组
 * number[]
 * string[]
 * Array<number>
 */
var list3 = [1, 2, 3,];
list.push(6);
var listString3 = ['1', '2', '3'];
list.unshift(7);
var arrayList1 = [1, 2, 3];
var stringList = ['1', '2', '3'];
var u = undefined;
var n = null;
var obj;
obj = { name: '小红', age: 13 };
var tom = ['Tom', 25];
var tom1;
tom[0] = 'Tom';
tom[1] = 25;
tom[0].slice(1);
tom[1].toFixed(2);
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 3] = "Green";
})(Color || (Color = {}));
var cc = Color.Green;
console.log(cc);
var value1;
value1 = 123;
value1 = 'abc';
value1 = false;
var array = [1, "a", true];
function alertName() {
    console.log('My name is void');
}
function error(message) {
    throw new Error(message);
}
function fail() {
    return error('Something failed');
}
