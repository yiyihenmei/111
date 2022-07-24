let num1 = 5
let num2 = 10
let sum = num1 + num2
let num3 = 30
let num4 = 125
let sum5 = num3 + num4

let decLiteral2: number = 6
let hexLiteral2: number = 0xf00d
let binaryLiteral2: number = 0b1010
let octalLiteral2: number = 0o744
let notalLiteral2: number = NaN
let infinityNumber2: number = Infinity

let myName: string = '小红'
let myAge: number = 12
// 造句
let sentence = `My name is ${myName},My age is ${myAge}`
document.body.innerHTML = sentence

/**number[], string[]**/
let list: number[] = [1, 2, 3, 4]
let listString: string[] = ['1', '2', '3']
// 任何数据错误都会进行提示


/**
 * 数组
 * number[]
 * string[]
 * Array<number>
 */

let list3: number[] = [1, 2, 3,]
list.push(6)
let listString3: string[] = ['1', '2', '3']
list.unshift(7)
let arrayList1: Array<number> = [1, 2, 3]
let stringList: Array<string> = ['1', '2', '3']

let u: undefined = undefined;
let n: null = null;


let obj: { name: string, age: Number }
obj = { name: '小红', age: 13 }
let tom: [string, number] = ['Tom', 25]
let tom1: [string, number]
tom[0] = 'Tom'
tom[1] = 25
tom[0].slice(1)
tom[1].toFixed(2)
enum Color {
    Red = 1,
    Green = 3,
}
let cc: Color = Color.Green
console.log(cc);
let value1: any
value1= 123;
value1= 'abc';
value1= false;
const array: any[] = [1, "a", true]
function alertName(): void {
    console.log('My name is void');

}
function error(message: string): never {
    throw new Error(message)
}
function fail() {
    return error('Something failed')
}


let num1 = 5
let num2 = 10
let sum = num1 + num2
let num3 = 30
let num4 = 125
let sum5 = num3 + num4

let decLiteral2: number = 6
let hexLiteral2: number = 0xf00d
let binaryLiteral2: number = 0b1010
let octalLiteral2: number = 0o744
let notalLiteral2: number = NaN
let infinityNumber2: number = Infinity

let myName: string = '小红'
let myAge: number = 12
// 造句
let sentence = `My name is ${myName},My age is ${myAge}`
document.body.innerHTML = sentence

/**number[], string[]**/
let list: number[] = [1, 2, 3, 4]
let listString: string[] = ['1', '2', '3']
// 任何数据错误都会进行提示


/**
 * 数组
 * number[]
 * string[]
 * Array<number>
 */

let list3: number[] = [1, 2, 3,]
list.push(6)
let listString3: string[] = ['1', '2', '3']
list.unshift(7)
let arrayList1: Array<number> = [1, 2, 3]
let stringList: Array<string> = ['1', '2', '3']

let u: undefined = undefined;
let n: null = null;


let obj: { name: string, age: Number }
obj = { name: '小红', age: 13 }
let tom: [string, number] = ['Tom', 25]
let tom1: [string, number]
tom[0] = 'Tom'
tom[1] = 25
tom[0].slice(1)
tom[1].toFixed(2)
enum Color {
    Red = 1,
    Green = 3,
}
let cc: Color = Color.Green
console.log(cc);
let value1: any
value1 = 123;
value1 = 'abc';
value1 = false;
const array: any[] = [1, "a", true]
function alertName(): void {
    console.log('My name is void');

}
function error(message: string): never {
    throw new Error(message)
}
function fail() {
    return error('Something failed')
}



let num1 = 5
let num2 = 10
let sum = num1 + num2
let num3 = 30
let num4 = 125
let sum5 = num3 + num4

let decLiteral2: number = 6
let hexLiteral2: number = 0xf00d
let binaryLiteral2: number = 0b1010
let octalLiteral2: number = 0o744
let notalLiteral2: number = NaN
let infinityNumber2: number = Infinity

let myName: string = '小红'
let myAge: number = 12
// 造句
let sentence = `My name is ${myName},My age is ${myAge}`
document.body.innerHTML = sentence

/**number[], string[]**/
let list: number[] = [1, 2, 3, 4]
let listString: string[] = ['1', '2', '3']
// 任何数据错误都会进行提示


/**
 * 数组
 * number[]
 * string[]
 * Array<number>
 */

let list3: number[] = [1, 2, 3,]
list.push(6)
let listString3: string[] = ['1', '2', '3']
list.unshift(7)
let arrayList1: Array<number> = [1, 2, 3]
let stringList: Array<string> = ['1', '2', '3']

let u: undefined = undefined;
let n: null = null;


let obj: { name: string, age: Number }
obj = { name: '小红', age: 13 }
let tom: [string, number] = ['Tom', 25]
let tom1: [string, number]
tom[0] = 'Tom'
tom[1] = 25
tom[0].slice(1)
tom[1].toFixed(2)
enum Color {
    Red = 1,
    Green = 3,
}
let cc: Color = Color.Green
console.log(cc);
let value1: any
value1 = 123;
value1 = 'abc';
value1 = false;
const array: any[] = [1, "a", true]
function alertName(): void {
    console.log('My name is void');

}
function error(message: string): never {
    throw new Error(message)
}
function fail() {
    return error('Something failed')
}



// 1.用两种方式创建boolean类型的数组
let flag1: Array<boolean> = [true, true, false]
console.log(flag1);

let flag2: boolean[] = [true, false]
console.log(flag2);



// 2.(1)工厂模式创建对象(new object())
function gc(name, age) {
    let o = new Object()
    o.name = name
    o.age = age
    o.sayname = function () {
        console.log(this.name);
    }
    return o
}
let gc1 = gc('cuiyutong', 19)
console.log(gc1);

// (2)构造函数创建对象
function cy(name, age) {
    this.name = name
    this.age = age
    this.sayname = function () {
        console.log(this.name);
    }
}
let gz1 = new cy('cc', 21)
console.log(gz1);



// 3.将对象造个句子
let obj2: { name: string, age: number }
obj2 = { name: '鸣人', age: 17 }
let arr2 = `my name is  ${obj2.name} age is ${obj2.age}`
console.log(arr2);
document.write(arr2)



// 4.找一个数组中的修改原数组的方式，找一下数组中哪些方式可以使用，哪些不能使用
push()尾添加
unshift()头添加
splice()替换截取
pop()尾删除
shift()头删除



// 5.为什么类型断言最后是number



// 6.函数类型有哪几种
    (1)匿名函数: 定义时候咩有任何变量引用的函数
    (2)回调函数: 一个函数作为对象交给其他函数使用
    (3)递归函数: 循环调用函数本身
    (4)构造函数: 构造函数习惯上首字母大写，用来新建实例对象