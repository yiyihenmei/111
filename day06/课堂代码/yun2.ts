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





/* ts中的类 */
class People {
    name: string;
    age: number;
    constructor(name, age) {
        this.age = age
        this.name = name
    }
    sayHi(): string {
        return this.name
    }
}
let p1 = new People('小红', 12)
console.log(p1);


/* ts的类继承 */

class Rabbit extends People {
    constructor(name: string, age: number) {
        super(name, age)
    }
}
let d1 = new Rabbit('兔子', 13)
console.log(d1.name);
console.log(d1.age);
console.log(d1.sayHi());

/* 修饰符 
*  protected 保护类型 类里面、子类可以访问 类外面不可以访问
*/
// class Animal{
//     protected name:string
//     constructor(name:string){
//         this.name=name
//     }
//     getName(): string {
//         // 父类内部获取name属性
//         return this.name
//     }
// }
// // 实例化父类
// let a=new Animal('动物')
// // 父类外获取name属性
// console.log(a.name); //编译报错 属性“name”受保护，只能在类“Animal”及其子类中访问。



// class Animal{
//     private name:string
//     constructor(name){
//         this.name=name
//     }
//     getName():string{
//         // 父类内部获取 name 属性
//         return this.name
//     }
// }

// // 实例化父类
// let a =new Animal('动物')
// // 父类外获取name属性
// console.log(a.name);// 编译报错：属性“name”为私有属性，只能在类“Animal”中访问



// 声明 狗类 继承 动物类
// class Dog extends Animal{
//     constructor(name){
//         super(name)
//     }
//     run():string{
//         //子类内部获取name属性
//         return this.name+'会运动'
//     }
// }


// // 实例化子类
// let d=new Dog('哈士奇')
// // 子类 类外
// console.log(d.name); //编译报错 属性“name”受保护，只能在类“Animal”及其子类中访问。
// console.log(d.getName());


// class Animal {
//     name: string
//     static prop: string = '1'
//     constructor(name: string) {
//         this.name = name
//     }
//     getName(): string {
//         return this.name
//     }
// }

// console.log(Animal.prop); // 1

// let a = new Animal('小狗')
// let b=new Animal('ddd')

// console.log(a.prop); // 属性“prop”在类型“Animal”上不存在

class Animal {
    name: String
    Constructor(name: string) {
        this.name = name
    }
    //父类定义了一个方法，不去实现
    eat() { }
}

// class Dog extends Animal {
//     constructor(name: string) {
//         super(name)
//     }
//     eat(): void {
//         console.log(`${this.name}吃骨头`);

//     }
// }

// class Cat extends Animal {
//     constructor(name: string) {
//         super(name)
//     }
//     eat(): void {
//         console.log(`${this.name}吃鱼`);
//     }
// }



















