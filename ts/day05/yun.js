// new 新的请求http
var ajax = new XMLHttpRequest();
//  method,url
ajax.open('get', 'https://www.baidu.com');
// 发送数据
ajax.send();
// 接受返回值，判断是否返回成功
ajax.onreadystatechange = function () {
    if (ajax.status === 200 && ajax.readyState === 4) {
        console.log('我是返回成功的值');
    }
};
/* 二、声明一个枚举 */
var Status;
(function (Status) {
    Status[Status["Success"] = 200] = "Success";
    Status[Status["ReadyState"] = 4] = "ReadyState";
})(Status || (Status = {}));
/* 三、写个函数  */
function getAjax(params) {
    // 申请一个请求
    var ajax = new XMLHttpRequest();
    // 打开链接方式 pramas里面有限制的：
    ajax.open(params.methods, params.url);
    // 发送数据 传递信息
    ajax.send(params.data);
    // 等待回馈 
    ajax.onreadystatechange = function () {
        // 判断 如果status===200且满足条件 两者成功 拿到值
        if (ajax.status === Status.Success && ajax.readyState === Status.ReadyState) {
            console.log('我可以用了');
        }
    };
}
/* 为函数和函数参数定义类型
type
    1.类型别名


    不一样的点：
    1.type是赋值，进行别名的修改
    2.interface 声明一个类型
    3.type 可以声明基础类型数据，interface只能声明对象
    4.interface可以使用extends进行继承，但type不可以，因为类型别名，属于赋值的一种
    5.interface 可以重复声明，自动合并一起，
    6.type不可以重复声明



    相同点：
    1.type和interface都可以声明对象和类型
 */
// -------不同点
// interface users:string 
// type用来声明基础类型
var names;
// 接收一个字符串类型的数据，返回一个user类型（字符串类型）的数据
function Input(str) {
    return str.slice(0, 2);
}
//把返回结果赋值给userIput
var userInput = Input('hello');
// 重新给其赋值一个字符串类型的值，没有报错，说明用type声明的字符串类型生效
userInput = 'new';
// type Bear extends Animal={
//     color:string
// }
// const bear :Bear={
//     honey:false,
//     // color:fales
// }
/* 完成的定义一个函数类型 */
// let add:(x:number,y:number)=>number;
// add={arg1:number,arg2:number}:number=>arg1+arg2;
// 错误的例子
/* 不能将类型“(arg1:string,arg2:string)=>string" 分配给类型（x:number,y:number）=>number
参数"arg1"和"x"的类型不够兼容
 不能将类型“number”费赔给类型"string"
*/
// add=(arg1:string,arg2:string):string=>arg1+arg2 //error
// interface Add{
//     (x:number,y:number):number;
// }
// let add:Add=(arr1:string,arg2:string):string=>arg1+arg2 //error 不能将类型“（arg1:string,arg2:string）=>string
/* 可选参数？是在对象中使用的，接口声明和类型别名---重点 */
// type Add=(x:number,y:number)=>number;
// let add:Add=(arg1:string,arg2:string):string=>arg1+arg2;
// add(1,2)  //right
// add(1,2,3) //error 应有2个参数，但获得3个
// add(1)  //error 应有2个参数，但获得1个
/*
type Add=(x?:number,y:number)=>number; //error 必选参数不能位于可选参数后
interface Add{
    x?:number,
    y?:number
}
 */
/* js里面的东西 */
// const  count=0
// const countUp(step=1)=>{
//     count==step;
// }
var add = function (x, y) {
    if (y === void 0) { y = 2; }
    return x + y;
};
var result = add();
/* 默认参数 */
// javascript
var count = 0;
function handleData(arguments) {
    if (arguments.length === 1)
        return arguments[0] * 2;
    else if (arguments.length === 2)
        return arguments[0] * argument[1];
    else
        return Array.prototype.slice.apply(arguments).join("_");
}
handleData(2); //4
handleData(2, 3); //6
handleData(1, 2, 3, 4, 5); // '1_2_3_4_5'
// 这段代码如果在ts环境中，三个对handeleData函数的调佣都会报错，因为handleData函数蒂尼的时候
/* 1.使用接口定义函数类型 完成的写法，并且不报错
   2.使用类型别名定义函数参数，完成正确的写法
 */ 
