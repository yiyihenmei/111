/* 
enum的详解
总结：1.每次手动添加索引的时候，下面数据如果不是手动添加的索引，将会以递增的方式，把索引展示出来
      2.数字类型，我们可以像访问对象一样使用','和'[]'两种方式访问里面的值
      3.字符串枚举的特点：含字符串值成员的枚举中不允许使用计算值,且必须是字符串类型
      枚举成员必须具有初始化表达式
 */


    /*  
    *---数字类型的定义
    数字类型
    1.语法使用的是es6的语法,Uploading:Uploading
    2.自动添加指定索引符号
    3.我们可以像访问对象一样使用','和'[]'两种方式访问里面的值
    */
    enum Status{
    Uploading,
        Success,
        Falied
}
//像访问对象一样使用
console.log(Status.Falied); //0
console.log(Status['Falied']); //1
console.log(Status.Success); //2


/* 指定索引值 */
enum Anmimal{
    /* 猪 */
    Pig=200,
    /* 狗 */
    Dog,
    /* 猫 */
    Cat,
    /* 蛇 */
    Snake
}
console.log(Anmimal.Cat);
console.log(Anmimal['Dog']);
console.log(Anmimal.Snake);

const getvalue=()=>{
    return 1
}

/* 3.使用常量和计算量 */

enum Constont{
    a=getvalue(),
    b=1,//枚举成员必须具有初始化表达式
    c=2,
}

console.log(Constant['a']);
console.log(Constant.b);
console.log(Constant.c);

/* 4.反向映射--只支持数字枚举反射 */

enum Statuss{
    Success=200,
    NotFound=404,
    Error=500
}
console.log(Statuss.Error); 
console.log(Statuss[400]);
console.log(Statuss.NotFound); 


/* 5.字符串枚举 */
const getvalue1=()=>{
    return 0
}
const names='小明'
enum Message{
    /* 错误信息 */
    Error ='error message',
    /* 成功的错误信息
       枚举成员必须具有初始化表达式
     */
    SuccessError=200,  //枚举成员必须具有初始化表达式
    // 含字符串值成员的枚举中不允许使用计算值
    // 含字符串值成员的枚举中不允许使用计算值
    ClientError=names
}
console.log(Message.SuccessError,'SuccessError');
console.log(Message.Error);
console.log(Message['ClientError']);


/* 6.异构枚举 */
enum Result{
    Faild=0,
    Success="Success"
}

/* 7.枚举成员类型 */
enum Animal{
    Dog=1,
    Cat=2
}
/* 狗 */
interface Dog{
    type:Animal.Dog
}

/* 猫 */
interface Cat {
    type: Animal.Cat
}
let cat1:Cat={
    type:Animal.Dog //error[ts]不能将类型"Animal.Dog"分配给类型"Animal.Dog"
}
let dog:Dog={
    type:Animal.Dog
}

/* 8.联合枚举类型 */
enum Keys{
    Off,
    On
}

interface Light{
    status:Keys
}

let light:Light={
    status:Keys.Off
}


/* 运行时的枚举 */
enum E{
    A,
    B
}
const getIndex =(enumObj:{A:number}):number=>{
    return enumObj.A
}
console.log(getIndex(E));  //0



/* const enum的用法 */
enum Animol{
    Rabbit,
    Pig
}
const enum Light90{
    Off,
    On
}

const status45=Animol.Pig
const status57=Light90.Off
console.log(status45,status57);


/* 总结一下
    1.interface
    2.可选属性？
    3.[prop:string]:any;
 */
/* interface 
我们需要定义这样一个函数，参数是一个对象，里面包含两个字段：firstName和lastName，也就是英文的名和姓，然后返回一个拼接后的完整名字
 */
// 拼接名字法


function getFullName({firstName,lastName}:{firstName:string,lastName:string}){
    return `${lastName}${firstName}`
}


