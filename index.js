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

let testObject = {
  name: "John",
  testFunc: function () {
    console.log(this.name);
  },
  testArrow: () => {
    console.log(this.name);
  },
  testArrowBind: () => {
    console.log.bind(this)(this.name);
  },
};
