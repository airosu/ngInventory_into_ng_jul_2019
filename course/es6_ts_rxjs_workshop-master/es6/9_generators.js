// ----------------------------------------------------------------
// generators
function* createIterator() {
  yield 1;
  yield 2;
  yield 3;
  // return 4;
}

function* createIterator(items) {
  for (let i = 0; i < items.length; i++) {
    yield items[i];
  }
}

let iterator = createIterator([1, 2, 3]);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// for all further calls
console.log(iterator.next());

// ----------------------------------------------------------------
// generators ans itertors

let collection = {
  items: [],
  *[Symbol.iterator]() {
    for (let item of this.items) {
      yield item;
    }
  },
  push: function(value) {
    this.items.push(value);
  },
};

collection.push(1);
collection.push(2);
collection.push(3);

for (let x of collection) {
  console.log(x);
}

// ----------------------------------------------------------------
// passing arguments to generators

function* createIterator() {
  let first = yield 1;
  let second = yield first + 2;
  yield first + 3;
}

let iterator = createIterator();

console.log(iterator.next());
console.log(iterator.next(4));
console.log(iterator.next(5));
console.log(iterator.next());

// ----------------------------------------------------------------
// generator delegation

function* createNumberIterator() {
  yield 1;
  yield 2;
  return 3;
}

function* createRepeatingIterator(count) {
  for (let i = 0; i < count; i++) {
    yield 'repeat';
  }
}

function* createCombinedIterator() {
  let result = yield* createNumberIterator();
  yield* createRepeatingIterator(result);
}

var iterator = createCombinedIterator();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

for (let x of iterator) {
  console.log(x);
}
