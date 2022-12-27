// 实现方式一：联合类型
// function getLength(args: string | any[]){
//     return args.length
// }

// 实现方式二：函数的重载
function getLength(args: string): number;
function getLength(args: any[]): number;
function getLength(args: any): number{
    return args.length
}

// 逻辑简单，能用联合尽量联合