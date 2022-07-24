# typescript

# 复习

#### 1、js中的数据类型

基本数据类型: Number,String,Object,Null,Undefind,Symbol,BigInt
  复杂数据类型: Object[function,array,date...]

# 一、什么是ts

 * ts可以理解为JavaScript的超集，它是由微软公司开发的一种编程语言，可以运行在任何浏览器还有操作系统

# 二、TypeScript的发展优缺点

* 优点：
  * 增加了代码的可读性和可维护性
  * 非常包容（可以定义所有类型）
  * 拥有活跃的社区
  * 兼容性强
  * 有最新的ECMAScript标准，与时俱进
  * TypeScript 的编译步骤可以输出运行之前的错误.
* 缺点：
  * 1.有一定的学习成本，不利于前端工程师上手，需要理解接口，泛型，类，枚举类型等
  * 短期内会增加开发成本
  * 集成到构建流程需要一些工作量
  * 可能和一些库结合不是很完美

### 三、类型系统的介绍

##### 	1、分为静态语言和动态语言

   * 类型系统按照<span style="color:red">**类型检查的时机**</span>来分类
   * 动态类型就是在运行时才会报错，javascript是解释型的语言，没有编译阶段，所以属于动态类型
   * 静态类型是在编译阶段就能确定每个变量的类型，如果类型不对就会直接报错，ts的话在编译阶段就会检查每个类型属于静态类型

##### 2、如何理解强类型和弱类型的语言

强类型和弱类型语言的主要区别就是靠是否能隐式转换来分类的，ts和jacascript都属于弱类型

# 四、TS安装

全局安装

``` js
npm install -g typescript
```

检测是否安装成功命令：

``` js
tsc -v  // Version 版本号 证明安装成功
```

#### 构建第一个TypeScript文件

1、创建一个js文件

2、在文件内输入内容

3、编译代码

``` js
tsc 文件名.ts
```

#### 自动编译配置

``` js
tsc --init  // 在文件夹下自动生成一个 tsconfig.json 文件
```

# 五、ts的数据类型

### 1、数字类型(number)

	语法： let num: number = 5      
	十进制： let decLiteral: number = 6
	十六进制： let hexLiteral: number = 0xf00d
	es6的二进制：  let binaryLiteral: number = 0b1010
	es6的八进制表示法： let octalLiteral: number = 0o744
	无穷大：  let infinityNumber: number = Infinity
	无穷小：  let infinityNumber: number = -Infinity
``` js
在js中数字类型数据:Number
但是在ts中数字类型: number
let num: number = 1,
```



### 2.布尔类型(boolean)

``` js
语法： let isDone: boolean = false(true)
```

### 3.字符串类型(string)

``` js
语法：  let myName: string = '啦啦啦'
用法： let myAge: number = 20
let sentence = `My name is ${myName}, My age is ${myAge}`
在浏览器页面显示： docment.body.innerHTML = sentence
```

### 4.数组类型

``` js
1. TypeScript像JavaScript一样可以操作数组元素。 有两种方式可以定义数组。
第一种，可以在元素类型后面接上 `[]`，表示由此类型元素组成的一个数组;
第二种,是使用数组泛型，`Array<元素类型>`

*1.语法： let array: number[] = [1,2,3,4]    let arratString: string[]  = ['1','2','3']
*2.数组泛型的语法：  let arrayList: Array<number> = [1,2,3,4]  let listString: Array<list> = ['1','2','3']
```

### 5、undefined和null类型

``` js
它们既是实际的值，也是类型
*1.未定义语法： let a : undefined = undefined   
*2.空类型： let b: null = null
```

### 6、 对象类型(object)

``` js
object类型
*语法： let obj: {name: string, age: number}
	   let obj2: {name: string, age: number}
       obj = {name: '易烊千玺', age: 20}
       let info = 'My name is ${obj.name}, age is ${obj.age}'
```

### 7、元组类型(Tuple)

``` js
 数组: 合并了相同类型的对象，长度不限制
元组（Tuple）: 合并了不同类型的对象,已知长度

*1.语法： 
 	let tom: [string, number] = ['Tom', 25];
 *2.赋值或访问已知索引元素： 
 	let tom: [string, number];
    tom[0] = 'Tom';
    tom[1] = 25;		                             tom[0].slice(1); 
    tom[1].toFixed(2)
```

### 8、枚举

``` js
enum类型是对JavaScript标准数据类型的一个补充
enum Color {
    /**红色 */
    Red = 1,
    /**蓝色 */
    Blue = 2,
    /**绿色 */
    Green = 3
}
let c: Color = Color.Green;
console.log(c) // 3

语法：enum Color {
       		Red = 1,
    		Blue = 3,
   		    Yellow = 4
	}
	let c: Color = Color.Red
	console.log(c);
```

### 9、Any(any)可以赋任何值

``` js
JavaScript 的类型是灵活的，程序有时也是多变的。有时，我们在编写代码的时候，并不能清楚地知道一个值到底是什么类型，这时就需要用到 any 类型，即任意类型
let value: any;
value = 123;
value = "abc";
value = false;

我们还可以在定义数组类型时使用 any 来指定数组中的元素类型为任意类型：
const array: any[] = [1, "a", true];

注意： 不要滥用 any，如果任何值都指定为 any 类型，那么 TypeScript 将失去它的意义。所以如果类型是未知的，更安全的做法是使用unknown类型
```

### 10、 void类型

``` js
void 和 any 相反，any 是表示任意类型，而 void 是表示没有任意类型，就是什么类型都不是，这在我们定义函数，函数没有返回值时会用到：

function alertName(): void  {
    console.log('My name is void');  
}
/**
 * 如果有返回值,那么就要根据返回值进行定义,就不能定义成为void
 */
 function alertNames(): string{
    console.log('My name is void');  
    return 'My Name is string'
}

void 类型的变量只能赋值为 undefined，其他类型不能赋值给 void 类型的变量。
```

### 11、never类型

``` js
1.never类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
2.never类型是任何类型的子类型，也可以赋值给任何类型；然而，*没有*类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。
3.简单来说就是用来抛错

*1. 返回never的函数： function error(message: string): never {
    			      throw new Error(message);
			        }
	*2.推断： function fail() {
   			   return error("Something failed");
		     }
```

### 12、unknown

``` js
是ts新增类型 表示未知类型
unknown相对于any是安全

unknown和any的区别
当一个值我们不能确定它的类型的时候，可以指定它是any类型；但是当指定了any类型之后，这个值基本上是“废”了，你可以随意对它进行属性方法的访问，不管有的还是没有的，可以把它当做任意类型的值来使用

当你指定值为unknown类型的时候，如果没有通过基于控制流的类型断言来缩小范围的话，是不能对它进行任何操作的
```

### 13、交叉类型（&）

``` js
交叉类型就是取多个类型的并集，使用 & 符号定义，被&符链接的多个类型构成一个交叉类型，表示这个类型同时具备这几个连接起来的类型的特点
```

### 14、联合类型（|）

``` js
联合类型（Union Types）表示取值可以为多种类型中的一种
```

### 15、类型断言

``` js
有时候一个数据的值是多变的,并不是单一,这个时候我们就要告诉编译器,我知道我要什么,我自己检查了,不需要你检查.我自己定义他的类型

两种写法：
1. 其一是“尖括号”语法：
    尖括号写类型断言
    let someValue: any;
    someValue = 123;
    someValue = "dddd";
    let someValueLength = (<string>someValue).length
    
 2. as写法
     let someName: any;
     someName = 123
     someName = '123'
     let someNameValueLength = (someName as string).length

```







