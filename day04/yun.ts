
// 绕开多余属性的索引

/* 1.索引签名
***！！！重点：饶开多余属性时，[]中间的内容是可变的
   2.readonly 只读属性
 */
interface Rolec {
    [id: number]: string
}
let role: Rolec = {
    0: 'super_admin',
    1: 'admin'
}

// 错误
// let copeRole:Rolec={
//     //不能将类型"{A:string;C:string}分配给类型Rolec"。
//     // 对象文字可以只指定已知属性，并且"'A'"不在类型"Rolec"中
//     'A':'super_admin',
//     'C':'admin'
// }

/* 数组模式 
不报错是因为数组是有下标的，下标是数值类型
*/

let roleArray: Rolec = ['super_admin', 'admin']
roleArray[0] = '我要站着上课'

/* 
    想要我们的东西不可更改，你只有查看权限，----
    readonly
 */
interface RoleInfo {
    readonly [id: number]: string
}

// 错误
// const roleCHange:RoleInfo={
//     0:"super_admin"
// };
// roleCHange[0]="admin"; //error 类型“RoleDic”中的索引前面仅允许读取

const obj = {
    123: "a", //这里定义一个数据类型的123这个属性
    "123": "b" //对象文本不能具有多个名称相同的属性
}
console.log(obj); //{'123':'b'}



/* 继承接口
extends
接口可以继承，这和类一样，这提高了接口的可复用性
ts的继承 我们继承的是接口
 */


// 定义一个Vegetables接口，它会对color属性进行限制，再定义两个接口，一个为Tomato，一个为Carrot，这两个类都需要对color进行限制，而各自又有各自独有的属性限制
interface Vegetables {
    color: string
}
interface Tomato {
    color: string;
    radius: number;
}
interface Carrot {
    color: string;
    length: number
}

// 这三个接口都有color属性，但是这样写很繁琐，所以我们用继承
interface Vegetables {
    color: string;
}
interface Tomato extends Vegetables {
    radius: number
}
const tomato: Tomato = {
    radius: 1.2 //error Properyt 'color' is missing in type '{radius:number}'
}
const carrot: Carrot = {
    color: 'orange',
    length: 20
}

/* 接口继承 extends */

// 这是一个公共接口类型定义
interface Vegetables {
    color: string;
}

/* Tomato：color radius */
interface Tomato extends Vegetables {
    radius: number
}
/* colorlength */
interface Carrot extends Vegetables {
    lenght: number;
}
let useTomato: Tomato = {
    // 类型 "{ radius: number; }" 中缺少属性 "color"，但类型 "Tomato" 中需要该属性
    radius: 13,
    color: 'red'
}
let useCarrot: Carrot = {
    lenght: 12,
    color: 'red'
}


/* 混合类型接口 */

// 不想被污染掉，放到闭包里，形成独立的作用域
// let count=0;
// const countUp=()=>count++;

count countUp = (() => {
    let count = 0;
    return () => {
        return ++count;
    }
})()
console.log(countUp()); //1
console.log(countUp()); //2


// 
/* 块级作用域
任何一对花括号({})中的语句集都属于一个块，在这之中定义的所有变量在代码块外都是不可见的，我们称之为块级作用域。
 */



/* 原生ajax */

// 创建ajax
let ajax = new XMLHttpRequest()
// 指定放方法和url
ajax.open('get', "https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata")

//发送数据
ajax.send()

// 判断是不是返回成功的状态码
ajax.onreadystatechange = function () {
    if (ajax.status === 200 && ajax.readyState === 4) {
        console.log(ajax.response);

    }
}


// 是否请求成功 状态码的封装
enum Status {
    // 成功
    Success = 200,
    // 链接成功
    ReadyStatus = 4
}

interface Iparams {
    method: string,
    url: string,
    data?: any
}



