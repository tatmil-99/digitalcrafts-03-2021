// const reverseStr = (str) => {
//   let splitStr = str.split("");
//   let newArr = [];

//   for (let i = str.length -1; i >= 0; i--) {
//     newArr.push(splitStr[i]);
//   }
//   let result = newArr.join("");
//   return result;
// } 

// console.log(reverseStr("hello")); 

var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents)