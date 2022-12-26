// 让参数本身是可选的
// 一个参数一个可选类型的时候，它其实本质上表示的是这个参数是 类型|undefined 的联合类型

function foo(message?: string){
    console.log(message);
}
foo();

function foo1(message: string|undefined){
    console.log(message);
}
foo1(undefined);
