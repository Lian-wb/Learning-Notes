interface ISwim{
    swimming: () => void
}
interface IEat{
    eating: () => void
}

// 类实现接口
class Animal{}
// 继承：只能实现单继承
// 实现：实现接口，可以实现多个接口
class Fish extends Animal implements ISwim, IEat{
    swimming(){
        console.log("Fish");  
    }
    eating(){
        console.log("Eat");    
    }
}
class Person implements ISwim{
    swimming(){
        console.log("Person");  
    }
}

// 好处：编写一些公共的API：面向接口编程
function swimAction(swimable: ISwim){
    swimable.swimming()
}
// 所有实现了接口的类对应的对象，都可以作为参数传入API
swimAction(new Fish())
swimAction(new Person())
swimAction({swimming: function(){}})