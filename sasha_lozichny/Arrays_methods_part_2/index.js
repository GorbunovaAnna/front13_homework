// 1. вывести в консоль 'its valid' если во всех объектах a > b
// вывести  'its invalid' если хотя бы в одном объекте a <= b

// const arr = [
//   { a: 2, b: 1 },
//   { a: 5, b: 12 },
//   { a: 95, b: 7 },
//   { a: 51, b: 5 },
// ];
// const newArr = arr.every((object) => object.a > object.b);
// console.log(newArr ? "its valid" : "its invalid");

// 1.2 на основе массива arr создать новый массив у объектов которого
//    поле b возведено в квадрат

// const arr = [
//   { a: 2, b: 1 },
//   { a: 5, b: 12 },
//   { a: 95, b: 7 },
//   { a: 51, b: 5 },
// ];
// const newArr = arr.map((item) => {
//   return { a: item.a, b: item.b ** 2 };
// });
// console.log(newArr);

// 1.3 на основе массива arr созать массив где все значения полей
// a и b помещены как послеовательные значения
// [2, 1, 5, 12, 95, 7, 51, 5]

// const arr = [
//   { a: 2, b: 1 },
//   { a: 5, b: 12 },
//   { a: 95, b: 7 },
//   { a: 51, b: 5 },
// ];
// const newArr = arr.reduce((acc, item) => [...acc, item.a, item.b],[]);
// console.log(newArr);

