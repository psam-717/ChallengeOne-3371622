// creating a user class
class User {
    // constructor initializes new objects
    // only one constructor is allowed in an object
    constructor(name, age, email, phone){
        this.name = name;
        this.age = age;
        this.email = email;
        this.phone = phone;
    }
}

// A simple user object
const userOne = new User("Marvin", 20, "mphilannorbah@gmail.com", "0244657597" )

console.log(userOne)

