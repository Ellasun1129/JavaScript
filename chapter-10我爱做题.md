```
(function(x){
    delete x;
    alert(x);
})(1+5)
// 函数参数无法delete删除，delete只能删除通过for in访问的属性 
// 弹出6
```
```
function getSum () {
return [...arguments].reduce((pre,cur)=>{return (pre+cur)},0)
  }
  console.log(getSum(1,2,3)) // 6
```
