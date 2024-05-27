interface Vehicle extends Reportable {
  name: string;
  year: number;
  broken: boolean;
}

interface Reportable {
  summary: () => string;
}

const oldCivic: Vehicle = {
  name: "civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const aDrink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(aDrink);
