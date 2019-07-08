// index.ts
let a: number = 123;
let num: number = 0x7b;
let bools: string = "567";
// console.log(num)
const h1 = document.createElement("h1");
h1.innerHTML = "Hello, I am boliangleung";
document.body.appendChild(h1);
let bool: boolean = false;
/*  TODO DEMO leung */
/* 八种常见JS类型 */
/* string number  */

/* TS 补充的六种元素*/
/* 元界元素 */
/* 1元组可以看做是数组的拓展，他表示已知元素的数量和类型的数组 */
let tuples: [string, number];
tuples = ["a", 2];
// tuples = ["a", 2, 3]; // 2,6版本前不会报错 2.6的时候 会报错
// "always-prefix" 要求接口名称以“I”开头
// "never-prefix" 要求接口名称不具有“I”前缀 需要配置 在tslint.json 可不设置length

interface ITuple extends Array<number | string> {
  0: string;
  1: number;
  length: 4;
}

let newArray: ITuple;
newArray = ["a", 2, "3", 4];

/* 2枚举 enum类型 */
enum enmuList {
  BOLIANG = 1,
  HONGMEI = 2,
}
window.console.log(enmuList[1]);
window.console.log(enmuList.BOLIANG);
//
/* */
// tslint:disable-next-line:no-console
window.console.log("我是枚举 enum ");

/* 3any 任意类型 */
let leungAny: any;
leungAny = 123;
leungAny = "456";
leungAny = false;
/* 不要滥用any ,如果任何值都用any类型，那么typescript将会失去它的意义 */

/* 4void  表示没有任意类型 这个是返回的结果 是void型 和never不一样 网上结果是可以null和underfined是能赋值给void 但是我操作的时候 null不行*/

const consoleText = (text: string): void => {
  window.console.log(text);
  return undefined;
};
window.console.log(consoleText("3131"));

/* 5nerver 永不存在的值的类型 总会抛弃异常或根本不会有返回值的函数表达式的*/
const errorNever = (message: string): never => {
  throw new Error(message);
};
errorNever("456");

const foreverE = (): never => {
  while (true) {}
};
// tslint:disable-next-line:max-line-length
/* foreverE也是根本不会有返回值的函数，它和之前讲 void 类型时的consoleText函数不同，consoleText函数没有返回值，是我们在定义函数的时候没有给它返回值，
而infiniteFunc是死循环是根本不会返回值的，所以它们二者还是有区别的。 */

/*
6unknown类型
需要通过基于控制流的类型断言来缩小范围，否则不能对它进行任何操作
*/

/* 拓展阅读 */
/* 交叉类型 & */
const merge = <T, U>(arg1: T, arg2: U): T & U => {
  let res = {} as T & U; // 这里指定返回值的类型兼备T和U两个类型变量代表的类型的特点
  res = Object.assign(arg1, arg2); // 这里使用Object.assign方法，返回一个合并后的对象；
  // 关于该方法，请在例子下面补充中学习
  return res;
};
const info1 = {
  name: "lison",
};
const info2 = {
  age: 18,
};
const lisonInfo = merge(info1, info2);

window.console.log(lisonInfo.age); // error 类型“{ name: string; } & { age: number; }”上不存在属性“address”

/* symbol 前面不可加New 关键字 直接调用即可创建一个独一无二的symbol类型的值*/
