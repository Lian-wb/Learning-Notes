// 1、函数作为参数时，在参数中如何编写类型
function foo(){
}
function bar(fn: ()=>void){
    fn()
}
bar(foo)

// 2、定义常量时，编写函数的类型
type AddFnType = (a1: number, a2: number) => number
// 标注参数和返回值类型时，参数要带上形参名
const add: AddFnType = (num1: number, num2: number) => {
    return num1 + num2
}

