// tuple元组：多种元素的组合

// 1.数组的弊端: 不确定取出的数组元素是什么类型，
const info: any[] = ["why", 18, true]
const name = info[0].length
// 此时name是any类型

// 2.元组特点：知道每个元素的类型
const info2: [string,number,number] = ["abc",18,1.88]
const name1 = info2[0]
// 此时name1是string


export {}