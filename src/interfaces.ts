// Anytime we create an interface we are creating a new type
// Start with a capital letter
interface Vehicle {
  name: string;
  year: number;
  broken: true;
}

const oldCivic: Vehicle = {
  name: 'civic',
  year: 2000,
  broken: true,
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
};

printVehicle(oldCivic);
