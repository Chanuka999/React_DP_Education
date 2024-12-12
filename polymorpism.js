class animal{
    constructor(){
        console.log("animal created");
        
    }

    makeSound(){
        console.log("animal generaly makesound");
        
    }
}

class Dog extends animal{
    constructor(){
        super();
        console.log("a dog is created");
        
    }

    makeSound(){
        console.log("dog is bark");
        
    }
}

class cat extends animal{
    constructor(){
        super();
        console.log("A cat is created");
        
    }

    makeSound(){
        console.log("cat...meow..meow");
        
    }
}

//const ani = new animal;
const d1 = new Dog;
d1.makeSound();
const c1 = new cat;
c1.makeSound();

