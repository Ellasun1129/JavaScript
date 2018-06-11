- JS中如何判断一个对象为数组类型

方法一： instanceof
```
var arr=[];  
console.log(arr instanceof Array) //返回true
```
方法二： constructor
```
[].constructor == Array // true
{}.constructor == Object // true
true.constructor == Boolean // true
(123).constructor == Number // true
"string".constructor == String // true
```
方法三: 最简单的方法
```
Object.prototype.toString.call(arr) === “[object Array]”
```
方法四：isArray
```
Array.isArray(arr)
```
- JS中深浅拷贝
```
//浅拷贝
Object.assgin({},target)
...arr/...obj
//深拷贝
let a={name:'yy',age:26, friends: {c: 'name'}};
function deepCopy (source) {
  let result = {}
  for (let k in source) {
    result[k] = typeof source[k] ==='object'? deepCopy(source[k]) : source[k]
  }
  return result
}
console.log(deepCopy(a)) // { name: 'yy', age: 26, friends: { c: 'name' } }
//单纯只有数据的对象
var obj1 = { body: { a: 10 } };
var obj2 = JSON.parse(JSON.stringify(obj1));
```
- Flex
```
.box {
  display: flex;
  flex-direction: row; /* row-reverse | column | column-reverse*/
  flex-wrap: nowrap; /*如果一条轴线排不下，如何换行wrap | wrap-reverse*/
  flex-flow: row nowrap; /*flex-direction属性和flex-wrap属性的简写*/
  justify-content: flex-start; /*对齐方式 | flex-end | center | space-between | space-around;*/
  align-items: flex-start; /*交叉轴上对齐方式flex-end | center | baseline | stretch*/
  align-content: flex-start; /*多根轴线的对齐方式(XY)flex-end | center | space-between | space-around | stretch*/
}
.son {
  order: 0; /*数值越小，排列越靠前，默认为0*/
  flex-grow: 0; /*项目的放大比例，默认为0*/
  flex-shrink: 1; /*缩小比例，默认为1*/
  flex-basis: auto; /*在分配多余空间之前，项目占据的主轴空间*/
  /*flex: 0 1 auto;*/  /*flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。*/
  align-self: auto; /*允许单个项目有与其他项目不一样的对齐方式*/
}
```
