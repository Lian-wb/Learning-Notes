// 通常情况下，在定义一个函数时，会给参数加上类型注解
function foo(message: string){

}

const names = ["abc", "cba", "nba"]
// item根据上下文环境可以推导出类型注解，所以可以不添加
names.forEach(function(item){
    console.log(item.split(""));
})