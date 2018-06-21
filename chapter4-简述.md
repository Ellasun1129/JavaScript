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
- debounce
```
var debounce = function(action, delay) {
    var timer = null;
    return function() {
        var context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function() {
            action.apply(context, args)
        }, delay);
    }
}
```
- BFC
```
(Block formatting context)   "块级格式化上下文"   独立的渲染区域
触发：
1)根元素 
2)脱标(float为let或right/position为absolute或fixed) 
3)overflow不为visible
4)display为inline-block, table-cell, flex
```
- HTTP请求方式
```
GET获取
POST提交
PUT修改
DELETE删除
OPTIONS允许客户端查看服务器的性能。
TRACE回显服务器收到的请求，主要用于测试或诊断。
```
- IP
```
Internet Protocol网络协议
ip地址使用32位地址，以点分十进制表示，如192.168.0.1。
```
- webpack代码打包
```
1)去除不必要的插件
2)提取第三方库
3)代码分割require.ensure(dependencies, callback, chunkName)
4)设置缓存MD5加密的chunkhash
```
- 共20阶台阶，一次可以走1步或者2步，总共多少种办法
```
分析： 
根据走2步的不同情况分析，最少一个2步都不走，最多为n/2个
台阶数1 2 3 4 5
走法  1 2 3 5 8
fib数 2 3 4 5 6
故台阶数为20时，是fib(21)
结论：斐波那契
function getFib(n){
  if(n===1||n===2){
    return 1;
  }
  return getFib(n-1)+getFib(n-2);
}
console.log(getFib(21)) // 10946
```
- 物理地址和逻辑地址
```
物理地址是内存中存储单元的绝对地址，逻辑地址（虚拟地址）是相对地址。
```
- http长度限制
```
（1）url长度限制： 在Http协议中没有限制，但是服务器和浏览器对URI都有自己的长度限制Chrome:8182。
（2）post：Http协议中没有规定,可以在服务器端配置设置
（3）Cookie：大概4kb
（4）localStorage：大概5MB
```
- 回文
```
1 string.split('').reverse()
2 比较i和length-i项
```
- react和vue异同
```
共同点：
1）虚拟DOM
2）响应式和可组合性的组件
3）重点在核心库，像路由、全局状态管理来源第三方库
不同之处：
1）性能相似，react16优于Vue2.5
2）templating VS JSX语法
3）CSS 单文件组件 VS 全局引入
4）状态管理 函数式编程 VS Vuex
PS：Vue双向数据绑定：数据劫持，Object.defineProperty()监听setter和geter
```
- new一个对象的过程
```
1）隐秘的创建一个新的空对象
2）将这个函数里面的this绑定到刚才创建隐秘新对象上
3）执行函数体里面的语句
4）返回这个新的对象
```
















