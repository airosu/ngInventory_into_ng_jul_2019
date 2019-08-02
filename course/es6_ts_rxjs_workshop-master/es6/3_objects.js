// ----------------------------------------------------------------
// object properties shorthand

const name = 'Andrei';
const age = 29;

const user1 = {
  name: name,
  age: age,
  sayHello: function() {
    console.log('Yo!');
  },
};

const user2 = {
  name,
  age,
  sayHello() {
    console.log('Yo!');
  },
};

console.log(user1, user2);

// ----------------------------------------------------------------
// computed property names

const firstName = 'first name';
const suffix = ' name';

const person = {
  [firstName]: 'Andrei',
  ['last' + suffix]: 'Antal',
};

console.log(person);

// ----------------------------------------------------------------
// Object methods - Object.is
const nan = 1 - 'a';
console.log(nan == NaN);
console.log(Object.is(nan, NaN));

// ----------------------------------------------------------------
// Object methods - Object.assign
const obj1 = {
  a: 'a',
  b: 'b',
};

const obj2 = { b: 'c' };

Object.assign(obj1, obj2);
console.log(obj1);
console.log(Object.assign({}, obj1, obj2));
console.log(obj1);

// ----------------------------------------------------------------
// Array methods -> Array.from

function f() {
  return Array.from(arguments);
}

f(1, 2, 3);

// ----------------------------------------------------------------
// Array methods -> Array.includes

var array1 = [1, 2, 3];
console.log(array1.includes(2));

var pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));
