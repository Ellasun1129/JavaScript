function getSum () {
				return [...arguments].reduce((pre,cur)=>{return (pre+cur)},0)
      }
      console.log(getSum(1,2,3)) // 6
