let str = "Tate";
let num = 2;
let object = {name: "Tate"};
let arr = [];
str = "This is a new string";
let product = num * 5;
arr = ["swag", 123123, true, false, "boolean"];
// console.log(arr[1]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr.length);

let personalInfo = {
  object1: {name: "Matt",
  age: 20,
  height: 7.1,
  metric: "ft"},
  object2: {name: "Fynn",
  age: 21,
  height: 6,
  metric: "ft"},
  object3: {name: "Bridget",
  age: 23,
  height: 5.8,
  metric: "ft"},
  object4: {name: "Max",
  age: 24,
  height: 5.11,
  metric: "ft"},
  object5: {name: "Tate",
  age: 22,
  height: 6.05,
  metric: "ft"}
};

console.log(personalInfo.object1.name)
console.log(personalInfo.object5.age)
console.log(personalInfo.object3.height)

personalInfo.object3.height = 1.2;
console.log(personalInfo.object3.height)

personalInfo.object3.metric = "meters";
console.log(personalInfo.object3.metric)

personalInfo.object2.sport = "skiing";
console.log(personalInfo.object2.sport);