// 别名写法
// type CalcFn = (n1:number, n2:number) => number

// 接口写法
interface ICalcFn {
    (n1:number, n2:number): number
}

function calc(num1:number, num2:number, calcFn:ICalcFn){
    return calcFn(num1, num2)
}
const add: ICalcFn = (num1, num2) => {
    return num1 + num2
}
calc(20, 30, add)


