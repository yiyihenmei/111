# 第一单元       初识vue3

## 一、课程简介

 Vue3: [https://v3.cn.vuejs.org/guide/introduction.html#vue-js-%E6%98%AF%E4%BB%80%E4%B9%88](https://v3.cn.vuejs.org/guide/introduction.html#vue-js-是什么)
   Vite:https://vitejs.cn/guide/
  Vue-cli: https://cli.vuejs.org/zh/guide/
  Vscode:https://code.visualstudio.com/ 

## 二、其他语言

市场上和vue并行的三大语言框架为

React：它也有一定程度的主张，它的主张主要是函数式编程的理念，你需要知道什么是副作用，什么是纯函数，如何隔离副作用，它的入侵性看似没有Angular那么强，主要因为它是软性侵入。

Anguiar：它两个版本都是强主张的，如果你用它，必须接受以下东西：

必须使用它的模块机制

必须使用他的依赖注入

必须使用它的特殊形式定义组件（这一点每个视图框架都有，难以避免）

所以Angular是带有比较强的排它性的，如果你的应用不是从头开始，而是要不断考虑是否跟其他东西集成，这些主张会带来一些困扰。

vue渐进式框架，主张就是只负责自己的事情，vue被设计为可以自底向上逐层应用。vue的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合，在不同层次可以使用不同的概念。

### 三、vue3介绍

Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。



了解vue的mvvm架构

mvvm是Model-View-Viewmodel的简称，是目前非常流行的架构模式。下面是vue的一个比较官方的关于mvvm关系图的描述。

![](C:\Users\1\Desktop\笔记整理\v3笔记\微信图片_20220801104415.jpg)

### vue3的优势

vue最主要的特点就是响应式机制、模板、以及对象式的组件声明语法，而3.0对这三部分都做了更改。

性能更好

体积更小

更好的ts支持

更好的代码组织

更好的逻辑抽离

更多新功能



### Vue3带来了什么

#### 1.性能的提升

打包大小减少41%

初次渲染快55%，更新渲染快133%

内存减少54%

……

#### 2.原码的升级

使用Proxy代替defineProperty实现响应式

重写虚拟DOM的实现和Tree-Shaking

……

#### 3.拥抱TypeScript

Vue3可以更好的支持TypeScript

#### 4.新的特性

1.Composition API（组合）

setup配置

ref与reactive

watch与watchEffect

provide与inject

……

#### 2.新的内置组件

Fragment

Teleport

Suspense

#### 3.其他改变

新的声明周期钩子

data 选项应始终被声明为一个函数

溢出keyCode支持作为v-on的修饰符

……

### 四、创建Vue3.0工程

##### 1.使用vue-cli创建

（1）地址：https://cli.vuejs.org/zh/guide/

``` js
查看vue/cil版本，确保@vue/cli版本在4.5.0以上
vue --sersion
安装或者升级你的@vue/cli
npm install -g @vue/cli
创建
vue create vue_test
启动
cd vue_test
npm run serve
```

##### 2.使用 vite 创建

官方文档:https://v3.cn.vuejs.org/guide/installation.html#vite

vite官方:http://vitejs.cn

什么是vite？ --新一代前端构建工具。

优势如下：开发环境中，无需打包操作，可快速的冷启动。

轻量快速的热重载（HMR）

整整的按需编译，不再等待整个应用编译完成







2.vue-cli的安装和升级

先全局下载@vue/cli脚手架，可以通过yarn或者npm安装

注意：安装或者下载的时候yarn或者npm其中任意一种，就要一直用，不能两者混合用，否则会出现丢包的情况

``` js
npm initall -g @vue/cli
#or
yarn global add @vue/cli
```

下载结束后，查看脚手架是否安装成功

``` js
vue --version
```

升级脚手架

``` js
npm update -g @vue/cli
或者
yarn global upgrade --latest @vue/cli
```

升级项目依赖

``` js
用法：upgrade[options][plugin-name]
(试用)升级Vue CLI服务及插件

选项：
    -t，--to <version>  升级<plugin-name>到指定的版本
    -f，--from <version>  跳过本地版本检测，默认插件是从此处指定的版本升级上来
    -r，--registry <url>  试用指定的registry地址安装依赖
    -all  升级所有的插件
    -next  检查插件新版本是，包括alpha/beta/rc版本在内
    -h,-help 输出帮助内容
```

创建一个项目（vue3）

1.第一步

``` js
执行创建命令
vue create 文件名

选择手动创建项目
？please pick a preset:manually select features
```

第二步选择你的项目需要的配置

``` js
? Check the features needed for your project: (Press <space> to select, <a> to toggle all, <i> to
 invert selection)
 ◉ Choose Vue version 选择vue版本
 ◉ Babel   把高级的js代码转化为浏览器能识别的js代码
 ◯ TypeScript
 ◯ Progressive Web App (PWA) Support
 ◉ Router 路由
 ◉ Vuex  vue仓库
 ◉ CSS Pre-processors css预处理
❯◯ Linter / Formatter
 ◯ Unit Testing
 ◯ E2E Testing
```

会搭建项目，以下省略。。。

拓展阅读：

``` js
新版本的vue手动添加了npx命令，也可以执行新命令进行启动辅助
1.npx vue-cli-service serve
```

vue-cli-service serve命令会启动一个开发服务器（基于webpack-dev-server）并附带开箱即用的模块热重载

项目目录简介

pajectName

|-----node_modules   项目依赖包

|-----public                 存放静态资源公共资源，不会被压缩合并

|-----favicon.ico          网站的显示图标

|-----index.html           入口的html文件

|-----src                       项目开发主要文件夹

​     |-----assets               静态文件，存放图片

​     |-----components      存放外部公共组件

​     |-----store                与vuex相关

​     |-----utils                  存放公共方法

​     |-----App.vue            根组件

​     |-----main.js              根入口文件

|-----router

​     |-----router.js   路由组件

|-----gitignore    用来配置那些文件不上传至git

|-----babel.config.js

|-----jsconfig.json

|-----package.json   项目配置和包管理文件（项目依赖和技术）

|-----README.md   项目文档，项目主要运行

|-----package.json   项目配置和信息：跨域proxy代理，一级各种插件



通过vite安装项目

1.简介一下vite

vite是一种新型的前端构建工具，能够显著提升前端开发体验，它主要由两部分组成：

一个开发服务器，它基于原生ES模块 提供了丰富的内建功能，如快速快到惊人的模块热更新（HMR）

一套构建指令，它使用Rollup打包你的代码，并且它是预配置的，可输出用于生产环境的高度优化过的静态资源。

vite意在提供开箱即用的配置，同时它的插件API和JavaScript API带来了高度的可扩展性，并有完整的类型支持。

2.兼容性

vite需要Node.js版本>=12.0.0

3.本地安装vite

``` js
npm init vite
```

然后选择vue，vue-ts 一直安装即可，直至出现以下画面

![](C:\Users\1\Desktop\笔记整理\v3笔记\2.jpg)

常用Composition API(组合式API)

1.拉开序幕的setup

1.理解：Vue3.0中一个新的配置项，值为一个函数。

2.setup是所有Composition API（组合API）“表演的舞台”

3.组件中所用到的：数据，方法等等，均要配置在setup中。

4.setup函数的两种返回值：

1.若返回一个对象，则对象中的属性，方法，在模板中均可以直接使用。（重点关注！）

``` js
<template>
<!-- vue3不需要根组件的包过，可以直接使用 -->
    <h1>学习召唤师峡谷对决</h1>
    <h2>姓名:{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <button @click="persionInfo">个人信息</button>
</template>

<script lang="ts">
export default {
    setup(){
    let name="提莫"
    let age=18
    const persionInfo=()=>{
      alert(`我是${name},我${age}`)
    };
 return {
      name,
      age,
    }
</script>

```

![3](C:\Users\1\Desktop\笔记整理\v3笔记\3.png)

![](C:\Users\1\Desktop\笔记整理\v3笔记\4.png)

2.若返回一个渲染函数：则可以自定义渲染内容。（了解）

``` js
<template>
<!-- vue3不需要根组件的包过，可以直接使用 -->
    <h1>学习召唤师峡谷对决</h1>
    <h2>姓名:{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <button @click="persionInfo">个人信息</button>
</template>

<script lang="ts">
import {h} from "vue";  //自动引入
export default {
    setup(){
    let name="提莫"
    let age=18
    const persionInfo=()=>{
      alert(`我是${name},我${age}`)
    };

 // setup返回值返回一个函数  标签里的内容优先展示
 return()=>h('h1','我是一个内容')
</script>
```



注意：1.尽量不要与Vue2.x配置混用

vue2.x配置（data、methos、computed...）中可以访问到setup中的属性，方法。

``` js
<template>
<!-- vue3不需要根组件的包过，可以直接使用 -->
    <h1>学习召唤师峡谷对决</h1>
    <h2>姓名:{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <button @click="persionInfo">我是v3中获取信息</button>
    <button @click="getSetupInfo">我是v2获取v3的方法</button>
</template>

<script lang="ts">
export default {
    setup(){
    let name="提莫"
    let age=18
    const persionInfo=()=>{
      alert(`我是${name},我${age}`)
    };
 return {
      name,
      age,
    },
data(){
    return{
        sex:'男',
    }
},
 methods:{
     getSetupInfo(){
        console.log(this.sex);
        console.log(this.name);
        console.log(this.age);
     }
}
</script>
```

![](C:\Users\1\Desktop\笔记整理\v3笔记\5.png)

但在setup中不能访问Vue2.x配置（data、methos、computed...）

``` js
<template>
<!-- vue3不需要根组件的包过，可以直接使用 -->
  <div>
    <h1>学习召唤师峡谷对决</h1>
    <h2>姓名:{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <button @click="persionInfo">我是v3中获取信息</button>
    <button @click="getSetupInfo">我是v2获取v3的方法</button>
    <button @click="getv2info">我是v3获取v2的方法</button>
  </div>
</template>

<script lang="ts">
import {h} from  "vue";
export default{
  // 1.返回一个对象：
  setup(){
    let name='提莫'
    let age=18
    const persionInfo=()=>{
      alert(  `我是${name},我${age}`)
    }

    const getv2info=()=>{
      console.log(this,'######');
      console.log(this.sex);
      console.log(this.getSetupInfo);
      console.log(name);
      console.log(age);
    }

    return{
      name,
      age,
      persionInfo,
      getv2info
    }
  },
}
</script>

setup()中是没有this指向的
```

![](C:\Users\1\Desktop\笔记整理\v3笔记\6.png)

如果有重名，setup优先。

2.setup不能是一个async函数因为返回值不再是return的对象，而是promise，模板看不到return对象中的属性。（后期也可以返回一个Promise实例，但需要Suspense和一步组件的配合）

2. setup 入口

- 为了开始使用组合式 API，我们首先需要一个可以实际使用它的地方。在 Vue 组件中，我们将此位置称为 setup。

- 类型：Function
  setup 函数是一个新的组件选项。它作为在组件内部使用组合式 API 的入口点。

- 调用时间
  在创建组件实例时，在初始 prop 解析之后立即调用 setup。在生命周期方面，它是在 beforeCreate 钩子之前调用的。

- 模板使用
  如果 setup 返回一个对象，则该对象的属性将合并到组件模板的渲染上下文中

- 参数
  setup 选项是一个接收 props 和 context 的函数，我们将在之后进行讨论。此外，我们将 setup 返回的所有内容都暴露给组件的其余部分 (计算属性、方法、生命周期钩子等等) 以及组件的模板。



Vue3 和 vue2 的对比

createApp

main.js

``` js
vue3：
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");
// vue2的new Vue在v3变成了 createApp


把createApp(App).use(store).use(router).mount("#app");拆开写
// 函数调用
const app=createApp(App)
console.log(app);
app.mount('#app')


vue2：
import Vue from 'vue'
import App from "./App.vue";
import router from "./router";
import store from "./store";

const vm=new Vue({
    render:h=>h(App)
})
vm.$mount('#app')

总结：
1.vue3是声明函数式调用，而不是构造函数，创建实例
2.绑定方式不一样
3.渲染没有显示的render渲染
4.vue3的语法不向下兼容，两个语法不要混着来

引入的不再是Vue构造函数了，引入的是一个名为createApp的工厂函数
```

- 在 2.X 版本中创建一个 vue 实例是通过 new Vue()来实现的，到了 3.X 中则是通过使用 createApp 这个 API 返回一个应用实例，并且可以通过链条的方式继续调用其他的方法
- 传递给 createApp 的选项用于配置根组件。当我们挂载应用时，该组件被用作渲染的起点。

ref函数

- 接受一个内部值并返回一个响应式且可变的 ref 对象。ref 对象仅有一个 .value property，指向该内部值。
- ref 可以定义基本数据类型（字符串 数字 布尔值 ） 和 数组
- 注意：使用 ref 定义的变量在模版中用插值语句直接使用，因为 ref 方法定义的变量本质上是一个对象，所以在 setup 函数中使用的时候需要加上.value
- 我们也可以定义一个函数来修改 num 的值：
- 注意：不管是 ref 还是函数都需要 return 出去才能在模版中使用



作用：定义一个响应式的数据

语法：const xxx=ref(initValue)

创建一个包含响应式的数据引用对象（reference对象，简称ref对象）。

JS中操作数据：xxx.value

模板中读取数据：不需要.value,直接：<div>{{xxx}}</div>>

备注：

接收的数据可以是：基本类型、也可以是对象类型。

基本类型的数据：响应式依然是靠Object.defineProperty（）的get与set完成的

对象类型的数据：内部“求助”了Vue3.0中的一个新函数-----reactive函数，原理是es6的新方式.proxy

注释理解：

ref包裹的数据最终为对象，是refimpl，拆分开来说，即为reference（引用）.implement（实现），简称：引用对象

注意点：当vue3渲染的时候检测到你是用ref包裹，自动将value解析出来



reactive函数（reactive响应式）

作用：定义一个对象类型的响应式数据（基本类型不要用它，要用ref函数）

语法：const 代理对象=reactive（源对象）接受一个对象（或数组），返回一个代理对象（Proxy的实例对象，简称proxy对象）

reactive定义的响应式数据是“深层次的”。

内部基于ES6的Proxy实现，通过代理对象操作源对象内部数据进行操作。





