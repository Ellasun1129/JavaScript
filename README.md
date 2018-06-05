# JavaScript
算法
```
// 1
var str = 'i am    YouR FRiend      CAN i BORROW';
function normalizeStr (str) {
	let arr = str.split(' ')
	let arrNew = arr.filter(el=>el)
	arrNew.forEach((key,i)=>{
		arrNew[i]=key.substring(0,1).toUpperCase() + key.substring(1).toLowerCase()
	})
	return arrNew.join(' ')
}
console.log(normalizeStr(str)) //I Am Your Friend Can I Borrow
```
```
function getDivisor (m,n) {
	let a = m>n? m: n
	let b = m<n? m: n

	while(a-b!=0)
	{
		var temp = b
		b = a - b
		a = temp
	}
	return a
}
console.log(getDivisor(16,8)) // 8
```
