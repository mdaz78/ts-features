class Vehicle {
  constructor(public color: string) {}

  protected drive(): void {
    console.log('vroom! vroom!');
  }
  public honk(): void {
    console.log('beep beep');
  }
}

const vehicle = new Vehicle('yellow');
console.log(vehicle.color);

// class Car extends Vehicle {
//   startDrivingProcess(): void {
//     this.drive();
//   }
// }

// const car = new Car();
// car.startDrivingProcess();
// car.honk();
