// 1 Переменные
// camelCase
//const firstName = "Misha"; // string
// const lastName = "Malikov"; // string
//const age = 25; // number
//const isProgrammer = true; // boolean
//const _ = "private";
//const $ = "some value";

// const if = "ddd"; // err
//const withNum5 = 5;
// const 5withNum = 5; // err

// 2 Мутирование
// console.log("Имя человека: " + firstName + ", а возраст: " + age);
// console.log(age);
// alert("Имя человека: " + firstName + ", а возраст: " + age);
//const lastName = prompt("Введите фамилию");
//alert(firstName + " " + lastName);

// 3 Операторы

//let currentYear = 2021;
//const birthYear = 1996;

//const age = currentYear - birthYear;

//const a = 10;
//const b = 5;

//let c = 32;
//c = c + a;
//c = c - a;
//c = c * a;
//c = c / a;

//c += a;
//c -= a;
//c *= a;
//c /= a;

//console.log(a + b);
//console.log(a - b);
//console.log(a * b);
//console.log(a / b);
//console.log(++currentYear);
//console.log(--currentYear);
//console.log(c);


// 4 Типы данных
//const isProgrammer = true;
//const name = 'Misha';
//const age = 25;
//let x;

//console.log(typeof isProgrammer);
//console.log(typeof name);
//console.log(typeof age);
//console.log(typeof x);
//console.log(null);

// 5 Приоритет операторов

//const fullAge = 25;
//const birthYear = 1996;
//const currentYear = 2021;

//const isFullAge = currentYear - birthYear >= fullAge;
//console.log(isFullAge);

// 6 Условные операторы

//const courseStatus = "ready"; // pending, fail, ready

//if (courseStatus === "pending") {
//  console.log("Курс находится в статусе разработки");
//} else if (courseStatus === "ready") {
//  console.log("Курс готов");
//} else {
//  console.log("Курс не готов");
//}

//const isReady = true;
//if (isReady) {
//  console.log("Всё готово");
//} else {
///  console.log("Всё не готово");
//}
// Тернарные выражения
//isReady ? console.log("Всё готово") : console.log("Всё не готово");

//const num1 = 42; // number
//const num2 = "42"; // string

//console.log(num1 === num2);

// 7 Булевая логика
/*https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/%D0%9B%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B#%D0%BE%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5*/

// 8 Функции

/*function  calcAge(year) {
  return 2021 - year;
}


//console.log(calcAge(1996));
//console.log(calcAge(1995));
//console.log(calcAge(1975));

function logInfoAbout(name, year) {
  const age = calcAge(year);
  if (age > 0) {
    console.log("Человек по имени " + name + " и по возрасту " + age);
  } else {
    console.log("Вообще-то это уже будущее!");
  }
}

  logInfoAbout("Misha", 1996);
  logInfoAbout("Oxana", 1975);
  logInfoAbout("Larry", 2022);*/

  // 9 Массивы

  //const cars = ["Мазда", "Мерседес", "Форд"];
  //const cars = new Array("Мазда", "Мерседес", "Форд");
  /*console.log(cars.length);

  console.log(cars[1]);
  console.log(cars[2]);
  console.log(cars[0]);

  cars[0] = "Porsche";
  console.log(cars);
  cars[cars.length] = "BMW";
  console.log(cars);*/

  // 10 Циклы

  const cars = ["Мазда", "Мерседес", "Форд"];

 /* for (let i = 0; i < cars.length; i++) {
    const car = cars[i];
    console.log(car);
  }*/

  /*  for (let car of cars) {
      console.log(car);
    }*/


  // 11 Объекты
  
  /*const person = {
    firstName: "Misha",
    lastName: "Malikov",
    year: 1996,
    languages: ["Rus", "Az", "Eng"],
    hasWife: false,
    greet: function() {
      console.log("greet from person");
    }
  }

    console.log(person.firstName);
    console.log(person["lastName"]);
    const key = "languages";
    console.log(person[key]);
    person.hasWife = true;
    person.isProgrammer = true;
    console.log(person);
    person.greet();*/


























    // Number
    /*const num = 42; // integer
    const float = 42.42; //float
    const pow = 10e3;

    console.log("MAX", Number.MAX_SAFE_INTEGER);
    console.log("Pow", Math.pow(2, 53) - 1);
    console.log("MIN", Number.MIN_SAFE_INTEGER);
    console.log("MAX_Value", Number.MAX_VALUE);
    console.log("MIN_Value", Number.MIN_VALUE);
    console.log("Positive", Number.POSITIVE_INFINITY);
    console.log("Negative", Number.NEGATIVE_INFINITY);
    console.log("2 / 0", 2 / 0);
    console.log(Number.NaN); // Not a Number
    console.log(typeof NaN);
    console.log(2 / undefined);
    const weird = 2 / undefined;
    console.log(Number.isNaN(weird));
    console.log(Number.isNaN(42));
    console.log(Number.isFinite(Infinity));
    console.log(Number.isFinite(42));

    const stringInt = "40";
    const stringFloat = "40.42";
    console.log(Number.parseInt(stringInt) + 2);
    console.log(Number(stringInt) + 2);
    console.log(parseInt(stringInt) + 2);
    console.log(+stringInt + 2);

    console.log(Number.parseFloat(stringFloat) + 2);
    console.log(parseFloat(stringFloat) + 2);
    console.log(Number(stringFloat) + 2);
    console.log(+stringFloat + 2);*/

    /*console.log(0.4 + 0.2); // 0.6
    console.log(+(0.4 + 0.2).toFixed(1));
    console.log(parseFloat((0.4 + 0.2).toFixed(1)));*/