/* 第一种：什么参数都不传---应有1个参数，但获得0个
   第二种：我们传递错误参数，---对象文字可以指定已知属性，并且“age”不在类型“{firstName：string;lastName:string}”
   第三种：我们传递的参数个数不一样 --类型“{firstName：string;lastName:string;}的参数不能赋给类型“Persion”的参数”
   类型“{firstName：string; lastName:string;}”缺少类型“Persion”中的以下属性：age，sex
 */

let result = getFullName({ firstName: "国钧", lastName: '郑' })
console.log(result);


interface Persion{
    firstName:string,
    lastName:string,
    age:number,
    sex:boolean
}
/* 
@param param0
@returns 
*/
function getFullName1({ firstName, lastName,age,sex }:Persion):string {
    return `My name ${lastName}${firstName},My age is ${age},like shoping, ${sex}`
}


/* 可选属性 */
interface Persion{
    firstName:string,
    lastName:string,
    age:number,
    sex:boolean,
    colors?:string,
    [prop:string]:any //多余属性 
}
let result1=getFullName({firstName:"三",lastName:'张',age:20,sex:false,height:175})


/* 绕开多余属性检查，类型断言 */
interface Vegetabless{
    color?:string;
    type:string;
    size:string
}
interface Vegetables{
    color?:string;
    type:string;
}
const getVegetables=({color,type}:Vegetables)=>{
    return `A ${color ? color+ "" :""}${type}`;
}
getVegetables({
    type:"tomato",
    size:12,
    price:1.2
} as Vegetables)

/* 
enum的详解
总结：1.每次手动添加索引的时候，下面数据如果不是手动添加的索引，将会以递增的方式，把索引展示出来
      2.数字类型，我们可以像访问对象一样使用','和'[]'两种方式访问里面的值
      3.字符串枚举的特点：含字符串值成员的枚举中不允许使用计算值,且必须是字符串类型
      枚举成员必须具有初始化表达式
 */


/*  
*---数字类型的定义
数字类型
1.语法使用的是es6的语法,Uploading:Uploading
2.自动添加指定索引符号
3.我们可以像访问对象一样使用','和'[]'两种方式访问里面的值
*/
enum Status {
    Uploading,
    Success,
    Falied
}
//像访问对象一样使用
console.log(Status.Falied); //0
console.log(Status['Falied']); //1
console.log(Status.Success); //2


/* 指定索引值 */
enum Anmimal {
    /* 猪 */
    Pig = 200,
    /* 狗 */
    Dog,
    /* 猫 */
    Cat,
    /* 蛇 */
    Snake
}
console.log(Anmimal.Cat);
console.log(Anmimal['Dog']);
console.log(Anmimal.Snake);

const getvalue = () => {
    return 1
}

/* 3.使用常量和计算量 */

enum Constont {
    a = getvalue(),
    b = 1,//枚举成员必须具有初始化表达式
    c = 2,
}

console.log(Constant['a']);
console.log(Constant.b);
console.log(Constant.c);

/* 4.反向映射--只支持数字枚举反射 */

enum Statuss {
    Success = 200,
    NotFound = 404,
    Error = 500
}
console.log(Statuss.Error);
console.log(Statuss[400]);
console.log(Statuss.NotFound);


/* 5.字符串枚举 */
const getvalue1 = () => {
    return 0
}
const names = '小明'
enum Message {
    /* 错误信息 */
    Error = 'error message',
    /* 成功的错误信息
       枚举成员必须具有初始化表达式
     */
    SuccessError = 200,  //枚举成员必须具有初始化表达式
    // 含字符串值成员的枚举中不允许使用计算值
    // 含字符串值成员的枚举中不允许使用计算值
    ClientError = names
}
console.log(Message.SuccessError, 'SuccessError');
console.log(Message.Error);
console.log(Message['ClientError']);


/* 6.异构枚举 */
enum Result {
    Faild = 0,
    Success = "Success"
}

/* 7.枚举成员类型 */
enum Animal {
    Dog = 1,
    Cat = 2
}
/* 狗 */
interface Dog {
    type: Animal.Dog
}

/* 猫 */
interface Cat {
    type: Animal.Cat
}
let cat1: Cat = {
    type: Animal.Dog //error[ts]不能将类型"Animal.Dog"分配给类型"Animal.Dog"
}
let dog: Dog = {
    type: Animal.Dog
}

