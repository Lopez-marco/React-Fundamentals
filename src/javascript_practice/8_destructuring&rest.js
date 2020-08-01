// const array = [
//   "thing",
//   42,
//   false,
//   { key: "value" },
//   [1, 2, 3, 4, undefined],
//   NaN,
// ];

// let stringVar = array[0];
// let nunVar = array[1];
// let objVar = array[2];
// let nanVar = array[array.length - 1];

// console.log(stringVar, nunVar, objVar, nanVar);

// //double comas means skip certain values of the array
// let [string, num, , obj, , nan] = array;
// console.log(string, num, obj, nan);

// //on this we "push" the contents from the old array to this new array
// let newArr = ["a", 1, undefined, ...array];
// console.log(newArr);

const testObj = {
  string: "stringy Thingy",
  num: 23,
  bool: true,
  obj: { key: "woluigi" },
  arr: [1, 2, 3, 4, undefined],
  nan: NaN,
};
//long way of geting the values on the array
const stringVar = testObj.string;
const numVar = testObj.num;
const objVar = testObj.obj;
const nanVar = testObj.nan;

console.log(stringVar, nanVar, objVar, nanVar);
//short way of getting the values of the array (same as top)
let { string, obj, num, nan } = testObj;
console.log(string, num, obj, nan);
//adding both arrays into one
let newObj = { test: "blah", newThang: "other thing", ...testObj };
console.log(newObj);
