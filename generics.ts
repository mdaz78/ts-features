// class ArrayOfNumbers {
//   constructor(public collection: number[]) {}

//   get(index: number): number {
//     return this.collection[index];
//   }
// }

// const arrayOfNumbers = new ArrayOfNumbers([1, 2, 3]);
// const a = arrayOfNumbers.get(1);
// console.log(a);

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const arrayOfNumbers = new ArrayOfAnything<number>([1, 2, 3]);
const arrayOfStrings = new ArrayOfAnything<string>(["a", "b", "c"]);

const a = arrayOfNumbers.get(1);
const b = arrayOfStrings.get(1);

console.log({ a, b });
