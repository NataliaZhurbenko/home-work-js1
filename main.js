var myNum = 10;
console.log(myNum);

var myStr = 'строка';
console.log(myStr);

var myBool = true;
console.log(myBool);

var myArr = [1, 2, 3, 4, 5];
console.log(myArr);

var myObj = {first: 'First Name', last: 'Last Name'};
console.log(myObj);

var decimal2 = myNum.toFixed (2);
console.log(myNum.toFixed (2));

var i = 10;
console.log(++i);
console.log(i);

var i = 10;
console.log(i++);
console.log(i);

var i = 10;
console.log(--i);
console.log(i);

var i = 10;
console.log(i--);
console.log(i);

var myTest = 20;
myTest += 10;
console.log(myTest);

var myTest = 20;
myTest -= 10;
console.log(myTest);

var myTest = 20;
myTest *= 5;
console.log(myTest);

var myTest = 20;
myTest /= 5;
console.log(myTest);

var myTest = 20;
myTest %= 6;
console.log(myTest);

var myPi = Math.PI;
console.log(Math.PI);

var myRound = Math.round(89.279);
console.log(Math.round(89.279));

var myRandom = Math.random()*10;
console.log(Math.random()*10);

var myPow = Math.pow(3,5);
console.log(Math.pow(3,5));

var strObj = {str: 'Мама мыла раму, рама мыла маму'};
strObj.length = strObj.str.length;
console.log('strObj.str.length', strObj);

var isRamaPos = str.indexOf('рама');
console.log(str.indexOf('рама'));

var strReplace = str.replace('мыла', 'моет');
strReplace = strReplace.replace('рама', 'Рама');
strReplace = strReplace.replace('мыла', 'держит');
console.log(strReplace);

console.log(str.toUpperCase());
console.log(str.toLowerCase());
