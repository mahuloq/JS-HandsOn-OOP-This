//1,1

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  displayInfo() {
    console.log(
      `You own a ${this.make} ${this.model} from the year ${this.year}`
    );
  }
}
