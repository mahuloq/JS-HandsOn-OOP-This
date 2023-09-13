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

class ElectricCar extends Car {
  constructor(make, model, year, batteryLife) {
    super(make, model, year);
    this.batteryLife = batteryLife;
  }
  displayInfo() {
    console.log(
      `You own a ${this.make} ${this.model} from the year ${
        this.year
      }. The average battery life is ${"100 miles"}`
    );
  }
}

class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
  stats() {
    console.log(
      `The students name is ${this.name} they are ${this.age} and in the ${this.grade}th grade`
    );
  }
  logStats = () => {
    console.log(
      `The students name is ${this.name} they are ${this.age} and in the ${this.grade}th grade`
    );
  };
}
//this value inside a regular function is dynamic and depends on the invocation. But this inside the arrow function is bound lexically and equals to this of the outer function
let test1 = new Student("James", 18, 12);
