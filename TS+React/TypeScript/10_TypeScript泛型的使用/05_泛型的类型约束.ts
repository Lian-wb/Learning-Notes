// 限制T，类型约束可以让泛型也不是随便传的
interface ILength{
    length: Number
}
function getLength<T extends ILength>(arg: T){
    return arg.length
}
getLength("abc")
getLength(["abc", 100])
getLength({length:100})
// getLength(100)