/*
1.泛型的概念：指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性，使用表示符号<T>
2.标识符号<T>  T：约定俗成
3.一定要考虑当前传的参数是否有这个属性
4:泛型的约束
 */
/*
new Array(),创建数组的长度
.fill，填充数组的方法，将数据填充到其中，分别以不同的数据类型进行填充
 */
// const getArray=(value:any,times:number=5):any[]=>{
//     return new Array(times).fill(value)
// }
// getArray([1],2).forEach(item=>{
//     console.log(item.length);
// })
/* 每个item都是一个数组 */
// getArray(2,3).forEach(item=>{
//     // item是一个数字
//     console.log(item.length);  //Error，item不存在length这个数据
// })
// const getArray = (value: any, times: number = 5): any[] => {
//     return new Array(times).fill(value)
// }
// let result=getArray([1], 2)
//     console.log(result,'result');
//     result.forEach(item=>{
//         console.log(item);
//         console.log(item.length);
//     })
// let result1=getArray(1,2)
// console.log(result1,'result1');
// result1.forEach(item=>{
//    // item是一个数字
//     console.log(item.length);  //Error，item不存在length这个数据
// })
/* 泛型的使用 */
/* 最初的封装
@param Times
@returns */
// const getArray=<T>(value:T,times:number=5):T[]=>{
//     return new Array(times).fill(value)
// }
// getArray<number[]>([1,2],3).forEach(item=>{
//     console.log(item.length); 
// })
// getArray<number>(2, 3).forEach(item => {
//     console.log(item.length);  //类型“number”上不存在属性“length”
// })
// const getArray=<T,U>(param1:T,param2:U,times:number):[T,U][]=>{
//     return new Array(times).fill([param1,param2])
// }
// getArray(1,"a",3).forEach(item=>{
//     console.log(item[0].length);//error 类型“number”上不存在属性"length"
//     console.log(item[1].toFixed(2)); //error 属性“toFixed”在类型“string”不存在
// })
/* 泛型函数的类型 */
// ex1:简单定义
// const getArray:<T>(arg:T,times:number)=>T[]=(arg,times)=>{
//     return new Array(times).fill(arg)
// };
// // ex2:使用类型别名
// type GetArray=<T>(arg:T,times:number)=>T[]
// const getArray:GetArray=<T>(arg:Text,times:number):T[]=>{
//     return new Array(times).fill(arg)
// }
// let obj={}
// obj.a='sss'
// console.log(obj);
// interface ValueWithLength{
//     length:number
// }
// const getLength=<T extends ValueWithLength>(param:T):number=>{
//     return param.length
// }
// getLength("abc"); //3
// getLength([1,2,3]) //3
// getLength({length:3}) //3
// getLength(123) //error 类型“123”的参数不能赋给类型“ValueWithLength”的参数
/* 在泛型约束中使用类型参数 */
// const getProps=(object,propName)=>{
//     return object[propName];
// }
// const obj={a:'aa',b:'bb'}
// getProps(obj,"c") //undefined
// const getProps=<T,K extends keyof T>(object:T,propName:K)=>{
//     return object[propName]
// }
// const obj={a:'aa',b:'bb'};
// getProps(boj,"c");//类型“c”的参数不能赋给类型“a”|"b"的参数
/* 泛型变量
当我们使用泛型的时候，我们必须要在任何地方处理的时候，把它当做泛型来处理
这意味着不是所有的类型都可以操作，也不是所有的类型都有每个属性，所以要考虑好(eg.number notfoud length)
 */
/* 泛型类型函数
我们可以定义一个泛型函数类型
也可以定义一个接口类型的函数
还可以把接口的泛型变量提到最外层，这样在最内层都可以使用这个变量
*/
/* 类
 用来继承的
*/
/* 原型和继承
   面相对象的特点：继承，多态，封装
 */
function Anmation(name) {
    this.name = name,
        this.Sayhi = function () {
            console.log('我是一个继承的函数');
        };
}
Anmation.prototype.age = '13';
Anmation.prototype.Task = function () {
    console.log('我在吼叫');
};
var cat = new Anmation('Cat');
cat.prototype.NiHao = function () {
    console.log('我是实例函数创建的对象');
};
console.log(cat.name);
console.log(cat.Sayhi);
console.log(cat.age);
console.log(cat.Task);
console.log(cat.NiHao);
console.log(cat);
console.log(Anmation);



/* ES6的类的声明 */
class Persion {
    /* 
    定义属性
    @param{*} name
    @param{*}age
    */
    constructor(name, age) {
        this.name = name,
            this.age = age
    }
    /* 定义方法 */
    SayHi() {
        return this.name
        // console.log('我是一个方法');
    }
}

// let p = new Persion('小红', 12)
// console.log(p.age);
// console.log(p.name);
// console.log(p.SayHi());



/* 原型和继承
   面相对象的特点：继承，多态，封装
 */
function Anmation(name) {
    this.name = name,
        this.Sayhi = function () {
            console.log('我是一个继承的函数');
        }
}
Anmation.prototype.age = '13'
Anmation.prototype.Task = function () {
    console.log('我在吼叫');

}
let cat = new Anmation('Cat')
cat.prototype.NiHao = function () {
    console.log('我是实例函数创建的对象');

}
console.log(cat.name);
console.log(cat.Sayhi);
console.log(cat.age);
console.log(cat.Task);
console.log(cat.NiHao);
console.log(cat);
console.log(Anmation);





/* ES6的类的声明 */
class Persion {
/**
 * 
 * @param {*} name 
 * @param {*} age 
 */
    constructor(name, age) {
        this.name = name,
            this.age = age
    }
    /* 定义方法 */
    SayHi() {
        return this.name
        // console.log('我是一个方法');
    }
}

let p = new Persion('小红', 12)
console.log(p.age);
console.log(p.name);
console.log(p.SayHi());

/* ES6的继承 */
class Anmial{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    run(){
        console.log('我在运动');
    }
}
class Dog extends Anmial{
    constructor(props){
        super(props)
    }
}
let d=new Dog('哈士奇')
console.log(d.name); //哈士奇
d.run(); //哈士奇会跑步