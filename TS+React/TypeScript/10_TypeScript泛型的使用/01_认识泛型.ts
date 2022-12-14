// 泛型：类型不写死，类型参数化
// 在定义这个函数时，我不决定这些参数的类型
// 而是让调用者以参数的形式告知这里的函数参数应该是什么类型
function sum<Type>(num: Type): Type{
    return num
}

// 1、调用方式一：明确的传入类型
sum<number>(20)
sum<{name: string}>({name: "why"})
sum<any[]>(["abc"])

// 2、调用方式二：类型推导
sum(50) //这里会推导成字面量类型
