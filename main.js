// const countryPropertyName = "country";

// const myDescription = {
//   age: 21,
//   pol: "M",
//   car: true,
// };
// myDescription.color = "green";
// myDescription.car = false;
// // myDescription["car"] = true;// или через квадратные
// myDescription[countryPropertyName] = "Ukraine";

// delete myDescription.color;
// // console.log(myDescription);

// const car = {
//   vozpast: 20,
//   Characterictic: {
//     color: "red",
//     type: "sedan",
//   },
//   vid: function () {
//     console.log("vperet!!!");
//   },
// };

// ///////1 способ избежать мутации////////////////////////////////////

// const mashine = Object.assign({}, car);
// console.log(car.vozpast);
// console.log(mashine.vozpast);

////////////// 2 способ избежать мутации/////////////////////

// const mash = { ...car };
// mash.vid = function () {
//   console.log("menyaem");
// };

///// 3 способ самый топ работаеь со вложенными объектам///////////////

// const lychuySposob = JSON.parse(JSON.stringify(car));

const obj = {};
obj.name = "John";
obj.surname = "Smith";
obj.name = "Pete";
delete obj.name;

//Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// let schedule = {};

// // alert(isEmpty(schedule)); // true

// schedule.wake = "get up";

// // alert(isEmpty(schedule)); // false

// function isEmpty(schedule) {
//   for (let key in schedule) {
//     // если тело цикла начнет выполняться - значит в объекте есть свойства
//     return false;
//   }
//   return true;
// }

//Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// sum = 0;
// for (let key in salaries) {
//   //   sum += salaries[key];
//   sum += salaries[key];
// }
// alert(sum);

////Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2./////
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// function multiplyNumeric(menu) {
//   for (let key in menu) {
//     if (typeof menu[key] == "number") {
//       menu[key] *= 2;
//     }
//   }
// }

// let age = prompt("Сколько тебе лет?", 100);

// alert(`Тебе ${age} лет!`);

// let userName = +prompt("Сколько тебе лет?", "21?");
// type = typeof userName; // убедились что вернуло число, а не строку
// alert(`  ${type}`);

//////////// 1 sposob//////////////

// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);

// alert(Number(a) + Number(b));

////////   2 sposob /////////////////

// let a = +prompt("Первое число?", 1);
// let b = +prompt("Второе число?", 2);

// alert(a + b);

///////// 3 sposob //////////
// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);

// alert(+a + +b);

// if ("0") {
//   alert("hello");
// }
// Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“

// Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»
// let prom = prompt("Какое официальное название JavaScript", "otvet");

// if (prom == "ECMAScript") {
//   alert("verno");
// } else {
//   alert("Не знаете?'ECMAScript!' ");
// }

// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

// 1, если значение больше нуля,
// -1, если значение меньше нуля,
// 0, если значение равно нулю.

// let value = +prompt("Введите любое число!", 0);
// if (value > 0) {
//   alert(1);
// } else if (value < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }
//Перепишите конструкцию if с использованием условного оператора '?':

// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }
// let result = условие ? значение1 : значение2;
// let accessAllowed = age > 18 ? true : false;

// let a = 3;
// let b = 4;
// let results = a + b < 4 ? alert("Malo") : alert("Mnogo");

// Перепишите if..else с использованием нескольких операторов '?'.

// Для читаемости рекомендуется разбить код на несколько строк.

// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }
// let login = prompt("doljnost?", "d");
// let message =
//   login == "Сотрудник"
//     ? alert("Привет")
//     : login == "Директор"
//     ? alert("Здравствуйте")
//     : alert("Нет логина");
// alert(message)

//Что выведет код ниже?

// alert( alert(1) || 2 || alert(3) ); //2

// Что выведет код ниже?

// alert(1 && null && 2); // null

// Что выведет код ниже?

// alert( alert(1) && alert(2) );
// Ответ: 1, а затем undefined.

// alert( alert(1) && alert(2) );
// Вызов alert не возвращает значения, или, иначе говоря, возвращает undefined.

