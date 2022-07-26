# 一、泛型

## 1.1、定义

* 是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性

* 标识符号**<T>**

## 1.2、泛型的使用

<T>初始使用一次  以后每次写T即可

## 1.3、泛型缺点

* 考虑当前传的参数是否包含当前属性

* toFixed  保留两位小数

* 泛型在一个接口可以定义多个泛型

* <T,U>**注：**要注意使用

## 1.4、泛型函数的类型

**可以定义泛型函数的类型**

## 1.5、泛型的约束

``` js
interface ValueWithLength {
  length: number;
}
const v: ValueWithLength = {}; // error Property 'length' is missing in type '{}' but required in type 'ValueWithLength'
```

泛型约束就是使用一个类型和`extends`对泛型进行约束，之前的例子就可以改为下面这样：

``` js
** 定义一个属性  number类型 **
interface ValueWithLength {
  length: number;
}
const getLength = <T extends ValueWithLength>(param: T): number => {
  return param.length;
};
getLength("abc"); // 3
getLength([1, 2, 3]); // 3
getLength({ length: 3 }); // 3
getLength(123); // error 类型“123”的参数不能赋给类型“ValueWithLength”的参数 
```

**keyof   检查类型**

**注：**多用在函数中使用

