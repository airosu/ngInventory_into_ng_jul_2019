// ----------------------------------------------------------------
// simple examples

const sum1 = function(num1, num2) {
  return num1 + num2;
};

const sum = (num1, num2) => {
  return num1 + num2;
};

const square1 = function(value) {
  return value * value;
};
const square = value => {
  return value * value;
};

const getName1 = function() {
  return 'Andrei';
};

const getName = () => 'Andrei';

const getTempItem1 = function(id) {
  return {
    id: id,
    name: 'Temp',
  };
};
const getTempItem = id => ({ id: id, name: 'Temp' });

var materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

var materialsLength1 = materials.map(function(material) {
  return material.length;
});

console.log(materialsLength1);

// ----------------------------------------------------------------
// this binding

function Person() {
  this.age = 0;

  setInterval(function growUp() {
    console.log(this.age);
    this.age++;
  }, 1000);
}

new Person();

const myObject = {
  value: 42,
  myArrowFunction: null,
  myMethod() {
    this.myArrowFunction = function() {
      console.log(this.value);
    };
  },
};

myObject.myMethod();

myObject.myArrowFunction();

const myArrowFunction = myObject.myArrowFunction;
myArrowFunction();

// ----------------------------------------------------------------
// event handlers

var PageHandler = {
  id: '123456',
  init: function() {
    document.addEventListener(
      'click',
      function(event) {
        this.doSomething(event.type);
      },
      false
    );
    // }.bind(this), false);
  },
  // init: function() {
  //     document.addEventListener("click",
  //             event => this.doSomething(event.type), false);
  // },
  doSomething: function(type) {
    console.log('Handling ' + type + ' for ' + this.id);
  },
};

PageHandler.init();
