class Student{
        grades = []
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
    greeting(){
        console.log(`Hello ${this.firstName}`)
    }
    addGrades(...grade){
        // console.log(grade);
        this.grades = [...this.grades, ...grade]
        // this.grades.push(grade);
        this.showGrades();
    }

    showGrades(){
        console.log(this.grades);
    }
}

let student1 = new Student("Josh","Jones");
let student2 = new Student("Brenda","Haw");

// student1.greeting();
// student2.greeting();
student1.addGrades(93, 45, 89);
student1.addGrades(25, 13, 99, 67);
student2.showGrades();

// ES6 JS Classes
class User {
    constructor(name){
        this.name = name;
        this.type = "Trial User"
    }
    // Method 1
    greet(){
        console.log("Welcome Back, " + this.name);
    }
    
    // Method 2
    status(){
        console.log('Current Status: ' + this.type);
    }
}
// Instance of the class/newobject
var anonDude = new User("Anonymous Dude");

// we can now use the instance and the . operator
// to accces the 2 methods
anonDude.greet();
anonDude.status();

// another instance of the class
var anonLady = new User("Anonymous lady");
anonLady.greet();
anonLady.status();

//anonther instance of the class
var jeff = new User("Jeff");
jeff.greet();
jeff.status();