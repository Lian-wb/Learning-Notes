// class Person{
//     name: string = ""
//     age: number = 12
// }
// const p = new Person()
// p.name = "122"
class Student {
    // 这个time不用new一个实例类，可以作为student的属性直接调用
    static time: string = "20:00"
    static attend(){
        console.log("111");       
    }
}
console.log(Student.time);
Student.attend()
