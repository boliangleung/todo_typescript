// index.ts
let a: number = 123;
let num: number = 0x7b;
let bools: string = "567";
// console.log(num)
const h1 = document.createElement("h1");
h1.innerHTML = "Hello, I am Lison";
document.body.appendChild(h1);
let bool: boolean = false;
/*  TODO DEMO leung */
/* 八种常见JS类型 */
/* string number  */
/* TS 补充的六种元素*/
/* 元界元素 */
/* 元组可以看做是数组的拓展，他表示已知元素的数量和类型的数组 */
let tuples: [string, number];
tuples = ["a", 2];
// "always-prefix" 要求接口名称以“I”开头
// "never-prefix" 要求接口名称不具有“I”前缀 需要配置 在tslint.json 可不设置length

interface ITuple extends Array<number | string> {
  0: string;
  1: number;
  length: 4;
}

let newArray: ITuple;
newArray = ["a", 2, "3", 4];

/* 枚举 enum类型 */
