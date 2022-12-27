type Method = 'GET' | 'POST'
function request(url: string, method: Method){}

const options = {
    url: "https://www.zijie.cn",
    method: "POST"
}

// 这里会不能将options的method传给request，因为这里的POST是字符串类型
// request(options.url, options.method)

// 第一种方法,给options标注以下类型 options：Request
// type Request = {
//     url: string, 
//     method: Method
// }
// const options: Request = {
//     url: "https://www.zijie.cn",
//     method: "POST"
// }

// 第二种方法,使用类型断言,缩小类型区域
// request(options.url, options.method as Method)

// 第三种方法 给options做一下类型推理
// const options = {
//     url: "https://www.zijie.cn",
//     method: "POST"
// } as const

export {}