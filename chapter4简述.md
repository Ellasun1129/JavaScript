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
