// ----------------------------------------------------------------
// chaining promises to fetch data
const url = 'https://jsonplaceholder.typicode.com/';
fetch(`${url}posts/1`)
  .then(result => result.json())
  .then(post => fetch(`${url}users/${post.userId}`))
  .then(result => result.json())
  .then(user => console.log(user.name));

// ----------------------------------------------------------------
// async await

async function getName() {
  const url = 'https://jsonplaceholder.typicode.com/';
  let response = await fetch(`${url}posts/-1`);
  console.log('here');
  const post = await response.json();
  const userId = post.userId;
  response = await fetch(`${url}users/${userId}`);
  const user = await response.json();
  return user.name;
}

// ----------------------------------------------------------------
// async generators

run(function*() {
  const url = 'https://jsonplaceholder.typicode.com/';
  let response = yield fetch(`${url}posts/1`);
  const post = yield response.json();
  const userId = post.userId;
  response = yield fetch(`${url}users/${userId}`);
  const user = yield response.json();
  return user.name;
}).then(name => console.log(name));

function run(generator) {
  const iterator = generator();
  function iterate(iteration) {
    if (iteration.done) return iteration.value;
    const promise = iteration.value;
    return promise.then(p => iterate(iterator.next(p)));
  }
  return iterate(iterator.next());
}

getName()
  .then(name => console.log(name))
  .catch(error => console.log('error'));