/* 8.联合枚举类型 */
enum Keys {
    Off,
    On
}

interface Light {
    status: Keys
}

let light: Light = {
    status: Keys.Off
}


/* 运行时的枚举 */
enum E {
    A,
    B
}
const getIndex = (enumObj: { A: number }): number => {
    return enumObj.A
}
console.log(getIndex(E));  //0



/* const enum的用法 */
enum Animol {
    Rabbit,
    Pig
}
const enum Light90 {
    Off,
    On
}

const status45 = Animol.Pig
const status57 = Light90.Off
console.log(status45, status57);


/* 总结一下
    1.interface
    2.可选属性？
    3.[prop:string]:any;
 */
/* interface 
我们需要定义这样一个函数，参数是一个对象，里面包含两个字段：firstName和lastName，也就是英文的名和姓，然后返回一个拼接后的完整名字
 */
// 拼接名字法


function getFullName({ firstName, lastName }: { firstName: string, lastName: string }) {
    return `${lastName}${firstName}`
}


/* 第一种：什么参数都不传---应有1个参数，但获得0个
   第二种：我们传递错误参数，---对象文字可以指定已知属性，并且“age”不在类型“{firstName：string;lastName:string}”
   第三种：我们传递的参数个数不一样 --类型“{firstName：string;lastName:string;}的参数不能赋给类型“Persion”的参数”
   类型“{firstName：string; lastName:string;}”缺少类型“Persion”中的以下属性：age，sex
 */

let result = getFullName({ firstName: "国钧", lastName: '郑' })
console.log(result);


interface Persion {
    firstName: string,
    lastName: string,
    age: number,
    sex: boolean
}
/* 
@param param0
@returns 
*/
function getFullName1({ firstName, lastName, age, sex }: Persion): string {
    return `My name ${lastName}${firstName},My age is ${age},like shoping, ${sex}`
}


/* 可选属性 */
interface Persion {
    firstName: string,
    lastName: string,
    age: number,
    sex: boolean,
    colors?: string,
    [prop: string]: any //多余属性 
}
let result1 = getFullName({ firstName: "三", lastName: '张', age: 20, sex: false, height: 175 })


/* 绕开多余属性检查，类型断言 */
interface Vegetabless {
    color?: string;
    type: string;
    size: string
}
interface Vegetables {
    color?: string;
    type: string;
}
const getVegetables = ({ color, type }: Vegetables) => {
    return `A ${color ? color + "" : ""}${type}`;
}
getVegetables({
    type: "tomato",
    size: 12,
    price: 1.2
} as Vegetables)








/* 
enum的详解
总结：1.每次手动添加索引的时候，下面数据如果不是手动添加的索引，将会以递增的方式，把索引展示出来
      2.数字类型，我们可以像访问对象一样使用','和'[]'两种方式访问里面的值
      3.字符串枚举的特点：含字符串值成员的枚举中不允许使用计算值,且必须是字符串类型
      枚举成员必须具有初始化表达式
 */


/*  
*---数字类型的定义
数字类型
1.语法使用的是es6的语法,Uploading:Uploading
2.自动添加指定索引符号
3.我们可以像访问对象一样使用','和'[]'两种方式访问里面的值
*/
enum Status {
    Uploading,
    Success,
    Falied
}
//像访问对象一样使用
console.log(Status.Falied); //0
console.log(Status['Falied']); //1
console.log(Status.Success); //2


/* 指定索引值 */
enum Anmimal {
    /* 猪 */
    Pig = 200,
    /* 狗 */
    Dog,
    /* 猫 */
    Cat,
    /* 蛇 */
    Snake
}
console.log(Anmimal.Cat);
console.log(Anmimal['Dog']);
console.log(Anmimal.Snake);

const getvalue = () => {
    return 1
}

/* 3.使用常量和计算量 */

enum Constont {
    a = getvalue(),
    b = 1,//枚举成员必须具有初始化表达式
    c = 2,
}

