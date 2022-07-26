/* 抽象类：提供其他类继承的基类，不能直接而背实例化
abstract
抽象方法不能图例抽象类使用ts
 */

// abstract class Rabbit{
//     name:string
//     // age:number
//     constructor(name:string){
//         this.name=name
//     }
// 方法"getName"不能具有实现，因为它标记为抽象
// abstract getName(){

// }
//     abstract getName():string
//     getName():string{
//         return this.name
//     }
// }
// 狗类继承 动物类
// class Dog extends Rabbit {
//     constructor(name: string) {
//         super(name)
//     }
// }

// 无法创建爱你抽象类的实例
// let Pq=new Dog('小白兔')
// console.log(Pq.name);

// class Animal{
//     name:string
//     constructor(name:string){
//         this.name=name
//     }
//     abstract eat():string //报错：抽象方法只能出现在抽象类中。
// }

/* 只能被继承，不能拿被实例化 */
// abstract class Animal{
//     name:string
//     constructor(name:string){
//         this.name=name
//     }
//     abstract eat():string
// }
// let a=new Animal('小明')

// class Dog extends Animal{
//     constructor(name:string){
//         super(name)
//     }
// }
// // 派生类中具体实现抽象方法
// eat():string{
//     return this.name
// }

interface IAnimal {
    name: string
    eat(): string
}

class Animal implements IAnimal {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    eat(): string {
        return ''
    }
}

let p1 = new Animal('小狗', 12)
console.log(p1);




