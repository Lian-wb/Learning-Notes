interface IPerson{
    name: string
    age: number
    height: number
}
const info = {
    name: "why",
    age: 18,
    height: 1.88,
    address: "南京"
}
const p: IPerson = info
// 直接将内容写给p会报错，因为多了一个address
// 有了info赋值给p时会进行fressness擦除的操作后再进行类型检测
// 实际上是一种多余属性的擦除，这里p身上取不到address，相当于只读
