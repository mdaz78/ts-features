const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

type Drink = [string, boolean, number];

const pepsi = ["brown", true, 40]; // This is an array
const coke: Drink = ["brown", true, 40];

pepsi[0] = 40;
