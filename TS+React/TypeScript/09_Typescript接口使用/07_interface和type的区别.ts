// interface可重复，相当于属性合并。
interface IFoo{
    name: string
}
interface IFoo{
    age: number
}
// 在哪用？给Window、HTML等全局变量添加属性
interface Window{
    age: number
}
// type定义不可重复