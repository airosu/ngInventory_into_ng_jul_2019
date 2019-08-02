// ----------------------------------------------------------------

let promise = new Promise((resolve, reject) => {
  resolve('done');

  reject(new Error('Something went wrong'));
  setTimeout(() => resolve('done 2'));
});

promise.then(
  result => {
    console.log('Success', result);
  }
  // (error) => { console.log('Bad', error.message) }
);

promise.then(console.log);

promise.catch(error => {
  console.log('Bad', error.message);
});

promise
  .then(result => {
    console.log('Success', result);
  })
  .catch(error => {
    console.log('Bad', error.message);
  })
  .finally(() => console.log('After all'));

//
// load script

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}

function loadScript(src) {
  return new Promise(function(resolve, reject) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Script load error for ${src}`));

    document.head.append(script);
  });
}

let promise = loadScript(
  'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js'
);

promise.then(
  script => alert(`${script.src} is loaded!`),
  error => alert(`Error: ${error.message}`)
);

promise.then(script => alert('One more handler to do something else!'));

//
// chain promises

new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function(result) {
    console.log(result);
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then(function(result) {
    console.log(result);
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then(function(result) {
    console.log(result);
  });
