// 一个数组在TypeScript开发中，最好存放的数据类型是统一的
const names = []
const names1: Array<string> = [] //不推荐（与react中的jsx语法冲突）
const names2: string[] = [] //推荐

// 在数组中存放不同类型是不好的习惯
// names.push("abc")
// names.push(123)