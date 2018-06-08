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

// 数组去重
var a = [1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3,3,2,3,3,2,2,1,23,1,23,2,3,2,3,2,3];
var u = [...new Set(a)]  //[1, 2, 3, 23]