// Поэтому до правого alert дело не дойдёт, вычисления закончатся на левом.

// Что выведет код ниже?

// alert( null || 2 && 3 || 4 ); //3

// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.

// «Включительно» означает, что значение переменной age может быть равно 14 или 90.

// Первый вариант:

// if (!(age >= 14 && age <= 90))
// Второй вариант:

// if (age < 14 || age > 90)

// Какие из перечисленных ниже alert выполнятся?

// Какие конкретно значения будут результатами выражений в условиях if(...)?

// if (-1 || 0) alert( 'first' );
// if (-1 && 0) alert( 'second' );
// if (null || -1 && 1) alert( 'third' );

// Выполнится.
// Результат -1 || 0 = -1, в логическом контексте true
//if (-1 || 0) alert( 'first' );

// Не выполнится
// -1 && 0 = 0,  в логическом контексте false
//if (-1 && 0) alert( 'second' );

// Выполнится
// оператор && имеет больший приоритет, чем ||
// так что -1 && 1 выполнится раньше
// вычисления: null || -1 && 1  ->  null || 1  ->  1
//if (null || -1 && 1) alert( 'third' );

//Напишите код, который будет спрашивать логин с помощью prompt.

// Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

// Пароль проверять так:

// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене – «Отменено».

// let login = prompt("Кто там?", "");
// if (login == "Admin") {
//   let l = prompt("Пароль?", "");
//   if (l == "я главный") {
//     alert("Здравсвуйте!");
//   }
//   if (l == "") {
//     alert("Отмена");
//   } else {
//     if (!(l == "") || l == "я главный") {
//       alert("неверный пароль!");
//     }
//   }
// }
// if (login == "") {
//   alert("Отмена");
// } else {
//   !(login == "") || login == "Admin";
//   {
//     alert("Я вас не знаю");
//   }
// }

// Например, здесь мы отобразим user, если её значение не null/undefined, в противном случае Аноним:

//  let user;

// alert(user ?? "Аноним"); // Аноним (user не существует)

// А вот пример, когда user присвоено значение:

// let user = "Иван";

// alert(user ?? "Аноним"); // Иван (user существует)

// Мы хотели бы отобразить имя пользователя, используя одну из этих переменных, или показать «Аноним», если все они null/undefined.

// Для этого воспользуемся оператором ??:
// let firstName = null;
// let lastName = null;
// let nickName = "Суперкодер";

// показывает первое значение, которое определено:
// alert(firstName ?? lastName ?? nickName ?? "Аноним"); // Суперкодер

// Важное различие между ними заключается в том, что:

// || возвращает первое истинное значение.
// ?? возвращает первое определённое значение.

// let height = 0;

// alert(height || 100); // 100
// alert(height ?? 100); // 0
// height || 100 проверяет height на ложное значение, оно равно 0, да, ложное.
// поэтому результатом || является второй аргумент, т.е. 100.
// height ?? 100 проверяет, что переменная height содержит null/undefined, а поскольку это не так,
// то результатом является сама переменная height, т.е. 0.

// Какое последнее значение выведет этот код? Почему?

// let i = 3;

// while (i) {
//   alert( i-- );
// }

// Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.

// Оба цикла выводят alert с одинаковыми значениями или нет?

// Префиксный вариант ++i:

// let i = 0;
// while (++i < 5) alert(i);
// Постфиксный вариант i++

// let i = 0;
// while (i++ < 5) alert(i);

// От 1 до 4

// let i = 0;
// while (++i < 5) alert( i );
// Первое значение: i = 1, так как операция ++i сначала увеличит i, а потом уже произойдёт сравнение и выполнение alert.

// Далее 2, 3, 4… Значения выводятся одно за другим. Для каждого значения сначала происходит увеличение, а потом – сравнение, так как ++ стоит перед переменной.

// При i = 4 произойдёт увеличение i до 5, а потом сравнение while (5 < 5) – это неверно. Поэтому на этом цикл остановится, и значение 5 выведено не будет.

