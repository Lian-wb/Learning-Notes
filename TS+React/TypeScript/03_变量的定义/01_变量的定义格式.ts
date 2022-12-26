// ts中声明变量可以用var let const，
// tslint中不支持var
var name: string = "why"
let age: number = 18
const height: number = 1.88

// string：TypeScript中字符串类型
// String：JavaScript的字符串包装类的类型
const message: string = "Hello"

// foo没有类型注解，但也有类型限制，这个过程称为类型推导
let foo = "foo" // 这里默认类型定下来为string了
// foo = 123 会报错

export{}