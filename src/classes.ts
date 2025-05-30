class Vehicle {
  protected drive(): void {
    console.log('chugga! chugga!');
  }
  public honk(): void {
    console.log('beep beep');
  }
}

class Car extends Vehicle {
  startDrivingProcess(): void {
    this.drive();
  }
}

const car = new Car();
car.startDrivingProcess();
car.honk();
