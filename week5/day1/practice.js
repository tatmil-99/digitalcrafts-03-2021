// const request = new XMLHttpRequest();
// request.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     console.log(this);
//   }
// };
// request.open("GET", "./sample.txt");
// request.send();

fetch("./sample.txt").then(response => {
  console.log(response);
});