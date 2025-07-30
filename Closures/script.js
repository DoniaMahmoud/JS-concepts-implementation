function add(x) {
  function adder(y) {
    return x + y;
  }
  return adder;
}

const add5 = add(5);
const add10 = add(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12