// От 1 до 5

// let i = 0;
// while (i++ < 5) alert( i );
// Первое значение: i = 1. Остановимся на нём подробнее. Оператор i++ увеличивает i, возвращая старое значение, так что в сравнении i++ < 5 будет участвовать старое i = 0.

// Но последующий вызов alert уже не относится к этому выражению, так что получит новый i = 1.

// Далее 2, 3, 4… Для каждого значения сначала происходит сравнение, а потом – увеличение, и затем срабатывание alert.

// Окончание цикла: при i = 4 произойдёт сравнение while (4 < 5) – верно, после этого сработает i++, увеличив i до 5, так что значение 5 будет выведено. Оно станет последним.

// Значение i = 5 последнее, потому что на следующем шаге while (5 < 5) ложно.

// Ответ: от 0 до 4 в обоих случаях.

// for (let i = 0; i < 5; ++i) alert( i );

// for (let i = 0; i < 5; i++) alert( i );
// Такой результат обусловлен алгоритмом работы for:

// Выполнить единожды присваивание i = 0 перед чем-либо (начало).
// Проверить условие i < 5
// Если true – выполнить тело цикла alert(i), и затем i++
// Увеличение i++ выполняется отдельно от проверки условия (2), значение i при этом не используется, поэтому нет никакой разницы между i++ и ++i.

// for (let i = 2; i <= 10; i++) {
//   if (i % 2 == 1) continue;
//   alert(i);
// }
// Перепишите код, заменив цикл for на while, без изменения поведения цикла.

// for (let i = 0; i < 3; i++) {
//   alert(`number ${i}!`);
// }

// let i = 0;
// while (i < 3) {
//   alert(`number ${i}!`);
//   i++;
// }

// let value = +prompt("Введите число, большее 100!", "");
// if (value <= 99) {
//   value = +prompt("Введите число, большее 100!", "");
// }

// let value = +prompt("Введите число, большее 100!", "");
// for (let i = 1; value <= 99; i++) {
//   value = +prompt("Введите число, большее 100!", "");
// }
// let num;

// do {
//   num = prompt("Введите число больше 100?", 0);
// } while (num <= 100 && num);
// Цикл do..while повторяется, пока верны две проверки:

// Проверка num <= 100 – то есть, введённое число всё ещё меньше 100.
// Проверка && num вычисляется в false, когда num имеет значение null или пустая строка ''. В этом случае цикл while тоже нужно прекратить.
// Кстати, сравнение num <= 100 при вводе null даст true, так что вторая проверка необходима.

// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.

// Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.

// Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.

// Напишите код, который выводит все простые числа из интервала от 2 до n.

// Для n = 10 результат должен быть 2,3,5,7.

// P.S. Код также должен легко модифицироваться для любых других интервалов.

// let n = 10;

// nextPrime: for (let i = 2; i <= n; i++) {
//   // Для всех i...

//   for (let j = 2; j < i; j++) {
//     // проверить, делится ли число..
//     if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//   }

//   alert(i); // простое число
// }
// Напишите if..else, соответствующий следующему switch:

// let browser = prompt("Какой браузер?", "");

// switch (browser) {
//   case "Edge":
//     alert("You've got the Edge!");
//     break;

//   case "Chrome":
//   case "Firefox":
//   case "Safari":
//   case "Opera":
//     alert("Okay we support these browsers too");
//     break;

//   default:
//     alert("We hope that this page looks ok!");
// }

// let browser = prompt("Какой браузер?", "");
// if (browser == "Edge") {
//   alert("You've got the Edge!");
// } else if (
//   browser == "Chrome" ||
//   browser == "Firefox" ||
//   browser == "Safari" ||
//   browser == "Opera"
// ) {
//   alert("Okay we support these browsers too");
// } else {
//   alert("We hope that this page looks ok!");
// }

// Перепишите код с использованием одной конструкции switch:

// const number = +prompt("Введите число между 0 и 3", "");

