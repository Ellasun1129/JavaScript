
^ - 开始  
$ - 结束  
'*' - 0次或多次  
'+' - 1次或多次  
? - 0次或一次  
. -  除 "/n" 外任何字符  
/d - 数字  
/D - 非数字  
/s - 空白  
/S - 非空白   
\w - 字母、数字、下划线  
\W - 除字母、数字、下划线  
//g - 全局匹配  
//i - 不区分大小写匹配  
{n} - 重复n次  
{m,n} - 至少重复m次，最多重复n次  
{m,} - 至少重复m次  

USD美元
```
/^\$\d{1,3}(,\d{3})*(\.\d{2})?$/.test(str)
```
获取 url 参数
```
//    获取 url 参数
    function getUrlParam(sUrl, sKey) {
        var arr={};
        sUrl.replace(/\??(\w+)=(\w+)&?/g,function(match,p1,p2){
            if(!arr[p1]){
                arr[p1]=p2
            }else {
                arr[p1]=[...arr[p1], ...p2]
            }

        })
        // 没有传key，返回所有，传则返回对应value
        if(!sKey){
          return arr
        }else{
            for(var ele in arr){
                if(ele==sKey){return arr[ele]}
            }
            return ""
        }
    }

console.log(getUrlParam('/getPmsPurchaseOrderLogsById?_search=false&nd=1529050301767&pageSize=50&page=3&sidx=&sord=asc&id=218947', 'page')) // 3
```
验证手机号
```
        //验证手机号
        function CheckMobilePhone(Mobile) {
            var exe = /(^1[3|5|8|4|7|6|9][0-9]{9}$)/;
            if (!Mobile) return false;
            return exe.test(Mobile);
        }

console.log(CheckMobilePhone('18111891129')) // true
```
邮箱
```
^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$
```
