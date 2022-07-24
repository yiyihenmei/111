/*
enum的详解
 */
/*
*---数字类型的定义
数字类型
1.语法使用的是es6的语法,Uploading:Uploading
2.自动添加指定索引符号
3.我们可以像访问对象一样使用','和'[]'两种方式访问里面的值
*/
var Status;
(function (Status) {
    Status[Status["Uploading"] = 0] = "Uploading";
    Status[Status["Success"] = 1] = "Success";
    Status[Status["Falied"] = 2] = "Falied";
})(Status || (Status = {}));
//像访问对象一样使用
console.log(Status.Falied); //0
console.log(Status['Falied']); //1
console.log(Status.Success); //2
/* 指定索引值 */
var Anmimal;
(function (Anmimal) {
    /* 猪 */
    Anmimal[Anmimal["Pig"] = 200] = "Pig";
    /* 狗 */
    Anmimal[Anmimal["Dog"] = 201] = "Dog";
    /* 猫 */
    Anmimal[Anmimal["Cat"] = 202] = "Cat";
    /* 蛇 */
    Anmimal[Anmimal["Snake"] = 203] = "Snake";
})(Anmimal || (Anmimal = {}));
console.log(Anmimal.Cat);
console.log(Anmimal['Dog']);
console.log(Anmimal.Snake);
