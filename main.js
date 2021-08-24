var counter = function() {
  var n = 0;

  return function (number) {
    n = number === undefined ? n : number;

    return n++;
  };

}();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter(50));
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

var counting = function() {
  var n = 0;

  return {
    value(number) {
      if (number !== undefined) n = number;

      return n;
    },

    increment() {
      n++;
    },

    decrement() {
      n--;
    }
  };
}();

console.log(counting.value());
counting.increment();
counting.increment();
console.log(counting.value()); 
counting.decrement();
counting.decrement();
console.log(counting.value()); 
console.log(counting.value(10)); 
counting.decrement();
console.log(counting.value());
console.log(counting.value(50));
counting.increment();
console.log(counting.value()); 

let myPrint = function (a, b, res) {
  return `${a}^${b}=${res}`;
}

let myPow = function (a, b, callback) {
  
    let pow = function (x, n) {
      if (n !== 1) return x *= pow(x, n - 1);
        return x;
    };
  
    return callback(a, b, pow(a, b));
  };


console.log(myPow(3, 4, myPrint)); 
console.log(myPow(2, 3, myPrint)); 

function fullInfo() {
  return `${this.name} ${this.model}, ${this.engine}cc, year ${this.year}, ${this.used}`;
}

let yearNow = new Date().getFullYear();
let car = {
  engine: 2000,
  model: 'Lacetti',
  name: 'Chevrolet',
  year: 2010,
  info: fullInfo,
  get used() {
    return this.year !== yearNow ? 'used' : 'new';
  },
  set used(value) {
    if (value === 'new' && this.year < yearNow) this.year = yearNow;
  }
};
let car2 = {
  engine: 5000,
  model: 'FX50 AWD',
  name: 'Infinite',
  year: 2019,
  info: fullInfo,
  get used() {
    return yearNow - this.year ? 'used' : 'new';
  },
  set used(value) {
    if (value === 'new' && this.year < yearNow) this.year = yearNow;
  }
};

console.log(car.info()); 
car.used = 'new';
console.log(car.info()); 
car.used = 'used';
console.log(car.info()); 
console.log(car2.info()); 
car.used = 'used';
console.log(car2.info()); 


let list = [1, 13, 52, 38, 16, 9, 23, 125];
let myMax = (arg) => Math.max.apply(Math, arg);

console.log(myMax(list));

function myMul(a, b) {
  return a * b;
}

console.log(myMul(3, 4));

let myDouble = myMul.bind(null, 2); 

console.log(myDouble(2)); 
console.log(myDouble(3)); 
console.log(myDouble(4)); 

let myTriple = myMul.bind(null, 3); 

console.log(myTriple(2)); 
console.log(myTriple(3)); 
console.log(myTriple(4)); 

let notUniqNums = [1, 1, 2, 3, 4, 5, 6, 7];
let myUniq = (arr) => {
  let set = new Set();

  arr.forEach((val) => {
    set.add(val);
  });

  return set;
};
console.log(myUniq(notUniqNums))