// 一组组合类型的方式： 联合类型
type WhyType = number | string

// 另一种组合类型的方式：交叉类型，但是没什么意义
type WType = number & string

interface ISwim{
    swimming: () => void
}
interface IFly{
    flying: () => void
}
type MyType1 = ISwim | IFly
type MyType2 = ISwim & IFly