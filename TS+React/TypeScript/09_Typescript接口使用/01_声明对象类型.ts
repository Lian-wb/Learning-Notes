// 通过类型别名（type）来声明对象类型
// type InfoType = {name: string, age: number}

// 另外一种方式声明对象类型：接口interface
// 接口名称一般习惯在名字前面加上“I”与类型名称区分
// 接口里可以定义可选属性，也可定义只读属性
interface IInfoType{
    name: string
    age: number
    friend?: {
        name: string
    }
}
const info: IInfoType = {
    name: "why",
    age: 18 
}