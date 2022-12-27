// this是可以被推导出来 info对象（Typescript推导出来）
const info = {
    name: "why",
    eating(){
        console.log(this.name = "eating");      
    }
}

info.eating()