// if (number === 0) {
//   alert("Вы ввели число 0");
// }

// if (number === 1) {
//   alert("Вы ввели число 1");
// }

// if (number === 2 || number === 3) {
//   alert("Вы ввели число 2, а может и 3");
// }

// const number = +prompt("Введите число между 0 и 3", "");
// switch (number) {
//   case 0:
//     alert("Вы ввели число 0");
//     break;
//   case 1:
//     alert("Вы ввели число 1");
//     break;

//   case 2:
//   case 3:
//     alert("Вы ввели число 2,а может и 3 ");
//     break;
// }

// Локальные переменные
// Переменные, объявленные внутри функции, видны только внутри этой функции.

// Например:

// function showMessage() {
//   let message = "Привет, я JavaScript!"; // локальная переменная

//   alert( message );
// }

// showMessage(); // Привет, я JavaScript!

// alert( message ); // <-- будет ошибка, т.к. переменная видна только внутри функции
// Внешние переменные
// У функции есть доступ к внешним переменным, например:

// let userName = 'Вася';

// function showMessage() {
//   let message = 'Привет, ' + userName;
//   alert(message);
// }

// showMessage(); // Привет, Вася
// Функция обладает полным доступом к внешним переменным и может изменять их значение.

// Например:

// let userName = 'Вася';

// function showMessage() {
//   userName = "Петя"; // (1) изменяем значение внешней переменной

//   let message = 'Привет, ' + userName;
//   alert(message);
// }

// alert( userName ); // Вася перед вызовом функции

// showMessage();

// alert( userName ); // Петя, значение внешней переменной было изменено функцией
// Внешняя переменная используется, только если внутри функции нет такой локальной.

// Если одноимённая переменная объявляется внутри функции, тогда она перекрывает внешнюю. Например, в коде ниже функция использует локальную переменную userName. Внешняя будет проигнорирована:

// let userName = 'Вася';

// function showMessage() {
//   let userName = "Петя"; // объявляем локальную переменную

//   let message = 'Привет, ' + userName; // Петя
//   alert(message);
// }

// // функция создаст и будет использовать свою собственную локальную переменную userName
// showMessage();

// alert( userName ); // Вася, не изменилась, функция не трогала внешнюю переменную
// function showMessage(from, text = "текст не добавлен") {
//   alert(from + ": " + text);
// }

// showMessage("Аня");

// Следующая функция возвращает true, если параметр age больше 18.

// В ином случае она задаёт вопрос confirm и возвращает его результат.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }
// Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

// Сделайте два варианта функции checkAge:

// Используя оператор ?
// Используя оператор ||

// function checkAge(age) {
//   return age > 18 ? true : confirm("Родители разрешили?");
// }
// function checkAge(age) {
//   return age > 18 || confirm("Родители разрешили?");
// }

// function cuclMin(a, b) {
//   return a >= b ? b : a;
// }

// function cuclMinn(a, b) {
//   if (a >= b) {
//     return b;
//   } else {
//     return a;
//   }
// }
// let x = prompt("Введи число", "0");
// let n = prompt("Введи степень", "0");
// function pow(x, n) {

//     if (n > 0) {

//   }else{
//     alert("IDIOT")
//   }
// }
// function pow(x, n) {
//   let result = x;

//   for (let i = 1; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// let x = prompt("x?", "");
// let n = prompt("n?", "");

// if (n < 1) {
//   alert(`Степень ${n} не поддерживается, используйте натуральное число`);
// } else {
//   alert(pow(x, n));
// }

// let age = prompt("Сколько Вам лет?", 18);

// let welcome = (age < 18) ?
//   () => alert('Привет!') :
//   () => alert("Здравствуйте!");

// welcome();

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }

//   ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
//   );

// let welcome = (age < 18) ?
//   () => alert('Привет!') :
//   () => alert("Здравствуйте!");

// welcome();

//  function ask(question, yes, no) {
//     if (confirm(question)) yes()
//      else no();
//   }

