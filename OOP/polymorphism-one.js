class Car{
    constructor(name){
        this.name = name;
    }

    modelType(){
        return 'Model of the car'
    }
}

class CarOne extends Car {  
    modelType(){
        return `${this.name} has the camry model`;
    }
}

class CarTwo extends Car{
    modelType(){
        return `${this.name} has the urus model`;
    }
}

const cars = [
    new CarOne('Toyota'), 
    new CarTwo('Lamborghini')
];

cars.forEach(car => {
    console.log(car.modelType())
})