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
- 跨域
```
协议、域名和端口号要完全一致，是同源。
XHR请求，必须保证同源。
1）JSONP  动态创建script标签，利用src属性，请求资源，将返回数据作为实参传入回调函数。
2）window.postMessage
3）window.name+iframe同一个window共享name(2M左右string)，创建隐藏iframe的src为目标域，来获取数据，
```
- http错误类型
```
2开头 - 成功。200OK
3开头 - 重定向。301永久移动 302临时移动 303查看其它位置 304未修改
4开头 - 请求错误。404notFound 405notAllowed
5开头 - 服务器错误。500服务器内部错误 504tiomeOut
```
