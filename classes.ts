// Public: This method can be called anywhere, any time.

// Private: This method can only be called by other methods in this class.

// Protected: This method can be called by other methods in this class, or by
// other methods in child classes.

class Vehicle {
  // drive(): void {
  //   console.log("chugga chugga");
  // }

  color: string;

  honk(): void {
    console.log("beep beep");
  }
}

const vehicle = new Vehicle();
// vehicle.drive();
vehicle.honk();

/**
 * Represents a car.
 * @extends Vehicle
 */
class Car extends Vehicle {
  private drive(): void {
    console.log("vroom");
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

const car = new Car();
car.startDrivingProcess();
car.honk();
