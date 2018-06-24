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


```

```


```

```


```
