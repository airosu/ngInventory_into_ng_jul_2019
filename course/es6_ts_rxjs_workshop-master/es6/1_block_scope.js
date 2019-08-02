// ----------------------------------------------------------------
// block scoping and hoisting and TDZ

const x = 1;
if (true) {
  var x = 2;
  console.log(x);
}
console.log(x);

// ----------------------------------------------------------------
// const mutability

const age;
const age = 29;
age = 30;

const person = {
  name: 'Andrei',
  age: 29,
};
console.log(person);
person.age = 30;
console.log(person);
person.occupation = 'engineer';
console.log(person);

person = {
  name: 'Someone else',
};

// ----------------------------------------------------------------
// global behavior

var varA = 'varA';
console.log(a);
console.log(window.a);

let letA = 'letA';
console.log(a);
console.log(window.a);

// ----------------------------------------------------------------
// looping

const arr = [];
for (var i = 0; i < 10; i++) {
  arr.push(function() {
    return i;
  });
}
console.log(i);
const arr = [];
for (const i of [0, 1, 2]) {
  arr.push(() => i);
}
console.log(
  arr.map(function(x) {
    return x();
  })
);
