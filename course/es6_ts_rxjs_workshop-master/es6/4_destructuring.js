// ----------------------------------------------------------------
// objects
let options = {
  repeat: true,
  save: false
};

let repeat = options.repeat;
let save = options.save;
    
let {repeat: repeat, save: save} = options;
let {repeat, save} = options;
let {repeat, save, stop} = options;
let {repeat, save, stop = false} = options;
let {repeat: re, save: sa, stop: st = false} = options;

let repeat;
let save;
({ repeat, save } = options);

let {repeat, save} // error -> must have initalizer
let {repeat, save} = undefined;// error -> must not be null/undefined

console.log(repeat, save);
console.log(repeat, save, stop);
console.log(re, sa, st);

// ----------------------------------------------------------------
// accesing special properties

let {length} = [1,2,3,4];
let {length} = "Some string";
console.log(length);

// ----------------------------------------------------------------
// arrays

let [one, two, three] = [1,2,3];
console.log(one, two, three);

let [, , three] = [1,2,3];
console.log(three);

nice trick - wapping variables
let a = 1;
let b = 2;

[ a, b ] = [ b, a ];

// ----------------------------------------------------------------
// lazy default

function con() {
  console.log("TEST");
  return 10;
}

// let [x = con()] = [];
let [x = con()] = [1];
console.log(x);

// ----------------------------------------------------------------
// function arguments destructuring

const animal = {
  name: 'Dog',
  sound: 'wof'
};

function makeSound(options) {
  options.name = options.name || 'animal';
  console.log(`The ${options.animal} goes ${options.sound}`)
}

function makeSound({name = 'animal', sound}) {
  console.log(`The ${name} goes ${sound}`)
}

makeSound(animal);
