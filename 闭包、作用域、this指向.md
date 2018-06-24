```
var flag = "window";
var object = {
    flag : "local",
    sayFlag: function(){
      alert(this.flag);
    }
}
 object.sayFlag();  //local
```
 
 
```
var flag = "window";
var object = {
  flag : "local",
  sayFlag: function(){
    return function(){
      console.log(this.flag);
    }
  }
}
object.sayFlag()() // window
```


```
var flag = "window";
var object = {
     flag : "local",
     sayFlag: function(){
      var that = this; 
        return function(){
           alert(that.flag);
          }
      }
 }
object.sayFlag()();//local
```
- 闭包变量常驻内存
```
var say = function(){
  var i = 1;
  return function sayName (){
    i++;
    console.log(i);
  }
}
var result1 = say();
result1(); //2
result1(); //3
result1(); //4
result1(); //5
```

```
function fun(n,o) {
        console.log(n)
        console.log(o)
        return {
          fun:function(m){
            return fun(m,n)
          }
        }
      }
      var a = fun(0);  a.fun(1);  a.fun(2);  a.fun(3);
      // (0 undefined)  (1,0)     (2,0)      (3,0)
      var b = fun(0).fun(1).fun(2).fun(3);
			// (0 undefined)  (1,0)     (2,1)      (3,2)
      var c = fun(0).fun(1);  c.fun(2);  c.fun(3);
			// (0 undefined)  (1,0)     (2,1)      (3,1)
```
```
改错：
1、缓存this
2、闭包存i
var obj = {
    name: " jsCoder",
    skill: ["css3","html5", "es6", "react", "angular"],
    say: function () {      
        for(var i = 0, len = this.skill.length; i< len; i++){
            setTimeout(function(){
                console.log("No." + i + this.name);
                console.log(this.skill[i]);
                console.log('--------------------------');
            },100);
        }
    }
}
obj.say();
right:
var obj = {
        name: " jsCoder",
        skill: ["css3","html5", "es6", "react", "angular"],
        say: function () {
          var that = this
          for(var i = 0, len = this.skill.length; i< len; i++){
						(function (i) {
              setTimeout(function(){
                console.log("No." + i + that.name);
                console.log(that.skill[i]);
                console.log('--------------------------');
              },100);
            })(i)
          }
        }
      }
      obj.say();
```

```
1、变量：使用但不声明：test = 4
2、写入到只读属性：writable:false、只有get如set的object
3、将属性添加至extensible为false的对象：Object.preventExtensions(testObj);
4、delete：删除变量、函数、参数、configurable为false的属性
5、重复属性、重复参数名
6、未来保留字、关键字：private、public、static、yield
7、八进制数
8、this为null或undefined时，该值不会转换为全局对象
9、eval、arguments不能用作标志符号
10、语句块中不能声明函数
11、eval内部声明变量无效
12、无法更改arguments对象的成员值
13、不允许arguments.calee
14、不允许使用width
```

```


```