function f1(params: Iparams) {
    let ajax = new XMLHttpRequest()
    // method 方法和url请求
    ajax.open(params.method, params.url)
    ajax.send(params.data)
    // 判断请求地址
    ajax.onreadystatechange = function () {
        if (ajax.status === Status.Success && ajax.readyState === Status.ReadyStatus) {
            console.log('我是成功的');
        }
    }
}
const params = { method: 'get', url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata' }
f1(params)






// -------------------------------------------------------------------------------------------------------------------------------------------------

/* *******************js的闭包*********************
1.函数嵌套函数 函数内部可以访问函数外部的变量，函数外部不可以访问函数内部的变量
2.返回值是回调函数
3.为什么有闭包的出现呢，是为了避免全局变量的污染，指变量存储在闭包中，垃圾回收机制回收不了变量，就会导致内存泄漏
 */

/* #### 11.5.1变量的作用域★★★★

变量根据作用域的不同分为两种：全局变量和局部变量。

* 函数内部可以使用全局变量。
* 函数外部不可以使用局部变量。
* 当函数执行完毕，本作用域内的局部变量会销毁。 */

// #### 11.5.3闭包的作用★★★★★

// 作用：延伸变量的作用范围。






// ### **********js的继承**********

// 面向对象的三个特点就是封装，继承和多态，通过继承，我们可以实现对象和方法的复用，从而提高代码的利用率，也是代码优化的一种方案。下面我们看一下js的继承是怎么实现的？

// call★★★★★

// - call()方法可以调用函数

// - call()可以修改this的指向, 使用call()的时候 参数一是修改后的this指向, 参数2, 参数3..使用逗号隔开连接

function fn(x, y) {
    console.log(this);
    console.log(x + y);
}
var o = {
    name: 'andy'
};
fn.call(o, 1, 2);//调用了函数此时的this指向了对象o


// 2  子构造函数继承父构造函数中的属性★★★

// 上面说了call方法的基本使用，下面我们看一下如何使用call完成函数的继承呢？也就是我们经常所说的构造函数继承，主要分为三个步骤:

// - 先定义一个父构造函数

// - 再定义一个子构造函数

// - 子构造函数继承父构造函数的属性(使用call方法)

// 1. 父构造函数
function Father(uname, age) {
    // this 指向父构造函数的对象实例
    this.uname = uname;
    this.age = age;
}
// 2 .子构造函数 
function Son(uname, age, score) {
    // this 指向子构造函数的对象实例
    // 3.使用call方式实现子继承父的属性
    Father.call(this, uname, age);
    this.score = score;
}
var son = new Son('刘德华', 18, 100);
console.log(son);


// 3 借用原型对象继承方法 ★★★★★

// 当然我们也可以借用原型来继承函数，步骤大致如下所示:

// - 先定义一个父构造函数

// - 再定义一个子构造函数

// - 子构造函数继承父构造函数的属性(使用call方法), 把父方法的实例化对象赋给子方法的原型。

// 1. 父构造函数
function Father(uname, age) {
    // this 指向父构造函数的对象实例
    this.uname = uname;
    this.age = age;
}
Father.prototype.money = function () {
    console.log(100000);
};
// 2 .子构造函数 
function Son(uname, age, score) {
    // this 指向子构造函数的对象实例
    Father.call(this, uname, age);
    this.score = score;
}
// Son.prototype = Father.prototype;  这样直接赋值会有问题,如果修改了子原型对象,父原型对象也会跟着一起变化
Son.prototype = new Father();
// 如果利用对象的形式修改了原型对象,别忘了利用constructor 指回原来的构造函数
Son.prototype.constructor = Son;
// 这个是子构造函数专门的方法
Son.prototype.exam = function () {
    console.log('孩子要考试');

}
var son = new Son('刘德华', 18, 100);
console.log(son);



/* ####************************原型链★★★★**************************

每一个实例对象又有一个__proto__属性，指向的构造函数的原型对象，构造函数的原型对象也是一个对象，
也有__proto__属性，这样一层一层往上找就形成了原型链。 */


/* 堆和栈
栈
简单数据类型
二进制
从上往下
先进先出


堆：复杂数据类型
沉底的
先进后出
 */












// 绕开多余属性的索引

/* 1.索引签名
***！！！重点：饶开多余属性时，[]中间的内容是可变的
   2.readonly 只读属性
 */
interface Rolec {
    [id: number]: string
}
let role: Rolec = {
    0: 'super_admin',
    1: 'admin'
}

// 错误
// let copeRole:Rolec={
//     //不能将类型"{A:string;C:string}分配给类型Rolec"。
//     // 对象文字可以只指定已知属性，并且"'A'"不在类型"Rolec"中
//     'A':'super_admin',
//     'C':'admin'
// }

/* 数组模式 
不报错是因为数组是有下标的，下标是数值类型
*/

let roleArray: Rolec = ['super_admin', 'admin']
roleArray[0] = '我要站着上课'

/* 
    想要我们的东西不可更改，你只有查看权限，----
    readonly
 */
interface RoleInfo {
    readonly [id: number]: string
}

// 错误
// const roleCHange:RoleInfo={
//     0:"super_admin"
// };
// roleCHange[0]="admin"; //error 类型“RoleDic”中的索引前面仅允许读取

const obj = {
    123: "a", //这里定义一个数据类型的123这个属性
    "123": "b" //对象文本不能具有多个名称相同的属性
}
console.log(obj); //{'123':'b'}



/* 继承接口
extends
接口可以继承，这和类一样，这提高了接口的可复用性
ts的继承 我们继承的是接口
 */


// 定义一个Vegetables接口，它会对color属性进行限制，再定义两个接口，一个为Tomato，一个为Carrot，这两个类都需要对color进行限制，而各自又有各自独有的属性限制
interface Vegetables {
    color: string
}
interface Tomato {
    color: string;
    radius: number;
}
interface Carrot {
    color: string;
    length: number
}

// 这三个接口都有color属性，但是这样写很繁琐，所以我们用继承
interface Vegetables {
    color: string;
}
interface Tomato extends Vegetables {
    radius: number
}
const tomato: Tomato = {
    radius: 1.2 //error Properyt 'color' is missing in type '{radius:number}'
}
const carrot: Carrot = {
    color: 'orange',
    length: 20
}

/* 接口继承 extends */

// 这是一个公共接口类型定义
interface Vegetables {
    color: string;
}

/* Tomato：color radius */
interface Tomato extends Vegetables {
    radius: number
}
/* colorlength */
interface Carrot extends Vegetables {
    lenght: number;
}
let useTomato: Tomato = {
    // 类型 "{ radius: number; }" 中缺少属性 "color"，但类型 "Tomato" 中需要该属性
    radius: 13,
    color: 'red'
}
let useCarrot: Carrot = {
    lenght: 12,
    color: 'red'
}


/* 混合类型接口 */

// 不想被污染掉，放到闭包里，形成独立的作用域
// let count=0;
// const countUp=()=>count++;

count countUp = (() => {
    let count = 0;
    return () => {
        return ++count;
    }
})()
console.log(countUp()); //1
console.log(countUp()); //2


// 
/* 块级作用域
任何一对花括号({})中的语句集都属于一个块，在这之中定义的所有变量在代码块外都是不可见的，我们称之为块级作用域。
 */



/* 原生ajax */

// 创建ajax
let ajax = new XMLHttpRequest()
// 指定放方法和url
ajax.open('get', "https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata")

//发送数据
ajax.send()

// 判断是不是返回成功的状态码
ajax.onreadystatechange = function () {
    if (ajax.status === 200 && ajax.readyState === 4) {
        console.log(ajax.response);

    }
}


// 是否请求成功 状态码的封装
enum Status {
    // 成功
    Success = 200,
    // 链接成功
    ReadyStatus = 4
}

interface Iparams {
    method: string,
    url: string,
    data?: any
}



function f1(params: Iparams) {
    let ajax = new XMLHttpRequest()
    // method 方法和url请求
    ajax.open(params.method, params.url)
    ajax.send(params.data)
    // 判断请求地址
    ajax.onreadystatechange = function () {
        if (ajax.status === Status.Success && ajax.readyState === Status.ReadyStatus) {
            console.log('我是成功的');
        }
    }
}
const params = { method: 'get', url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata' }
f1(params)






// -------------------------------------------------------------------------------------------------------------------------------------------------

/* *******************js的闭包*********************
1.函数嵌套函数 函数内部可以访问函数外部的变量，函数外部不可以访问函数内部的变量
2.返回值是回调函数
3.为什么有闭包的出现呢，是为了避免全局变量的污染，指变量存储在闭包中，垃圾回收机制回收不了变量，就会导致内存泄漏
 */

/* #### 11.5.1变量的作用域★★★★

变量根据作用域的不同分为两种：全局变量和局部变量。

* 函数内部可以使用全局变量。
* 函数外部不可以使用局部变量。
* 当函数执行完毕，本作用域内的局部变量会销毁。 */

// #### 11.5.3闭包的作用★★★★★

// 作用：延伸变量的作用范围。






// ### **********js的继承**********

// 面向对象的三个特点就是封装，继承和多态，通过继承，我们可以实现对象和方法的复用，从而提高代码的利用率，也是代码优化的一种方案。下面我们看一下js的继承是怎么实现的？

// call★★★★★

// - call()方法可以调用函数

// - call()可以修改this的指向, 使用call()的时候 参数一是修改后的this指向, 参数2, 参数3..使用逗号隔开连接

function fn(x, y) {
    console.log(this);
    console.log(x + y);
}
var o = {
    name: 'andy'
};
fn.call(o, 1, 2);//调用了函数此时的this指向了对象o


// 2  子构造函数继承父构造函数中的属性★★★

// 上面说了call方法的基本使用，下面我们看一下如何使用call完成函数的继承呢？也就是我们经常所说的构造函数继承，主要分为三个步骤:

// - 先定义一个父构造函数

// - 再定义一个子构造函数

// - 子构造函数继承父构造函数的属性(使用call方法)

// 1. 父构造函数
function Father(uname, age) {
    // this 指向父构造函数的对象实例
    this.uname = uname;
    this.age = age;
}
// 2 .子构造函数 
function Son(uname, age, score) {
    // this 指向子构造函数的对象实例
    // 3.使用call方式实现子继承父的属性
    Father.call(this, uname, age);
    this.score = score;
}
var son = new Son('刘德华', 18, 100);
console.log(son);


// 3 借用原型对象继承方法 ★★★★★

// 当然我们也可以借用原型来继承函数，步骤大致如下所示:

// - 先定义一个父构造函数

// - 再定义一个子构造函数

// - 子构造函数继承父构造函数的属性(使用call方法), 把父方法的实例化对象赋给子方法的原型。

// 1. 父构造函数
function Father(uname, age) {
    // this 指向父构造函数的对象实例
    this.uname = uname;
    this.age = age;
}
Father.prototype.money = function () {
    console.log(100000);
};
// 2 .子构造函数 
function Son(uname, age, score) {
    // this 指向子构造函数的对象实例
    Father.call(this, uname, age);
    this.score = score;
}
// Son.prototype = Father.prototype;  这样直接赋值会有问题,如果修改了子原型对象,父原型对象也会跟着一起变化
Son.prototype = new Father();
// 如果利用对象的形式修改了原型对象,别忘了利用constructor 指回原来的构造函数
Son.prototype.constructor = Son;
// 这个是子构造函数专门的方法
Son.prototype.exam = function () {
    console.log('孩子要考试');

}
var son = new Son('刘德华', 18, 100);
console.log(son);



/* ####************************原型链★★★★**************************

每一个实例对象又有一个__proto__属性，指向的构造函数的原型对象，构造函数的原型对象也是一个对象，
也有__proto__属性，这样一层一层往上找就形成了原型链。 */


/* 堆和栈
栈
简单数据类型
二进制
从上往下
先进先出


堆：复杂数据类型
沉底的
先进后出
 */











