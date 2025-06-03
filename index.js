function add() {
return `something`;
}
function subtract() {

}
function multiply() {

}
function divide() {

}
function add(a, b) {
    return "something"
}
function add(a, b) {
    return  a + b;
    }
function subtract(a, b) {
  return a - b;
}
// 1) Multiply
function multiply(a, b) {
  return a * b;
}

// 2) Divide
function divide(a, b) {
  return a / b;
}

// 3) Increment
function increment(n) {
  return n + 1;
}

// 4) Decrement
function decrement(n) {
  return n - 1;
}

// 5) makeInt - parses n as an integer (base 10)
function makeInt(n) {
  return parseInt(n, 10);
}

// 6) preserveDecimal - parses n as float
function preserveDecimal(n) {
  return parseFloat(n);
}

module.exports = {
  multiply,
  divide,
  increment,
  decrement,
  makeInt,
  preserveDecimal,
};
