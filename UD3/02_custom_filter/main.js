const assert = require("assert").strict;

function select(array, condition) {
  return array.filter(condition);
}

function pairs(value) {
  return value % 2 === 0;
}

function gt15(value) {
  return value > 15;
}

function lt10(value) {
  return value < 10;
}

function oddsLt10(value) {
  return !pairs(value) && lt10(value);
}

let values = [1, 2, 3, 5, 7, 13, 17, 23, 29];

// sólo pares
assert.deepStrictEqual(select(values, pairs), [2]);

// mayores que 15
assert.deepStrictEqual(select(values, gt15), [17, 23, 29]);

// menores de 10
assert.deepStrictEqual(select(values, lt10), [1, 2, 3, 5, 7]);

//impares menores de 10
assert.deepStrictEqual(select(values, oddsLt10), [1, 3, 5, 7]);

console.log("OK");
