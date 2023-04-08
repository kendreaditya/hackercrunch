var myName = "Max";
// console log is just a way to print the variable value
console.log(myName);
myName = "Peter"
// the myName should change in value now since
// we re-assigned the value.
console.log(myName);

// now lets try to re-assign a const variable
const birthday = "4/29/1996";
birthday = "4/30/1998";
// this would throw an error as birthday is a const 
// and const are immutable. They cannot change!
console.log(birthday);

// old way of defining javascript functions
function getIPAddress() {
    //...
}

// arrow function definition
const getIPAddress = () => {
    //..
}

// regular function
function bark(doggoName) {
    console.log(doggoName);
}

bark();

// in this case, the function will give back an undefined 
// because when we call the bark() function we do not
// pass anything into the function so nothing will print!

// now this will print out something!
bark("sparky");

const bark = (doggoName, age) => {
    console.log(doggoName);
    console.log(age);
}

bark("sparky", 7);

// let us say we have 3 javascript files:
// profile.js and users.js and app.js

//File 1 : profile.js

let status = "unverified"

const getProfileData = (profile) => {
    //.....
}

export default profile;

// this is an example of using a default export
// where we do not specify what we want to export
// export - exporting an object enables a program to use that object from a file using an import statement



// file 2: users.js

export const users = ["Jack", "Katie", "Joe", "Travis"]

export const verifyUsers = (isVerifiedUsers) => {
    //..
}

// now in users.js, did you notice for the variable users
// I added an export key word. This is also seen in the 
// verfiyUsers function as well. This is a specified export.
// we are pointing these functions and variables to be 
// exported by javascript

// file 3: app.js
// now we will import users.js and profile.js 
// into the app.js file

// note ./ usually means you are at the root directory of your 
// project (i will draw a folder structure example)
import profile from './profile.js'
import {users, verfiyUsers} from './users.js'

// inside the {} we are specifying what we are importing from
// users.js file now we can reference the function and variables
// from that file.

console.log(users); // this will output ["Jack", "Katie", "Joe", "Travis"]
verifyUsers(false) // this function will execute inside app.js

// now lets call getProfileData function from the profile.js class 
// inside the app.js class. Look at the import statements one more
// time in top of the app.js file. Notice after the "import" word 
// we give a name called profile. You can literally call this anything
// but for consistency lets stick the naming convention to the same name
// as the file name .

/* 
QUESTION - Profile is an unasisnge object (in profile.js), how can you call the function getProfileData from that object? Wouldn't you need to import it frim the profile.js file directly? 
*/

profile.getProfileData(["Peter", "Jack"]);
console.log(profile.status); // this will print out "unverified"
// as that is what the status variable is defined in the profile.js file. 

// Classes in javascript

// let us define a Student class
// in order to instantiate , create a Student class object,
// we need to define a constructor
// You can think of a constructor as a toy factory. In order
// to create the toy, the factory needs certain pieces in order
// to put the toy together. The same concept is applied here for 
// classes. The Student constructor will require certain things 
// to successfully create one instance of a Student object

class Student {
    constructor(name, grade, studentId) {
        this.name = name;
        this.grade = grade;
        this.studentId = studentId;
    }

    printStudentInfo() {
        console.log(this.name);
        console.log(this.grade);
        console.log(this.studentId);
    }
}

// now create an instance of a Student
const max = new Student("Max", 8, "133848439");
// now call the method printStudentInfo
max.printStudentInfo();


// now what does it mean to be an instance of a class? Well it 
// is not that bad to understand.
// Notice how when we created the max Student object, we passed
// in three values the name = "Max", grade = 8, and
// studentId = "133848439". Now go back into the constructor, 
// notice you see the "this" keyword. All you need to know is the
// "this" word binds those values passed into the constructor 
// to name, grade, and studentId for your max Student object

// Now back to my example, it would be super weird if every student 
// in this world was named Max and in the 8th grade and the studentId = 
// 133848439 but that is the beauty of constructors and classes. 

// the constructor allows us to instantiate or create many different types
// of students so we can have a student name Molly who is in the 9th grade
// with a student Id of 178928
// in code it looks like this:

const molly = new Student("Molly", 9, "133848439")

// Classes are just there so we can access the methods and variables
// defined inside the class itself

// Now let us go into inheritance

class HighSchoolStudent extends Student {
    constructor(name, grade, studentId) {
        super(name, grade, studentId);
        this.isHighSchoolStudent = true;
    }

    printIsHighSchoolStudent() {
        console.log(this.isHighSchoolStudent);
    }
}

// We defined a new class called HighSchoolStudent. 
// In any coding language that has object oriented programming,
// classes can have relationships with one another. 


// In this example, we will say HighSchoolStudent is the child
// and Student class is the parent. The most simple way to explain 
// inheritance is that the class that "extends" or inherits from another
// class will be able to reference the parent class methods and 
// variables. It is just like a child and mom/dad relationship. As a
// child we used to take so much from our parents like money to pay for 
// lunch or even biological traits we have taken from our parents like
// their eye color or height

// now look at the constructor and inside the constructor we see 
// a word called super. Super keyword just means go to the parent's
// constructor instead to create the object!

// Now high school student can call any method from the Student
// class since high school student is the child and Student
// is the parent

const max = new HighSchoolStudent("Max", 8, "133848439");
max.printStudentInfo();
// this will print out Max, 8, and 133848439

// you can also call methods inside yourself. 
// printIsHighSchoolStudent() is a method inside of the HighSchoolStudent
// class so you can call that as well
max.printIsHighSchoolStudent(); // will output true

// Now this is super important. If you create a Student object (parent),
// you cannot call methods from the child. It is like saying you are
// a parent and you inherited your child's height. That is backwards
// thinking. You can only inherit your parents genes. The parent does 
// not inherit from the child! 

//exampel
const peter = new Student("Peter", 6, "1234");
// this will give an error because you are a Student object aka the
// parent trying to call a method that is defined in the child class!
peter.printIsHighSchoolStudent();







