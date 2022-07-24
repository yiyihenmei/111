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
// 1.用两种方式创建boolean类型的数组
var flag1 = [true, true, false];
console.log(flag1);
var flag2 = [true, false];
console.log(flag2);
// 2.(1)工厂模式创建对象(new object())
function gc(name, age) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.sayname = function () {
        console.log(this.name);
    };
    return o;
}
var gc1 = gc('cuiyutong', 19);
console.log(gc1);
// (2)构造函数创建对象
function cy(name, age) {
    this.name = name;
    this.age = age;
    this.sayname = function () {
        console.log(this.name);
    };
}
var gz1 = new cy('cc', 21);
console.log(gz1);
// 3.将对象造个句子
var obj2;
obj2 = { name: '鸣人', age: 17 };
var arr2 = "my name is  ".concat(obj2.name, " age is ").concat(obj2.age);
console.log(arr2);
document.write(arr2);
// 4.找一个数组中的修改原数组的方式，找一下数组中哪些方式可以使用，哪些不能使用
push();
尾添加;
unshift();
头添加;
splice();
替换截取;
pop();
尾删除;
shift();
头删除(1);
匿名函数: 定义时候咩有任何变量引用的函数(2);
回调函数: 一个函数作为对象交给其他函数使用(3);
递归函数: 循环调用函数本身(4);
构造函数: 构造函数习惯上首字母大写;
用来新建实例对象;
