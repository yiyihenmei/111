/**
 * 1.任何类型的值都可以赋值给unknown类型
 * 2.如果没有类型断言或基于控制流的类型细化时 unknown 不可以赋值给其他类型时，此时
 * 它只能赋值给unknown 和 any 类型；
 * 3.如果没有类型断言或基于控制流的类型细化，则不能在它上面进行任何操作；
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var value1;
value1 = 'a';
value1 = 123;
var anyValue;
anyValue = 1;
anyValue = 'ddd';
var value2;
//  不能将类型“unknown”分配给类型“string”。
//  let value3 : string = value2
value1 = value2;
//  -----
var anyValue1;
var anyValue23 = anyValue1;
/**
 * 3.
 */
var value4;
/**
 *
 */
value1 === value2;
value1 !== value2;
//  运算符“+=”不能应用于类型“unknown”和“unknown”。
//  value1 += value2;
var value5;
/**
 * 装饰器直接把装饰的方法实例化类中,不需要手动继承或者实例
 * @param target
 * @param propertyKey
 * @param descriptor
 */
//  function smile(target: Greeter,propertyKey: string,descriptor: PropertyDescriptor){
//      return {
//          ...descriptor,
//          value : function(name : string){
//              console.log('smile');
//             //  调用被装饰的方法
//              return descriptor.value(name);
//          }
//      };
//  }
//  class Greeter {
//      greeting : string;
//      constructor(message : string){
//          this.greeting = message
//      }
//      @smile
//      greet(name : string) : string {
//          console.log(`welcome,${name}!`);
//          return "Hi!"
//      }
//  }
//  const g = new Greeter('msg')
//  g.greet('白敬亭')
//  g.greet('白敬亭')
//  g.greet('白敬亭')
//  console.log(g);
// smile
// welcome,白敬亭!
// smile
// welcome,白敬亭!
// smile
// welcome,白敬亭!
// Greeter { greeting: 'msg' }
/**
 * 装饰器工厂函数
 */
// function setName () {
//     console.log('get setName');
//     return function (target : any) {
//         console.log('setName');
//     }
// }
// function setAge () {
//     console.log('get setAge');
//     return function (target : any) {
//         console.log('setAge');
//     }
// }
// @setName()
// @setAge()
// class Test {}
// 打印出来的内容如下：
/**
 * 'get setName'
 * 'get setAge'
 * 'setAge'
 * 'setName'
 */
/**
 * 类声明器
 */
// interface Bar {
//     work: () => void
// }
// type WithStatic<T, U> = {
//     new() : T;
// } & U;
// type BarWithStatic = WithStatic<Bar, { life: number}>;
// // 通过装饰器重写了构造函数的类型
// function staticImplements<T>() {
//     return <U extends T>(constructor : U) => {};
// }
// @staticImplements<BarWithStatic>()
// class Foo {
//     static life: number;
//     work() {
//         // do something
//     }
// }
/**
 * 类装饰器
 */
// let sign = null;
// function setName(name: string){
//     return function(target: Function) {
//         sign = target;
//         console.log(target.name);
//     }
// }
// @setName('Lee') // Info
// class Info {
//     constructor() {}
// }
// console.log(sign === Info);  // true
// console.log(sign === Info.prototype.constructor); // true
// function addName(constructor: { new () : any}) {
//     constructor.prototype.name = 'Lee'
// }
// @addName
// class A {}
// const a = new A();
// 类型“A”上不存在属性“name”。
// console.log(a.name);
// function addName(constructor: { new () : any}) {
//     constructor.prototype.name = "Lee"
// }
// @addName
// class A {}
// interface A {
//     name : string
// }
// const a = new A()
// console.log(a.name);
// function classDecorator<T extends { new (...args: any[]): {} }>(target: T) {
//     return class extends target {
//         newProperty = 'new property';
//         hello = 'override'
//     }
// }
// @classDecorator
// class Greeter {
//     property = 'property'
//     hello: string;
//     constructor(m: string) {
//         this.hello = m;
//     }
// }
// console.log(new Greeter('world'));
/*
{
    hello: "override"
    newProperty: "new property"
    property: "property"
}
*/
// function classDecorator(target: any): any {
//     return class {
//         newProperty = 'new property';
//         hello = 'override';
//     }
// }
// @classDecorator
// class Greeter {
//     property = 'property';
//     hello: string;
//     constructor(m: string) {
//         this.hello = m;
//     }
// }
// console.log(new Greeter("world"));
/*
{
    hello: "override"
    newProperty: "new property"
}
*/
/**
 * 方法装饰器
 */
