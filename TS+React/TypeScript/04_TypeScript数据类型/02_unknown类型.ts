// any和unknown都接受赋值成任意类型
// unknown类型只能赋值给any和unknown类型
// any类型可以赋值给任意类型

let notSure: unknown = 4;
notSure = "maybe a string instead"; // OK
notSure = false; // OK
// let uncertain: number = notSure; // Error

// 如果不缩小类型，就无法对unknown类型执行任何操作（unknown类型变量不像any可以随意使用方法）
function getDog() {
    return '123'
}

const dog: unknown = {hello: getDog};
// dog.hello(); // Error