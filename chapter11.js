      function foo(){
        foo.a = function(){alert(1)};
        this.a = function(){alert(2)};
        a = function(){alert(3)};
        var a = function(){alert(4)};
      };
      foo.prototype.a = function(){alert(5)};
      foo.a = function(){alert(6)};
      foo.a(); // 6
      var obj = new foo();
      obj.a(); // 2
      foo.a(); // 1 因为new关键字执行了foo里面的语句



      function f1(){
        var tmp = 1;
        this.x = 3;
        console.log(tmp);    
        console.log(this.x)  
      }
      console.log(f1());  // 1 3 undefined (返回值为undefined)



      var arr = new Array(1 ,3 ,5)
      arr[4]='z'
      arr2 = arr.reverse()
      arr3 = arr.concat(arr2)
      alert(arr3) // z,,5,3,1,z,,5,3,1 稀松数组


      for(var i=0;i<5;++i){
        setTimeout(function(){
          console.log(i)
        },5000*i)
      }
      // 隔5秒输出一个5，因为5000*i直接运算，并没有放入异步队列



      // 使DOM元素不可见
      // display:none;
      // visibility:hidden;
      // width:0;height:0;opcity:0;



      // CSS选择器
      // id# 类. 标签p 通配符* 后代  直接子代> 交集. 并集, 伪类 child(firstChild...) empty





















