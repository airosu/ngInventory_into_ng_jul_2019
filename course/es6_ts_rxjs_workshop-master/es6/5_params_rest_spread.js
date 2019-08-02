// ----------------------------------------------------------------
// default parameters
function add(a, b = 1) {
  return a + b;
}
  
console.log(add(4, 5));
console.log(add(4));

// ----------------------------------------------------------------
// rest params

function doSomething(a,b, ...rest) {
  console.log(a);
  console.log(b);
  console.log(rest);
}

doSomething(1,2,3,4,5);

function doSomething(a,b, ...rest, c){} // error; rest must be the last in param list

// ----------------------------------------------------------------
// rest items

const arr = [1, 2, 3, 4, 5];

const [,, ...arr1] = arr;

console.log(arr1);


// ----------------------------------------------------------------
// rest params destructuring

function doSomething(a,b, ...[c,d,e]){
  console.log(a);
  console.log(b);
  console.log(c,d,e);
}

doSomething(1,2,3,4,5);

// ----------------------------------------------------------------
// spread for functions

function logNumbers(a, b, c) {
  console.log(a)
  console.log(b)
  console.log(c)
}

const array = [1,2,3];

logNumbers(...array);

// ----------------------------------------------------------------
// spread for arrays

const array = [1,2,3];

console.log([...array, 4, 5]);

spread for objects - babel

const obj1 = {a: 'a', b: 'b'};
const obj2 = {c: 'c', ...obj1};

console.log(obj2);

// ----------------------------------------------------------------
// replacement for apply
var args = [0, 1, 2];
logNumbers.apply(null, args);

// ----------------------------------------------------------------
// array operations
const arr1 = [1,2,3];
const arr2 = [2,3,4];

const arr3 = [...arr1, 8, ...arr2];
console.log(arr3);

// ----------------------------------------------------------------
// copy arrays

arr4 = [...arr1];