console.log(Constant['a']);
console.log(Constant.b);
console.log(Constant.c);

/* 4.反向映射--只支持数字枚举反射 */

enum Statuss {
    Success = 200,
    NotFound = 404,
    Error = 500
}
console.log(Statuss.Error);
console.log(Statuss[400]);
console.log(Statuss.NotFound);


/* 5.字符串枚举 */
const getvalue1 = () => {
    return 0
}
const names = '小明'
enum Message {
    /* 错误信息 */
    Error = 'error message',
    /* 成功的错误信息
       枚举成员必须具有初始化表达式
     */
    SuccessError = 200,  //枚举成员必须具有初始化表达式
    // 含字符串值成员的枚举中不允许使用计算值
    // 含字符串值成员的枚举中不允许使用计算值
    ClientError = names
}
console.log(Message.SuccessError, 'SuccessError');
console.log(Message.Error);
console.log(Message['ClientError']);


/* 6.异构枚举 */
enum Result {
    Faild = 0,
    Success = "Success"
}

/* 7.枚举成员类型 */
enum Animal {
    Dog = 1,
    Cat = 2
}
/* 狗 */
interface Dog {
    type: Animal.Dog
}

/* 猫 */
interface Cat {
    type: Animal.Cat
}
let cat1: Cat = {
    type: Animal.Dog //error[ts]不能将类型"Animal.Dog"分配给类型"Animal.Dog"
}
let dog: Dog = {
    type: Animal.Dog
}

/* 8.联合枚举类型 */
enum Keys {
    Off,
    On
}

interface Light {
    status: Keys
}

let light: Light = {
    status: Keys.Off
}


/* 运行时的枚举 */
enum E {
    A,
    B
}
const getIndex = (enumObj: { A: number }): number => {
    return enumObj.A
}
console.log(getIndex(E));  //0



/* const enum的用法 */
enum Animol {
    Rabbit,
    Pig
}
const enum Light90 {
    Off,
    On
}

const status45 = Animol.Pig
const status57 = Light90.Off
console.log(status45, status57);


/* 总结一下
    1.interface
    2.可选属性？
    3.[prop:string]:any;
 */
/* interface 
我们需要定义这样一个函数，参数是一个对象，里面包含两个字段：firstName和lastName，也就是英文的名和姓，然后返回一个拼接后的完整名字
 */
// 拼接名字法


function getFullName({ firstName, lastName }: { firstName: string, lastName: string }) {
    return `${lastName}${firstName}`
}


/* 第一种：什么参数都不传---应有1个参数，但获得0个
   第二种：我们传递错误参数，---对象文字可以指定已知属性，并且“age”不在类型“{firstName：string;lastName:string}”
   第三种：我们传递的参数个数不一样 --类型“{firstName：string;lastName:string;}的参数不能赋给类型“Persion”的参数”
   类型“{firstName：string; lastName:string;}”缺少类型“Persion”中的以下属性：age，sex
 */

let result = getFullName({ firstName: "国钧", lastName: '郑' })
console.log(result);


interface Persion {
    firstName: string,
    lastName: string,
    age: number,
    sex: boolean
}
/* 
@param param0
@returns 
*/
function getFullName1({ firstName, lastName, age, sex }: Persion): string {
    return `My name ${lastName}${firstName},My age is ${age},like shoping, ${sex}`
}


/* 可选属性 */
interface Persion {
    firstName: string,
    lastName: string,
    age: number,
    sex: boolean,
    colors?: string,
    [prop: string]: any //多余属性 
}
let result1 = getFullName({ firstName: "三", lastName: '张', age: 20, sex: false, height: 175 })


/* 绕开多余属性检查，类型断言 */
interface Vegetabless {
    color?: string;
    type: string;
    size: string
}
interface Vegetables {
    color?: string;
    type: string;
}
const getVegetables = ({ color, type }: Vegetables) => {
    return `A ${color ? color + "" : ""}${type}`;
}
getVegetables({
    type: "tomato",
    size: 12,
    price: 1.2
} as Vegetables)














