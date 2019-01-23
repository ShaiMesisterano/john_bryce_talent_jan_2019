class Animal1 {
    constructor(age) {
        this.age = age;
    }
    printAge() {
        console.log(`My age is ${this.age}`);
    }
}

class Person extends Animal1 {
    constructor(age) {
        super(age);
    }
    increaseAge() {
        super.printAge();
        console.log(this.age + 1);
    }
}

function Animal2(age){
    this.age = age;
}

Animal2.prototype.printAge = function () { 
    console.log(`My age is:
    **************
    ${this.age}
**************`);
 }

 function Person2(age) {
     this.age = age;
 }
 Person2.prototype.increaseAge = function () { 
    console.log(this.age + 1);
  }
 Person2.prototype = new Animal2;
 Person2.constructor = Animal2;

//  let tiger = new Animal1(12);
//  tiger.printAge();
 let lion = new Animal2(22);
 lion.printAge();
 
//  let human = new Person(35);
//  human.increaseAge();
// let human = new Person2(35);
// human.increaseAge();