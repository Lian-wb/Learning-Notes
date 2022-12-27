type Person = {
    name: string
    friend?: {
        name: string,
        age?: number,
    }
}

const info: Person = {
    name: "why",
    friend: {
        name: "kobe"
    }
}

console.log(info.name);

// 如果info中没有friend会报错，因为！是在有值的情况下处理类型不对无法调用方法的问题
// console.log(info.friend!.name);

// 如果info中没有friend，info后面代码就短路，默认变为undefined
console.log(info.friend?.name);


