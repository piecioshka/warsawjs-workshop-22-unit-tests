const Calculator = require('../../src/calculator');
const test = require('tape');

test('Calculator.sum', (t) => {
    t.plan(1);
    t.equal(Calculator.sum(1, 2), 3);
});

test('Calculator.minus', (t) => {
    t.plan(1);
    t.equal(Calculator.minus(1, 2), -1);
});

test('Calculator.multiply', (t) => {
    t.plan(1);
    t.equal(Calculator.multiply(1, 2), 2);
});

test('Calculator.divide', (t) => {
    t.plan(1);
    t.equal(Calculator.divide(1, 2), 0.5);
});

test('Calculator.modulo', (t) => {
    t.plan(1);
    t.equal(Calculator.modulo(1, 2), 1);
});
