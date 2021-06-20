// Array method 1
const numbers = new Array(1, 2, 3, 4);
console.log(numbers);

// Array method 2
const numbers1 = [1, 2, 3, 4, 5, 6]
console.log(numbers1);

// Zero index targeting
const fruits = ['banana', 'egg', 'beans', 'bread'];
console.log(fruits[3]);

// adding values
fruits[2] = 'moin moin';
console.log(fruits);

//adding values to beginning
fruits.unshift('akara');
console.log(fruits);

//Take last element off
fruits.pop();
console.log(fruits);