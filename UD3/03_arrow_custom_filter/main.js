const assert = require("assert").strict;

function select(array, condition) {
  return array.filter(condition);
}

let pairs = (x) => x % 2 === 0;
let gt15 = (x) => x > 15;
let lt10 = (x) => x < 10;

let values = [1, 2, 3, 5, 7, 13, 17, 23, 29];

// sólo pares
assert.deepStrictEqual(select(values, pairs), [2]);

// mayores que 15
assert.deepStrictEqual(select(values, gt15), [17, 23, 29]);

// menores de 10
assert.deepStrictEqual(select(values, lt10), [1, 2, 3, 5, 7]);
