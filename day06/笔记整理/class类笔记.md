## 类

### 1.1、ts中的类与ES6中的类相投与不同点

* 都是采用extords语法进行继承

* 在构造器中都需要首先使用super调用父类构造函数

### 1.2、类的定义

#### 1.2.1、Es6中

js中类大多数是用来继承的

原型和继承   面向对象的特点 ：  继承，多态，封装

1.声明类

```
// 声明人的类
class People {
						// 类的属性
            constructor(name, age) { // 构造器，实例化方法的时候触发
                this.name = name
                this.age = age
            }
            // 类的方法
            sport(){
                return this.name + '会运动'
            }
 }
```

2.实例化

```
let p = new People('小明',18)
```

3.调用+获取属性

```
console.log(p.sport()); //小明会运动
console.log(p.age); // 18
```

#### 1.2.2、TS中的类

**注意在声明类的时候**，**需要对类的属性的数据类型进行约束**

1.声明定义的类

```
class People {
    name: string
    age: number
    constructor(name:string,age){
        this.name = name
        this.age = age
    }
    sport():string{
        return `${this.name}会运动`
    }
}
```

2.实例化定义的类

```
let p = new People('小明',18）
```

// 注意声明类的时候约束name属性为string类型，age属性为数字类型；实例化的时候要严格按照类型传参

3调用和获取属性

```
console.log(p.sport()); //小明会运动
console.log(p.age); // 18
```

### 2.1、类的继承

#### ts中类的继承**和ES6中的继承一样，只是添加了属性的数据类型**



### 2.2、类的继承划重点

###### 子类定义属性可以用super(属性名)表示该属性

```
class Animal {
    name: string
    constructor(name){
        this.name = name
    }
    getName():string{
        return this.name
    }
}

class Dog extends Animal {
    constructor(name){
        super(name)
    }
}

let d = new Dog('哈士奇')
console.log(d.name); // 哈士奇
console.log(d.getName());// 哈士奇
```

### 2.3、类的修饰符  

定义属性的时候提供了**三种修饰符 **
public          公有，类里面、子类、类外面都可以访问 
protected   保护类型 类里面、子类可以访问  类外面不可以访问
private		私有类型 类里面可以访问，其他不行

#### 一。默认的是public

使用 public 修饰符，公有，类里面、子类、类外面都可以访问

#### 二。protected类里面、子类可以访问  类外面不可以访问

使用protected可以使用里面的子类获取到父类中的属性实现操作

#### 三。使用 private 修饰符，类里面可以访问，其他不行

私有性的  类似保护类   在外面不可以使用

包括其中的子类都不可以访问

### 3.1、静态属性和静态方法   static

#### 3.1.1静态属性

使用static修饰静态属性

```
//语法
class Animal {
    name:string
    ***********************************************
    static prop: string = '1' **********
    constructor(name:string){
        this.name = name
    }
    getName():string{
        return this.name
    }
}
```

用static定义的属性只能在类中操作，不能在实例上使用

#### 3.1.2、静态方法   static

使用static修饰静态方法

```
class Animal {
    name:string
    static prop: string = '1'
    constructor(name:string){
        this.name = name
    }
    getName():string{
        return this.name
    }
    *******************************************
    static sayHello():string{
        return 'hello'
    }
}
```

静态方法则是在方法前定义static属性，该方法不可以实例上获取

### 3.2、多态

实例不同

### 3.2.1、多态的实现

#### 父类定义一个方法不去实现，让继承他的子类去实现，每一个子类有不同的表现

1.在父类中定义一个方法，不执行任何操作。

2.在继承父类的子类中去定义这个方法，执行操作，多个子类继承一个父类，这个父类则是多态的体现

### 3.3、抽象类     abstract

**3.3.1、定义：** 

* 关键字修饰符定义

* 提供其它继承的基类  不能直接实例化

* 只能被继承  不能直接实例化

在class之前添加单词abstract  则被定义的类是一个抽象的类，该类只可以被继承无法被实例化。只能作为父类被继承使用

#### 3.3.2、抽象方法

注意抽象方法就是在方法前加上abstract属性，定义抽象方法只能在抽象类中定义。否则不能定义

### 3.4、类的类型接口 interface

在interface中定义方法和属性，在下面类创建时引入interface则必须要有里面的属性或方法。

**注意定义interface定义时，其中规定的属性类中必须定义，否则报错，没定义的属性，可以添加，不会报错**

类的类型接口也可以进行继承  使用extends进行继承其他interface或者type类型继承

## 4、总结类的纲领

![图片描述](https://img1.sycdn.imooc.com/5cf4c02400018cc216001216.jpg)

