class Vehicle {
  drive(): void {
    console.log('chugga chugga');
  }

  honk(): void {
    console.log('beep beep');
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log('vroom! vroom!');
  }
}

const car = new Car();
car.drive();
car.honk();
