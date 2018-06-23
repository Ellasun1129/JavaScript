// 冒泡排序
var arr = [1,4,8,2,55,77,99,3,6,7];
function sortBubble (arr) {
	for(var i = 0; i< arr.length-1; i++){
		for(var j = 0; j< arr.length-i-1; j++){
			if(arr[j]>=arr[j+1]){
				var temp = arr[j]
				arr[j] = arr[j+1]
				arr[j+1] = temp
			}
		}
	}
}
sortBubble(arr)
console.log(arr)
// 二分排序
var arr1 = [1,4,8,2,66,77,22,88,6,7];
function sortChop (arr) {
	if(arr.length<1){
		return []
	}
	let flag = arr[0]
	let little = []
	let big = []
	for(let i = 1 ; i < arr.length; i++){
		if(arr[i]> flag){
			big.push(arr[i])
		}else {
			little.push(arr[i])
		}
	}
	return sortChop(little).concat(flag, sortChop(big))
}
console.log(sortChop(arr1))
// 将数组拍平
arr = [1,2,[33,43],20,19];
arr.join(".").replace(/,/g,".").split("."); //["1", "2", "33", "43", "20", "19"]

var arr = [1, 2, 3, [3, 3, 3, [5, 4, 5, 6, 6, 7, 8]], [333, 4444]]
let newArr = []
// 定义一个函数
function flatten(arr) {
  arr.forEach(t=>{
    if (!Array.isArray(t)) {
      newArr.push(t);
     } else {
      flatten(t)
     }
  })
}
flatten(arr)
console.log(newArr) //[ 1, 2, 3, 3, 3, 3, 5, 4, 5, 6, 6, 7, 8, 333, 4444 ]

// 数组去重
var a = [1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3,3,2,3,3,2,2,1,23,1,23,2,3,2,3,2,3];
var u = [...new Set(a)]  //[1, 2, 3, 23]

let a = [1,2,3,4,5,6,5,3,2,4,56,4,1,2,1,1,1,1,1,1,56,45,56]
 function getUnitArr (list) {
   let arr = []
   list.forEach(el=>arr.indexOf(el)===-1?arr.push(el): '')
   return arr
 }
 console.log(getUnitArr(a)) // [1, 2, 3, 4, 5, 6, 56, 45]

// 寻找两个有序数组最小相同元素
const a = [1, 2, 5, 9, 10]
const b = [3, 4, 6, 9, 10]

function findElement (a, b) {
  let i = j = 0;
  while(i<a.length || j < b.length){
    if(a[i] == b[j]){
      return a[i]
    }else if(a[i] > b[j]){
      j++
    }else if(a[i] < b[j]){
      i++
    }
  }
}
console.log(findElement(a, b)) // 9

// 查找一个字符串中出现次数最多的字符，统计这个次数
var str = 'ajfewiqnnfsdajfdajfdkakfjkdsfjds'
var obj = {}
str.split('').forEach(el=>{
  if(obj[el]){
    obj[el] = obj[el]+1
  }else{
    obj[el] = 1
  }
})

let times = Math.max(...Object.values(obj))
let item = Object.keys(obj).find(el=>obj[el]==times)
console.log(obj) // { a: 4, j: 5, f: 6, e: 1, w: 1, i: 1, q: 1, n: 2, s: 3, d: 5, k: 3 }
console.log(times) // 6
console.log(item) // f
// 数组API
```
数组的方法：
1、push() return new length
2、unshift() return new length
3、pop() return 被pop出去的item
4、shift() return 被shift出去的item
5、from 将类数组对象转换为数组
function fun(){
    return Array.prototype.slice.call(arguments,0);
}

console.log(fun("白板","幺鸡","二条")) // ["白板", "幺鸡", "二条"]

function fun(){
    return Array.from(arguments);
}

console.log(fun("白板","幺鸡","二条","三桶","四饼")) // ["白板", "幺鸡", "二条", "三桶", "四饼"]
6、find()、findIndex() 回调函数 返回第一个使回调函数为true的项/项的下标
7、includes() 数组是否包含给定的值 
console.log([345,234,23,65,45].includes(23)) // true
console.log([345,234,23,65,45].includes(’23’)) // false
8、forEach() 遍历数组中的每一项
9、filter() 返回一个新数组，新数组的项是原数组中return true的项
10、map() 返回一个和原数组项数相同的项，每项都和原数组有映射关系
11、reduce() reduceRight() array1.reduce(callbackfn[, initialValue])
// Define the callback function.
function addRounded (previousValue, currentValue) {
    return previousValue + Math.round(currentValue);
    }

// Create an array.
var numbers = [10.9, 15.4, 0.5];

// Call the reduce method, starting with an initial value of 0.
var result = numbers.reduce(addRounded, 0);

console.log(result)
// Output: 27

12、entries()
var entries = ["a", "b", "c"].entries();
// entries.next().value == [0, "a"]
// entries.next().value == [1, "b"]
// entries.next().value == [2, "c"] 
13、keys()
var k = ["a", "b", "c"].keys();
// k.next().value == 0
// k.next().value == 1
// k.next().value == 2 
14、values()
var v = ["a", "b", "c"].values();
// v.next().value == "a"
// v.next().value == "b"
// v.next().value == "c" 
15、Array.isArray(object) 

16、array1.concat([item1[, item2[, . . . [, itemN]]]]) 

17、array1.every(callbackfn[, thisArg])

18、arrayObj.fill(value [ , start [ , end ] ]);

[0, 0, 0].fill(7, 1);
// Array contains [0,7,7]

[0, 0, 0].fill(7);
// Array contains [7,7,7] 
19、array1.filter(callbackfn[, thisArg])

20、array1.indexOf(searchElement[, fromIndex])

21、arrayObj.join([separator]) 

22、arrayObj.reverse() 

23、arrayObj.slice(start, [end]) 
24、array1.some(callbackfn[, thisArg])
25、arrayobj.sort(sortFunction) 

26、arrayObj.splice(start, deleteCount, [item1[, item2[, . . . [,itemN]]]])

var arr = new Array("4", "11", "2", "10", "3", "1");
arr.splice(2, 2, "21", "31");
document.write(arr);

// Output: 4,11,21,31,3,1
27、array.toString()

var arr = [1, 2,[55,[88],66], 3, 4];
var s = arr.toString();
s
"1,2,55,88,66,3,4"
```
