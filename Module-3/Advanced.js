//problem one

function makeCounter(startFrom, incrementBy) {
  let currentCount = startFrom;
  return function () {
    currentCount += incrementBy;
    console.log(currentCount);
    return currentCount;
  };
}

let counter1 = makeCounter(50, 12.5);
// counter1();
// counter1();
// counter1();

let counter2 = makeCounter(100, 7);
//counter2();
//counter2();
//counter2();
//counter2();

//problem two

const delayMsg = (msg) => {
  console.log(`This message will be printed after a delay: ${msg}`);
};

//setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
//setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
//setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
//delayMsg("#4: Not delayed at all");
const longer = setTimeout(delayMsg, 10000, "#5 long delay");
clearTimeout(longer);

//4, 3, 2, then 1

//problem three

function printMe(msg) {
  console.log(msg);
}

let mostRecent;
const debounce = async (func, ms, msg) => {
  clearTimeout(mostRecent);
  mostRecent = setTimeout(func, ms, msg);
};

//debounce(printMe, 100, "click #1");
//debounce(printMe, 200, "click #2");
//debounce(printMe, 50, "click #3");

//problem four

let fib1 = 1,
  fib2 = 1;

const printFibonacci = () => {
  setInterval(() => {
    console.log(fib1 + fib2);
    let temp = fib1;
    fib1 += fib2;
    fib2 = temp;
  }, 1000);
};

const printFibonacciTimeouts = (limit) => {
  setTimeout(() => {
    console.log(fib1 + fib2);
    let temp = fib1;
    fib1 += fib2;
    fib2 = temp;
    if (fib1 < limit) printFibonacciTimeouts(limit);
  }, 1000);
};

//printFibonacciTimeouts(100000);

//problem five

let car = {
  make: "Porsche",
  model: "911",
  year: 1964,
  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};
//car.description(); //works
//setTimeout(car.description, 200); //fails

//in the timeout the function is passed along, but not the specific object instance it is called on

//setTimeout(() => car.description(), 200);
const otherCar = car;
otherCar.year = 1900;

const boundDescription = car.description.bind(car);
//setTimeout(boundDescription, 1000);

const thirdCar = otherCar;
thirdCar.year = 1930;
//the call is made after the shallow clone changes the year property of the car

//problem six

function multiply(a, b, c, d) {
  console.log(a * b * c * d);
}

Function.prototype.delay = function (ms) {
  return (...args) => {
    setTimeout(() => this.apply(this, args), ms);
  };
};

multiply.delay(500)(5, 5, 2, 8);

//problem seven

class DigitalClock {
  constructor(prefix) {
    this.prefix = prefix;
  }
  display() {
    let date = new Date(); //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];
    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}
const myClock = new DigitalClock("my clock:");
//myClock.start();

class PrecisionClock extends DigitalClock {
  display() {
    let date = new Date(); //create 3 variables in one go using array destructuring
    let [hours, mins, secs, millis] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds(),
    ];
    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    if (millis < 10) millis = "000" + millis;
    else if (millis < 100) millis = "00" + millis;
    else if (millis < 1000) millis = "0" + millis;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}.${millis}`);
  }
}

const betterClock = new PrecisionClock("better clock: ");
//betterClock.start();

class AlarmClock extends DigitalClock {
  constructor(...args) {
    if (args.length === 0) this.wakeupTime = Date.parse("07:00");
    else this.wakupTime = args[0];
  }
  display() {
    let now = new Date();
    super.display();
    if (
      now.getHours() === this.wakeupTime.getHours() &&
      now.getMinutes() === this.wakeupTime.getMinutes()
    )
      console.print("Wake up");
    this.stop();
  }
}

//problem eight

function orderItems(...itemNames) {
  let itemsString = "";
  for (let item in itemNames) {
    itemsString += `Order placed for: ${itemNames[item]}\n`;
  }
  return itemsString;
}

function validateStringArg(fn) {
  return function newFn(...args) {
    for (let item in args) {
      if (typeof args[item] !== "string")
        throw new Error("Needs to be a string");
    }
    return fn(args);
  };
}

// create a decorated version of the original function
const validatedOrderItem = validateStringArg(orderItems);

// try {
//   console.log(validatedOrderItem("Apple Watch")); // should run the function
// } catch (e) {
//   console.log("error occured: " + e);
// }

// try {
//   console.log(validatedOrderItem("Apple Watch", "FitBit", "Yoga Mat")); // should run the function
// } catch (e) {
//   console.log("error occured: " + e);
// }

// try {
//   console.log(validatedOrderItem(1765, "String", 285)); // should run the function
// } catch (e) {
//   console.log("error occured: " + e);
// }

// try {
//   console.log(validatedOrderItem("Drum heads", "sticks", true)); // should run the function
// } catch (e) {
//   console.log("error occured: " + e);
// }

//problem nine

function randomDelay() {
  return new Promise((res) =>
    setTimeout(
      () => {
        resolve();
      },
      Math.random() * 19000 + 1000,
    ),
  );
}
randomDelay().then(() => console.log("There appears to have been a delay."));
