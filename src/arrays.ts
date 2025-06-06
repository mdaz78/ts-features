// Implicitly typed array
const carMakers = ['ford', 'toyota', 'chevy'];

// Explicitly typed array
const stringArray: string[] = [];

// 2D Arrays
const carsByMake: string[][] = [['f150'], ['corolla'], ['camaro']];

// help with inference when extracting values
const car = carMakers[0];

// prevent incompatible values
// carMakers.push(100);

// help with map
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Multiple types in an Array
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
