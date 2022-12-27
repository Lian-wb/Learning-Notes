// 参数顺序： 必传参数 - 有默认值参数 - 可选参数
function foo1(x: number, y: number = 100){
    return x+y
}
foo1(20)