// var obj = {}
// Object.defineProperty(obj, 'name', {
//     value: 'Lee',
//     writable:false,
//     configurable: true,
//     enumerable : true
// });
// console.log(obj);
// // { name: 'lison' }
// obj.name = 'test';
// console.log(obj);
// // { name: 'lison' }
// for (let key in obj) {
//     console.log(key);
//   }
//   // 'name'
//   Object.defineProperty(obj, "name", {
//     enumerable: false
//   });
//   for (let key in obj) {
//     console.log(key);
//   }
//   // 什么都没打印
//   Object.defineProperty(obj, "name", {
//     writable: true
//   });
//   obj.name = "test";
//   console.log(obj);
//   // { name: 'test' }
//   Object.defineProperty(obj, "name", {
//     configurable: false
//   });
//   Object.defineProperty(obj, "name", {
//     writable: false
//   });
//   //error Cannot redefine property: name
// function enumerable(bool: boolean) {
//     return function(
//         target: any,
//         propertyName: string,
//         descriptor: PropertyDescriptor
//     ){
//         // { getAge: f, constructor: f }
//         console.log(target);
//         descriptor.enumerable = bool
//     }
// }
// class Info {
//     constructor(public age: number) {}
//     @enumerable(false)
//     getAge() {
//         return this.age;
//     }
// }
// const info = new Info(18);
// console.log(info);
// //{age: 18}
// for (let propertyName in info) {
//     console.log(propertyName);
// }
// // "age"
// function enumerable(bool: boolean) : any {
//     return function(
//         target: any,
//         propertyName: string,
//         descriptor: PropertyDescriptor
//     ) {
//         return {
//             value: function() {
//                 return 'not age'
//             },
//             enumerable: bool
//         }
//     };
// }
// class Info {
//     constructor(public age: number) {}
//     @enumerable(false)
//     getAge() {
//         return this.age
//     }
// }
// const info = new Info();
// // 'not age'
// console.log(info.getAge());
/**
 * 访问器装饰器
 */
// function enumerable(bool: boolean) {
//     return function(
//         target: any,
//         propertyName: string,
//         descriptor: PropertyDescriptor
//     ) {
//         descriptor.enumerable = bool
//     }
// }
// class Info {
//     private _name: string;
//     constructor(name: string) {
//         this._name = name
//     }
//     @enumerable(false)
//     get name() {
//         return this._name
//     }
//     // error 不能向多个同名的 get/set 访问器应用修饰器
//     // @enumerable(false)
//     // set name(name) {
//     //     this._name = name
//     // }
// }
/**
 * 属性装饰器
 */
// function printPropertyName(target: any, propertyName: string) {
//     console.log(propertyName);
// }
// class Info {
//     @printPropertyName
//     name: string;
//     @printPropertyName
//     age: number
// }
/**
 * 参数装饰器
 */
function required(target, propertName, index) {
    console.log("\u4FEE\u9970\u7684\u662F".concat(propertName, "\u7684\u7B2C").concat(index + 1, "\u4E2A\u53C2\u6570"));
}
var Info = /** @class */ (function () {
    function Info() {
        this.name = "Lee";
        this.age = 18;
    }
    Info.prototype.getInfo = function (prefix, infoType) {
        return prefix + " " + this[infoType];
    };
    __decorate([
        __param(1, required)
    ], Info.prototype, "getInfo");
    return Info;
}());
var info = new Info();
//修饰的是getInfo的第2个参数
info.getInfo("Heiheihei", "age");
{
    // 设置为true的话，编辑器会根据tsconfig.json的配置重新生成文件
    "compileOnSave";
    true,
        // 在编译时只编译包含在files中的文件
        "files";
    ["./src"],
        // 可以指定编译的路径
        "include";
    ["./src/**/*"],
        // 除了这个指定的文件外都编译
        "exclude";
    ["./src/one"],
        "compilerOptions";
    {
        // 编译的版本目标
        "target";
        "Es6",
            // 用于指定要包含在编译中的库文件
            "lib";
        [],
            // 表示的是输出的文件，编译后文件存放的位置
            "outDir";
        "",
            // true,注释就会被移除
            "removeComments";
        false;
    }
}
