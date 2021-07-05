// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

// regular function
var numbersDoubled = numbers.map(function double(number) {
  return number * 100;
});


console.log(numbersDoubled);


// arrow function
var numbersDoubled1 = numbers.map(number1 => number1 * 100);
 console.log(numbersDoubled1)



 

