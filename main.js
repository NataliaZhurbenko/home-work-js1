let myLongStr = 'Lorem ipsum dolor sit amet consectetur adipisicing elit;.! Tempora nisi, totam ducimus: deserunt a recusandae?.'

let wordsList = (str, subStr) => {
  let reg = new RegExp('\\.|,|\\?|!|:|;|"', 'gui');
  let arr = str
    .replace(reg, '')
    .toLowerCase()
    .split(' ')
    .filter((arrItem) => arrItem.indexOf(subStr) > -1);
  let res = new Set();

  arr.forEach((arrItem) => {
    res.add(arrItem);
  });

  return res;
};

console.log(wordsList(myLongStr, 'lor')); 
console.log(wordsList(myLongStr, 'am')); 
console.log(wordsList(myLongStr, 'el')); 

let myDate = new Date();
let getLocalDate = (date, isSeconds = false, isISO = false) => {
  const reg = new RegExp(':\\d{2}$', 'gui');
  let res;

  if (!isISO) res = isSeconds
    ? date.toLocaleString()
    : date.toLocaleString().replace(reg, '');
  else {
    const year = date.getFullYear();
    const month = date.getMonth() + 1 < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const day = date.getDate() < 9 ? `0${date.getDate()}` : date.getDate();
    const hour = date.getHours() < 9 ? `0${date.getHours()}` : date.getHours();
    const minutes = date.getMinutes() < 9 ? `0${date.getMinutes()}` : date.getMinutes();
    const seconds = date.getSeconds() < 9 ? `0${date.getSeconds()}` : date.getSeconds();

    res = isSeconds
      ? `${year}-${month}-${day}, ${hour}:${minutes}:${seconds}`
      : `${year}-${month}-${day}, ${hour}:${minutes}`;
  }

  return res;
};

console.log(getLocalDate(myDate));
console.log(getLocalDate(myDate, true)); 
console.log(getLocalDate(myDate, false, true)); 
console.log(getLocalDate(myDate, true, true)); 
console.log(getLocalDate(new Date(123456))); 
console.log(getLocalDate(new Date(123456), true)); 
console.log(getLocalDate(new Date(123456), false, true)); 
console.log(getLocalDate(new Date(123456), true, true)); 

let getWeekDay = (d) => {
	const date = new Date(d);
  const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

  return days[date.getDay()];
}

console.log(getWeekDay('2019-01-30')); 
console.log(getWeekDay('2019-07-16')); 
console.log(getWeekDay('2019-07-27')); 

let getLocalDay = (d) => {
	const date = new Date(d);
  let day = date.getDay();

  if (day == 0) {
    day = 7;
  }

  return day;
}

console.log(getLocalDay('2021-08-30'));
console.log(getLocalDay('2021-08-31'));

let formatter = new Intl.DateTimeFormat("uk-UA", {
  year: "numeric",
  month: "long",
  day: "numeric"
});

let getDateAgo = (d, days) => {
  const date = new Date(d);

  date.setDate(date.getDate() - days);
  
  return date.toLocaleString().replace(/(\d.*),\s+(\d.*)/gu, '$1');
};

console.log(getDateAgo('2021-08-30', 1)); 
console.log(getDateAgo('2021-08-30', 2)); 
console.log(getDateAgo('2021-08-30', 365)); 

let Car = function (engine, model, name, year) {
  this.engine = engine;
  this.model = model;
  this.name = name;
  this.year = year;
};

Object.defineProperties(Car.prototype, {
  used: {
    get () {
      const yearNow = new Date().getFullYear();

      return yearNow - this.year > 1 ? 'used' : 'new';
    },
    set(value) {
      const yearNow = new Date().getFullYear();

      if (value === 'new' && this.year < yearNow) this.year = yearNow;
    }
  }
});

Car.prototype.info = function () {
  return `${this.name} ${this.model}, ${this.engine}cc, year ${this.year}, ${this.used}`;
};

let car = new Car(2000, 'Lacetti', 'Chevrolet', 2010);
let car2 = new Car(5000, 'FX50 AWD', 'Infinite', 2019);

console.log(car.info()); 
car.used = 'new';
console.log(car.info()); 
car.used = 'used';
console.log(car.info()); 
console.log(car2.info()); 
car.used = 'used';
console.log(car2.info()); 


let testPerformance = (iterations, func) => {
  let time = Date.now();

  if (typeof func === 'function') for (let i = iterations; i--;) func();

  return Date.now() - time;
};


function test1() {
  let str = myLongStr;

  while (str.indexOf('o') !== -1) str = str.replace('o', '');
  while (str.indexOf('a') !== -1) str = str.replace('a', '');
  while (str.indexOf('e') !== -1) str = str.replace('e', '');
  while (str.indexOf('u') !== -1) str = str.replace('u', '');
  while (str.indexOf('i') !== -1) str = str.replace('i', '');
}


function test2() {
  const reg = new RegExp('[oaeui]', 'gui');

  myLongStr.replace(reg, '');
}

console.log(testPerformance(100, test1));
console.log(testPerformance(100, test2));
console.log(testPerformance(100, 12345));