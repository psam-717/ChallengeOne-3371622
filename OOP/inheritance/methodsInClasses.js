export class User {
    constructor(name, age, email){
        this.name = name;
        this.age = age;
        this.email = email;
    }

    welcomeMessage (){
        return `Welcome, ${this.name}`
    }
}



// initializing an object
const UserOne = new User("Marvin", 20, 'mphil@gmail.com');

// console.log(UserOne.welcomeMessage())