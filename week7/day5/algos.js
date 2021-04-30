// What will the output produce? DO NOT RUN IN CONSOLE.
// const array1 = [33, 4, 88, 1, 25];
// console.log(array1.map((i) => i + 5).filter((i) => i % 2).length);
// = 2

// Substrings
// Write a function that when given string1 as one parameter and another string2 as a second parameter, checks if string2 is a substring of string1.
const substring = (str1, str2) => {
  const combine = str1 + str1;
  return combine.includes(str2);
};

// const substring = (str1, str2) => {
//   let index = str1.indexOf(str2);

//   if (index !== -1) {
//     return true;
//   }
//   return false;
// }

// const substring = (str1, str2) => {
//   let position = str1.search(str2);

//   if (position !== -1) {
//     return true;
//   }
//   return false;
// }

console.log(substring("concept", "cep")); // true
console.log(substring("aaabbbaabbab", "aaba")); // false 
console.log(substring("the brown cow jumped over the moon", "moonthe brown cow")); // true
console.log(substring("baananana", "nab")); // true
console.log(substring("this wont work", "r u shore")); // false

// Missing Digit
// Write a function that when given a string equation with one digit as an 'x', return the value of 'x' that makes the equation true.
// const findX = (equation) => {
// 	return x;
// };

// // Part 1
// console.log(findX("10 * x = 20")); // returns 2
// console.log(findX("2 + 4 = x")); // returns 6
// console.log(findX("x4 - 11 = 33")); // returns 4
// // Part 2
// console.log(findX("1x0 * 2 = 200")); // returns 0
// console.log(findX("80 / 2 = x0")); // returns 4
// console.log(findX("111 + 11x = 222")); // returns 1