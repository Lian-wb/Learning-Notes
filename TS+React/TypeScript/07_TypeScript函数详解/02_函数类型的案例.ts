function calc(n1: number, n2: number, fn: (num1: number, num2: number) => number){
    return fn(n1, n2)
}
// 调用函数时传入一个匿名函数，这里不用标注参数与返回值类型
calc(20,30,function(a1,a2){
    return a1 + a2
}) 
calc(20,30,function(a1,a2){
    return a1 * a2
}) 