//    ask(
//      "Вы согласны?",
//       () => alert("Вы согласились."),
//   () => alert("Вы отменили выполнение.")
//    );

// let ob = {};
// obj.name = "John";
// obj.surname = "Smith";
// obj.name = "Pete";
// delete obj.name;

// // function isEmpty(objttt) {
// //   if (objttt === undefined) {
// //     alert("true");
// //   } else {
// //     alert("false");
// //   }
// // }
// function isEmpty(obj) {
//   for (let key in obj) {
//     // если тело цикла начнет выполняться - значит в объекте есть свойства
//     return false;
//   }
//   return true;
// }
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// result = 0;
// function sumSalaries() {
//   for (let key in salaries) {
//     result = salaries[key] + result;
//   }
//   alert(result);
// }

// sumSalaries(salaries);

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// function multiplyNumeric(menu) {
//   for (let key in menu) {
//     if (typeof menu[key] == "number") {
//       menu[key] = menu[key] * 2;
//     }
//   }
// }

// let user = {
//   name: "John",
//   age: 30,
// };

// let clone = {};

// for (let key in user) {
//   clone[key] = user[key];
// }

// Значение this – это объект «перед точкой», который используется для вызова метода.

// Например:

// let user = {
//   name: "John",
//   age: 30,

//   sayHi() {
//     // "this" - это "текущий объект".
//     alert(this.name);
//   },
// };

// user.sayHi(); // John
// Здесь во время выполнения кода user.sayHi() значением this будет являться user (ссылка на объект user).

// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
// let calculator = {
//   // ... ваш код ...
// };

// let calculator = {
//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   },

