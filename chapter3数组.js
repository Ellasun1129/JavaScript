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
