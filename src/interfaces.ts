interface Vehicle {
  name: string;
  year: Date;
  broken: true;
  summary(): string;
}

const oldCivic: Vehicle = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};

printVehicle(oldCivic);
