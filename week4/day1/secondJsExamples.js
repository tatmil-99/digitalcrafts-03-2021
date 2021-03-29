// --for in is for objects. The benefit is it doesnt create an additional array and change your data--
let pizzas = {
  crust: 'thin',
  toppings: [
    'cheese', 
    'pepperoni', 
    'spinach', 
    'onion', 
    'achovies', 
    'feta', 
    'mushrooms'
  ],
  size: 'Large',
  sauce: ['marinara', 'alfredo']
};

// for (const pizza in pizzas) {
//   // console.log("This is the key ", pizza);
//   console.log("This is the value ", pizzas[pizza]);
// }


// --for of is for arrays--
// let cars = ["Subaru", "Audi", "Honda", "BMW"]

// for (const car of cars) {
//   console.log("This is a ",car)
// }

for (const topping of pizzas.toppings) {
  console.log(topping);
}
