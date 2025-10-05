import {User} from './methodsInClasses.js';

// const UserTwo = new  User("Psam",40,"psama")

// console.log(UserTwo)

class Student extends User {
    constructor(name, age, email,grade, school){
        super(name, age, email); // calling the parent constructor
        this.grade = grade;
        this.school = school;
    }

    study(){
        return `${this.name} is in grade ${this.grade}`
    }
}

const StudentOne = new Student("phil", 22, 'phil.st.edu.knust@gmail.com' ,'5', 'KNUST');
console.log(StudentOne)
console.log(StudentOne.welcomeMessage())