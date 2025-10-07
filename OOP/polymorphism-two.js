// The code below makes use of the following OOP principles
// Inheritance
// Polymorphism
// encapsulation
// method overriding


// create a parent class
class Animal {
    constructor(name, animalType){
        this.name = name;
        this.animalType = animalType;
    }

    makeSound(sound){
        return `${this.name}, a ${this.animalType}, ${sound}`
    }
}

// child class inheriting from parent class 
class Cow extends Animal{
    makeSound(){
        // inherits the props name, animalType and the makeSound method
        return super.makeSound('moos')
    }
}

class Dog extends Animal{
    makeSound(){
        return super.makeSound('barks')
    }
}

const animals = [new Dog('Harper', 'dog'), new Cow('Cheezy', 'cow')];

animals.forEach(animal => {
    console.log(animal.makeSound())
})