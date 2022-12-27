// 函数的重载：函数的名称相同，但是参数不同的几个函数，就是函数的重载
// 重载函数
function add(num1: number, num2: number): number;//没函数体
function add(num1: string, num2: string): string;
// 实现函数
function add(num1: any, num2: any): any{
    return num1 + num2
}

const result = add(20,30)
const result2 = add("abc","cde")

// 在函数的重载中，实现函数是不能直接被调用的
// add({name："why"},{age: 18})
export{}