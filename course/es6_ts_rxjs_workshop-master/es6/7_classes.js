// simple class declaration

function PersonType(name) {
  this.name = name;
}

PersonType.prototype.sayName = function() {
  console.log(this.name);
};

let person = new PersonType('Andrei');
person.sayName();

console.log(person instanceof PersonType);
console.log(person instanceof Object);
for (var propertyName in person) {
  console.log(propertyName);
}
console.log(new person.sayName());

class PersonClass {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(this.name);
  }
}

// let person = PersonClass("Andrei");
let person = new PersonClass('Andrei');
person.sayName();

console.log(person instanceof PersonClass);
console.log(person instanceof Object);

console.log(typeof PersonClass);
console.log(typeof PersonClass.prototype.sayName);
for (var propertyName in person) {
  console.log(propertyName);
}
// console.log(new person.sayName());

// ----------------------------------------------------------------
// function equivalent to a class

// let PersonType2 = (function() {

//     "use strict";
//     const PersonType2 = function(name) {
//         if (typeof new.target === "undefined") {
//             throw new Error("Constructor must be called with new.");
//         }
//         this.name = name;
//     }

//     Object.defineProperty(PersonType2.prototype, "sayName", {
//         value: function() {
//             if (typeof new.target !== "undefined") {
//                 throw new Error("Method cannot be called with new.");
//             }
//             console.log(this.name);
//         },
//         enumerable: false,
//         writable: true,
//         configurable: true
//     });
//     return PersonType2;
// }());

// ----------------------------------------------------------------
// accessor properties and static methods

class PersonClass {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }

  get greeting() {
    return `${this.greet} ${this.name}`;
  }

  set greeting(val) {
    this.greet = val;
  }

  static create(name) {
    return new PersonClass(name);
  }
}

const person = PersonClass.create('Andrei');
person.greeting = 'hey';
console.log(person.greeting);

// ----------------------------------------------------------------
// inheritance

class Cat {
  constructor(name) {
    console.log('Cat constructor');
    this.name = name;
  }

  purr() {
    console.log('Prrrrr');
  }

  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Lion extends Cat {
  constructor(name) {
    console.log('Lion constructor');
    super(name);
  }
  speak() {
    super.speak();
    console.log(this.name + ' roars.');
  }
}

const cat = new Cat('mitzi');
cat.speak();
const lion = new Lion('Simba');
lion.speak();
lion.purr();
