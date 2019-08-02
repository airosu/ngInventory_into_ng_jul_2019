// ----------------------------------------------------------------
// SET
const mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add('some text');
const o = { a: 1, b: 2 };
mySet.add(o);
mySet.add({ a: 1, b: 2 });

// console.log(mySet.has(1));
// console.log(mySet.has(3));
// console.log(mySet.has(5));
// console.log(mySet.has(Math.sqrt(25)));
// console.log(mySet.has("Some Text".toLowerCase()));
// console.log(mySet.has(o));

// console.log(mySet.size);

// for (let item of mySet) console.log(item);

// mySet.delete(5);
// console.log(mySet.has(5));

// console.log(mySet.size);

// ----------------------------------------------------------------
// SET and Arrays

const myArray = ['value1', 'value2', 'value3'];
const mySet = new Set(myArray);
// console.log(mySet);

// console.log(mySet.has("value1"));
// console.log([...mySet]);

// ----------------------------------------------------------------
// MAP

const myMap = new Map();

const keyString = 'a string';
const keyObj = {};
const keyFunc = function() {};

myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, 'value associated with keyObj');
myMap.set(keyFunc, 'value associated with keyFunc');

// console.log(myMap);
// console.log(myMap.size);

// for (var [key, value] of myMap) {
//   console.log(key + " = " + value);
// }

// for (var key of myMap.keys()) {
//   console.log(key);
// }

// myMap.forEach(function(value, key) {
//   console.log(key + " = " + value);
// });

// myMap.get(keyString);    // "value associated with 'a string'"
// myMap.get(keyObj);       // "value associated with keyObj"
// myMap.get(keyFunc);      // "value associated with keyFunc"

// myMap.get("a string");   // "value associated with 'a string'"
//                         // because keyString === 'a string'
// myMap.get({});           // undefined, because keyObj !== {}
// myMap.get(function() {}) // undefined, because keyFunc !== function () {}

// ----------------------------------------------------------------
// MAP and arrays

const kvArray = [['key1', 'value1'], ['key2', 'value2']];
const myMap = new Map(kvArray);

// console.log(myMap.get("key1"));
// console.log([...myMap]);

// console.log([...myMap.keys()]);