//   read() {
//     this.a = +prompt("Введите значение", 0);
//     this.b = +prompt("Введите значение", 0);
//   },
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function () {
//     // показывает текущую ступеньку
//     alert(this.step);
//   },
// };
// Теперь, если нам нужно выполнить несколько последовательных вызовов, мы можем сделать это так:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0
// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

// ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0
// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep() {
//     alert(this.step);
//     return this;
//   },
// };

// ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0
// function User(name, isAdmin) {
//   this.name = name;
//   this.isAdmin = isAdmin;
// }

// let user = new User("Jack", true);

// alert(user.name); // Jack
// alert(user.isAdmin); // false

// Возможно ли создать функции A и B, чтобы new A() == new B()?

// function A() { ... }
// function B() { ... }

// let a = new A;
// let b = new B;

// alert( a == b ); // true

// Да, возможно.

// Если функция возвращает объект, то new вернёт его вместо this.

// Таким образом, они могут, к примеру, возвращать один и тот же внешне определённый объект obj:

// let obj = {};

// function A() { return obj; }
// function B() { return obj; }

// alert( new A() == new B() ); // true

// function Calculator() {
//   this.read = function () {
//     this.readA = +prompt("введите число", "0");
//     this.readB = +prompt("введите число", "0");
//   };
//   this.sum = function () {
//     return this.readA + this.readB;
//   };
//   this.mul = function () {
//     return this.readA * this.readB;
//   };
// }
// let calculator = new Calculator();
// calculator.read();

// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());

// function Accumulator(startingValue) {
//   this.value = startingValue;

//   this.read = function () {
//     this.a = +prompt("нового число", "0");
//     this.value = this.a + this.value;
//   };
// }
// let accumulator = new Accumulator(1);
// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

// alert(accumulator.value); // выведет сумму этих значений

// let value1 = +prompt("Введите 1 число", "0");
// let value2 = +prompt("Введите 2 число", "0");
// let sum = value1 + value2;
// alert(sum);
// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

// Функция должна возвращать числовое значение.

// Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.
// function readNumber() {
//     let num;

//     do {
//       num = prompt("Введите число", 0);
//     } while ( !isFinite(num) );

//     if (num === null || num === '') return null;

//     return +num;
//   }

//   alert(`Число: ${readNumber()}`);

// function random(min, max) {
//   return min + Math.random() * (max - min);
// }

// alert(random(1, 5));
// alert(random(1, 5));
// alert(random(1, 5));

// Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

// Любое число из интервала min..max должно появляться с одинаковой вероятностью.

// Пример работы функции:

// alert( randomInteger(1, 5) ); // 1
// alert( randomInteger(1, 5) ); // 3
// alert( randomInteger(1, 5) ); // 5
// function randomInteger(min, max) {
//   // получить случайное число от (min-0.5) до (max+0.5)
//   let rand = min - 0.5 + Math.random() * (max - min + 1);
//   return Math.round(rand);
// }

// alert(randomInteger(1, 3));

// let str = "Любое число из интервала Пример инработы функции";

// alert(str.indexOf("ин", 16));
// Чтобы найти все вхождения подстроки, нужно запустить indexOf в цикле. Каждый раз, получив очередную позицию, начинаем новый поиск со следующей:

// let str = "Ослик Иа-Иа посмотрел на виадук";

// let target = "Иа"; // цель поиска

// let pos = 0;
// while (true) {
//   let foundPos = str.indexOf(target, pos);
//   if (foundPos == -1) break;

//   alert(`Найдено тут: ${foundPos}`);
//   pos = foundPos + 1; // продолжаем со следующей позиции
// }

// let str = "Widget with id";

// if (str.indexOf("Widget") != -1) {
//   alert("Совпадение есть"); // теперь работает
// }

// let str = '';

// for (let i = 65; i <= 220; i++) {
//   str = str + String.fromCodePoint(i);
// }
// alert( str );

// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

// ucFirst("вася") == "Вася";

// Мы не можем просто заменить первый символ, так как строки в JavaScript неизменяемы.

// Но можно пересоздать строку на основе существующей, с заглавным первым символом:

////////////////////////////////////////////
// let str = "dima";
// function ucFirst(str) {
//   if (!str) return str;

//   return str[0].toUpperCase() + str.slice(1);
// }

// alert(ucFirst("дима"));

// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

// Функция должна быть нечувствительна к регистру:

// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false
// let str = prompt("Введите viagra или XXX", "viagra или XXX");

// function checkSpam(str) {
//   let lowerStr = str.toLowerCase();
//   if (lowerStr.includes("viagra") || lowerStr.includes("XXX")) {
//     alert(true);
//   } else alert(false);
// }
// checkSpam(str);

// let str = "Вот, что мне хотелось бы сказать на эту тему:";
// let maxlength = 20;
// function truncate(str, maxlength) {
//   if (str.lenght > maxlength) {
//     str.slice(0, maxlength - 1) + "...";
//   } else {
//     alert(str);
//   }
// }

// alert(truncate(str, maxlength));

// function truncate(str, maxlength) {
//   return str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;
// }

// alert(truncate(str, maxlength));

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

// Например:

// alert( extractCurrencyValue('$120') === 120 ); // true

// let value = "$120";

// function extractCurrencyValue(value) {
//   return +value.slice(1, value.lenght);
// }
// alert(extractCurrencyValue(value));
// alert(extractCurrencyValue("$120") === 120);

// let styles = ["Джаз", "Блюз"];

// styles.push("Рок-н-ролл");
// // styles[1] = "Классика"; or
// styles[Math.floor((styles.length - 1) / 2)] = "Классика";
// styles.shift();
// styles.unshift("Рэп", "Регги");
// alert(styles);

// Каков результат? Почему?

// let arr = ["a", "b"];

// arr.push(function() {
//   alert( this );
// });

// arr[2](); // ?
// arr[2](); // a,b,function(){...}

// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
// function sumInput() {
//   let arr = [];
//   while (true) {
//     let value = prompt("введите значение", "0");
//     if (value == "" || value === null || !isFinite(value)) break;
//     arr.push(+value);
//   }
//   sum = 0;
//   for (let num of arr) {
//     sum += num;
//   }
//   return sum;
// }
// alert(sumInput());
