function foo(): never{
    // 死循环
    while(true){

    }
}

function bar(): never{
    throw new Error()
}    

// never到底应用在什么场景
// 封装一个核心函数
function handle(message: string | number){
    switch(typeof message){
        case 'string':
            console.log("string处理方式处理message")
            break
        case 'number':
            console.log("number处理方式处理message")
            break    
        default: 
            const check: never = message
    }
}
handle("abc")
handle(123)
// handle(true)
// 当配置到函数中无法处理的类型时，会根据never无法赋值报错，从而提醒程序员在函数中增加处理该类型的代码块case