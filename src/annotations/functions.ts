const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  throw new Error(message);
};

// call every function
console.log(add(1, 2));
console.log(subtract(1, 2));
console.log(divide(1, 2));
console.log(multiply(1, 2));
console.log(logger('Hello'));
console.log(throwError('Error'));
