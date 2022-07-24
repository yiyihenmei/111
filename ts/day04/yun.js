// 绕开多余属性的索引
var role = {
    0: 'super_admin',
    1: 'admin'
};
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
var roleArray = ['super_admin', 'admin'];
roleArray[0] = '我要站着上课';
// 错误
// const roleCHange:RoleInfo={
//     0:"super_admin"
// };
// roleCHange[0]="admin"; //error 类型“RoleDic”中的索引前面仅允许读取
var obj = {
    123: "a",
    "123": "b" //对象文本不能具有多个名称相同的属性
};
console.log(obj); //{'123':'b'}
