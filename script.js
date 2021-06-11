// !    argument as object
function about(name, age) {
  console.log("your name: " + name);
  console.log("your age: " + age);
}
about("Max", 28);
function about2(arg) {
  console.log("your name: " + arg.name);
  console.log("your age: " + arg.age);
}
about2({
  name: "Alex",
  age: 22,
});

// !    function generator
function* idGenerator() {
  let id = 37;
  while (true) {
    yield id++;
  }
}
const myIdGenerator = idGenerator();
console.log("🚀 ~ myIdGenerator: ", myIdGenerator.next().value);
// *    37
console.log("🚀 ~ myIdGenerator: ", myIdGenerator.next().value);
// *    38
console.log("🚀 ~ myIdGenerator: ", myIdGenerator.next().value);
// *    39

// !    formatting json output
const arg = {
  name: "Max",
  age: 22,
  data: ["number213", "id37", "key213sr2s"],
};
// *    argument, separator type, number of spaces
console.log(JSON.stringify(arg, null, 2));

// !    optional sequence operator
const subway = {
  red: ["station 1", "station 2", "station 3"],
  green: ["station 4", "station 5", "station 6"],
};
console.log(subway.green.join(" "));
// * station 4 station 5 station 6
// console.log(subway.black.join(" "));
// * error => Cannot read property 'join' of undefined
console.log(subway.black?.join(" "));
// * undefined

// !    destructuring assignment
const { name, age } = arg;
const { 0: number, 1: id, 2: key } = arg.data;
// *    name: Max
// *    id: id37
// !    making a copy of an array

let arr = [1, 2];
let arr2 = [...arr, 3, 4];
// *    [1, 2, 3, 4]
// *    if a one-dimensional array

// !    removing duplicates from an array
const myArr = [1, 2, 2, 4, 56, 76, 5, 3, 2, 45, 7, 7, 8, 7, 5, 434, 2, 6, 8];
console.log([...new Set(myArr)]);

// !    convert to a number using map
const ar8 = [["2"], "2", 34, 88, "99"];
const ar8Num = ar8.map(Number);
// *    [2, 2, 34, 88, 99]
// *    if a one-dimensional array

// !    Code execution time
console.time("ex 1");
for (let i = 0; i < 1000000; i++) {
  let a = 37;
  let b = 73;
  [a, b] = [b, a];
}
console.timeEnd("ex 1");

console.time("ex 2");
for (let i = 0; i < 1000000; i++) {
  let x = 37;
  let y = 73;
  let t = x;
  x = y;
  y = x;
}
console.timeEnd("ex 2");

/* 
!   resources
*   https://www.youtube.com/watch?v=9Ek1mzIJzME
*   00:00 Начало видео
*   01:00 Аргумент как объект
*   03:40 Функция генератор
*   05:30 Форматируем вывод JSON
*   07:30 Оператор опциональной последовательности
*   10:00 Деструктурирующее присваивание
*   12:40 Создание копии массива
*   14:20 Удаление дубликатов из массива
*   16:00 Приводим к Number через map
*   17:20 Время выполнения кода
*/
