
一：格式化string
```
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

二：最大公约数
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

三：最小公倍数（=积/最大公约数）
```
function getMultiple (m,n) {
	 let value = getDivisor(m,n)
	 return = m*n/value
}
```
四：NGE为元素右边第一个比它大的元素
```
var arr = [3,5,4,1,100,333]
function getNGE (arr) {
	let arrNew = []
	arr.forEach((el,i)=>{
		let spliceArr = [...arr]
		if(i+1==arr.length){
			arrNew[i] = -1
		}else {
			spliceArr = spliceArr.slice(i+1)
			arrNew[i] = spliceArr.find(key=>key>=el)
		}
	})
	return arrNew
}
console.log(getNGE(arr)) //[ 5, 100, 100, 100, 333, -1 ]
```
四：数字 12345678 转化成 RMB形式 如： 12,345,678
```
function turnNumToRMB (num) {
  var len = Math.ceil((num+'').length/3)
  var arr = [], _num = num
  for(var i = 0; i< len; i++){
    arr[len-i-1] = _num%1000
    _num = parseInt(_num/1000)
  }
  return arr.join(',')
}
var str = 1234567888
console.log(turnNumToRMB(str)) // 1,234,567,888
```
五：找出正整数组的最大差值
```
let arr =  [10,5,11,7,8,9]
function getMaxRange (arr) {
  return Math.max(...arr)-Math.min(...arr)
}
console.log(getMaxRange(arr)) // 6
```
六：找到提供的句子中最长的单词，并计算它的长度。
```
let str = "The quick brown fox jumping over the lazy dog"
function findLongestWord (str) {
  return str.split(' ').reduce((pre,cur)=>{
    return pre.length>cur.length? pre: cur
  })
}
console.log(findLongestWord(str),findLongestWord(str).length) //jumping 7
```
七：字体高亮函数
```
const highlight = (strings, item) => {
  return strings.split(item).join(`<span class='highlight'>${item}</span>`)
}
let str = '苹果中含有矿物质，所以多吃苹果呦'
console.log(highlight(str,'苹果')) // <span class='highlight'>苹果</span>中含有矿物质，所以多吃<span class='highlight'>苹果</span>呦
```
