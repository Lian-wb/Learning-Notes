class Animal {
    running(){
        console.log("animal running");       
    }
}

class Dog extends Animal {
    running(){
        console.log("dog running");       
    }
}

class Fish extends Animal {
    running(){
        console.log("fish swimming");      
    }
}

function makeAction(animals: Animal[]){
    animals.forEach(animal => {
        animal.running()
    })
}

makeAction([new Dog(), new Fish()])