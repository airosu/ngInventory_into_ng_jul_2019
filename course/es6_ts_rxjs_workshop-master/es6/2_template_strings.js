// ----------------------------------------------------------------
// expression interpolation
const server = '192.168.0.1';
const port = '8080';
const endpoint = 'some/endpoint';
const queryParams = [
  { key: 'param1', value: 'value1' },
  { key: 'param2', value: 'value2' },
];

const url1 =
  'http://' +
  server +
  ':' +
  port +
  '/' +
  endpoint +
  '?' +
  createQueryParams(queryParams);
const url2 = `http://${server}:${port}/${endpoint}?${createQueryParams(
  queryParams
)}`;

console.log(url1);
console.log(url2);

function createQueryParams(params) {
  return params.map(function(param) {
    return param.key + '=' + param.value + '&';
    // return `${param.key}=${param.value}&`;
  });
}

// ----------------------------------------------------------------
// multiline
const name = 'Andrei';
const element1 = '<div>\n' + '  <span>' + name + '</span>\n' + '</div>\n';
const element2 = `<div>
  <span>${name}</span>
</div>`;

console.log(element1);
console.log(element2);

// ----------------------------------------------------------------
// tags
const name = 'Andrei';
const name2 = 'Antal';
const theString = upp`Hello ${name} ${name2}!`;

function upp(literal, name, name2) {
  return [literal[0], name, literal[1], name2.toUpperCase(), literal[2]].join(
    ''
  );
}

console.log(theString);

// ----------------------------------------------------------------
// new string methods
var msg = 'Hello world!';

console.log(msg.startsWith('Hello'));
console.log(msg.endsWith('!'));
console.log(msg.includes('o'));
console.log('x'.repeat(3));
