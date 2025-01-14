let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ["red", "green", "blue"];
colors.push("yellow");

let nums: number[] = [1, 2, 3];
let boolean: boolean[] = [true, false, true];

// Classes
// class Car {}
// let car: Car = new Car();

// Object literal
const point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (n: number) => void = (n: number) => {
  console.log(n);
};
logNumber(5);

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates);
