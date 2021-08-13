var userObj = {
  firstName: 'Ivan',
  lastName: 'Ivanov',
  age: 35
};

console.log(userObj)

var userObj = {
  firstName: 'Ivan',
  lastName: 'Ivanov',
  age: 35,
  fullName() {
    return `${userObj.firstName} ${userObj.lastName}`;
  }
};

console.log(userObj.fullName());

function defUpperStr(string) {
  return (string || 'Default text').toUpperCase();
}

console.log(defUpperStr('My text'));
console.log(defUpperStr());

function evenFn(n) {
  var arr = [];
  for (var i = 1; i <= n; i++) if (i % 2 === 0) arr.push(i);
  return arr;
}

console.log(evenFn(10));
console.log(evenFn(15));
console.log(evenFn(20));

function weekFn(n) {
  var str = '';

  switch (n) {
    case 1: str = 'Понедельник'; break;
    case 2: str = 'Вторник'; break;
    case 3: str = 'Среда'; break;
    case 4: str = 'Четверг'; break;
    case 5: str = 'Пятница'; break;
    case 6: str = 'Суббота'; break;
    case 7: str = 'Воскресенье'; break;
    default: str = null;
  }

  return str;
}

  console.log(weekFn(1));
  console.log(weekFn(3));
  console.log(weekFn(7));
  console.log(weekFn(9));
  console.log(weekFn(1.5));
  console.log(weekFn('2'));

  function ageClassification(n) {
   return n < 0 ? null :

   n <= 24 ? 'детский возраст' : 
   n <= 44 ? 'молодой возраст' :
   n <= 65 ? 'средний возраст' :
   n <= 75 ? 'пожилой возраст' :
   n <= 90 ? 'старческий возраст' :
   n <= 122 ? 'долгожители' :
   null;
  }

  console.log('-1 :', ageClassification(-1));

  console.log('5 :', ageClassification(5));

  console.log('34 :', ageClassification(34)); 

  console.log('50 :', ageClassification(50)); 

  console.log('65.1 :', ageClassification(65.1)); 

  console.log('80 :', ageClassification(80)); 

  console.log('110 :', ageClassification(110)); 

  console.log('130 :', ageClassification(130)); 

  console.log(1, ageClassification(-1) === null);
  console.log(2, ageClassification(1) === 'детский возраст');
  console.log(3, ageClassification(24) === 'детский возраст');
  console.log(4, ageClassification(24.01) === 'молодой возраст');
  console.log(5, ageClassification(44) === 'молодой возраст');
  console.log(6, ageClassification(44.01) === 'средний возраст');
  console.log(7, ageClassification(65) === 'средний возраст');
  console.log(8, ageClassification(65.01) === 'пожилой возраст');
  console.log(9, ageClassification(75) === 'пожилой возраст');
  console.log(10, ageClassification(75.01) === 'старческий возраст');
  console.log(11, ageClassification(90) === 'старческий возраст');
  console.log(12, ageClassification(90.01) === 'долгожители');
  console.log(13, ageClassification(122) === 'долгожители');
  console.log(14, ageClassification(122.01) === null);
  console.log(15, ageClassification(150) === null);
  

  function oddFn(n) {
    var arr = [];
    var i = 0;
  
    while (i++ < n) if (i % 2 !== 0) arr.push(i);
    return arr;
  }
  
  console.log(oddFn(10));
  console.log(oddFn(15));
  console.log(oddFn(20));

  function mainFunc(a, b, func) {
    if (func && typeof func === 'function') return func(a, b);

    return false;
  }

  function cbRandom(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
  }

  function cbPow(a, b) {
    return Math.pow(a, b);
  }

  function cbAdd(a, b) {
    return a + b;
  }

  console.log(mainFunc(2, 5, cbRandom));
  console.log(mainFunc(2, 5, cbPow));
  console.log(mainFunc(2, 5, cbAdd));
  console.log(mainFunc(2, 5, 'not a func'));