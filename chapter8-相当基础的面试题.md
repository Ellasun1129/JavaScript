- js中typeof返回数据类型
 ```
 string boolean number 
 object function undefined 
 ```
- XHTML和HTML有什么区别
```
Extensible HyperText Markup Language可扩展超文本标记语言
1.结束标记
2.元素和属性：小写
3.合理嵌套
4.属性不能简写
5.img必须有title、alt
6.属性””双引号
7.注释内容中不使用使“--”
8.特殊符号用编码表示
```
- 前端页面三层
```
结构层 Html 
样式层 CSS 
交互层 JS
```
- 流览器及内核
```
Chrome Blink
opera  Blink
fireFox  gecko
IE trident
Safari  webkit
```
- 强制类型转换、隐式类型转换
```
String()/Boolean()/Number()/parseInt()/parseFloat()
-/%*、!、+‘’、if(a==b)
```
```
var a;
alert(typeof a); // undefined
alert(b); // 报错
```
```
var a = null;
console.log(typeof a); //object
000 对象
1 整数
010 浮点数
100 字符串
110 布尔
```

```
var a = new Object();
a.value = 1;
b = a;
b.value = 2;
console.log(a.value); // 2 引用类型

```
```
window.color = 'red';
var o = {color: 'blue'};
function sayColor(){
  console.log(this.color);
}
sayColor(); // red
sayColor.call(this); // red
sayColor.call(window);  // red
sayColor.call(o);  // blue
```
```
var a = 5;
function test(){
  a = 0;
  console.log(a);
  console.log(this.a); //没有定义 a这个属性
  var a;
  console.log(a)
}
test(); // 0 5 0
new test(); // 0 undefined 0 构造函数实例化对象，this指向实例化对象，无a属性，故为undefined
```
```
readyonly与disabled的区别
1、readyonly只适用于input、textarea，disabled适用于所有表单元素
2、readyonly会被提交，disabled不会提交
```
```
三种弹窗
alert()
confirm()
prompt()
```
```
(function test(){
        var a=b=5;
        console.log(a); //5
        console.log(b); //5
      })();
      console.log(a); //a is not defined(函数内部变量及时创建、销毁)
      console.log(b); //5 隐式全局变量
 ```
 ```
 var a;
var b = a * 0; // NaN
if (b == b) {
  console.log(b * 2 + "2" - 0 + 4);
} else {
  console.log(!b * 2 + "2" - 0 + 4); // 1*2+'2'-0+4=26
}
 ```
 
 ```
 <script>
    var a = 1;
</script>
<script>
    var a;
    var b = a * 0; // 0
    if (b == b) {
      console.log(b * 2 + "2" - 0 + 4); // 6
    } else {
      console.log(!b * 2 + "2" - 0 + 4);
    }
</script>
 ```
 
 ```
 var t = 10;
function test(t){
  t++;
}
test(t);
console.log(t); // 10
 ```
 
 ```
 var t = 10;
function test(test){
  t = ++test;
}
test(t);
console.log(t); // 11 隐式全局变量
 ```
```
var t = 10;
function test(test){
  t = t + test;
  console.log(t); 
  var t = 3;
}
test(t);// NaN
console.log(t);// 10
```


```
<script>
    var a = 1;
</script>
<script>
    var a;
    var b = a / 0;
    if (b == b) { // Infinity===Infinity true
      console.log(b * 2 + "2" + 4); // Infinity24
    } else {
      console.log(!b * 2 + "2" + 4);
    }
</script>
```
```
// 第1题：
function setName(){
		name="张三";
}
   setName();
   console.log(name); // "张三"
	// 第2题：
   var a=1;
   function test(){
     console.log(a);
     var a=1;
   }
   test(); // undefined
	// 第3题：
			var b=2;
         function test2(){
           window.b=3;
           console.log(b);
         }
         test2();  // 3
//  第4题：
   c=5;
   function test3(){
     window.c=3;
     console.log(c);
     var c;
     console.log(window.c);
   }
   test3(); // undefined 3
//      第5题：
var arr = [];
      arr[0]  = 'a';
      arr[1]  = 'b';
      arr[10] = 'c';
console.log(arr.length); // 11
      console.log(arr[5]); // undefined
//      第6题：
      var a=1;
      console.log(a++); // 1
      console.log(++a); //3
//      第11题：
      var foo = 1;
      function bar() {
        foo = 10;
        return;
        function foo() {}
      }
      bar();
      console.log(foo); // 1
//      第12题：
      console.log(a); //ƒ a(){}
      var a = 3;
      function a(){}
      console.log(a); // 3
//      第13题：
      function foo(a) {
        arguments[0] = 2;
        console.log(a); // 2  严格模式下 不允许更改arguments属性为1
      }
      foo(1);
//      第7题：
console.log(null==undefined); // true / ===false
console.log(typeof function(){}) //  function
 console.log(parseInt(true)) // NaN
 ```
