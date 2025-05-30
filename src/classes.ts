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

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

const car = new Car(4, 'red');
console.log(car.color);
console.log(car.wheels);
car.startDrivingProcess();
car.honk();
