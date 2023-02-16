let fruits=['mango','melon','peas','passion'];
console.log(fruits);

fruits.push('apple','bananas');
console.log(fruits);

fruits.shift();
console.log(fruits);


fruits.unshift('mango');
console.log(fruits);


fruits.pop();
console.log(fruits);



console.log(fruits.length);



fruits.splice(5,0, 'apples');
console.log(fruits);


// have not done reduce method

let output=fruits.includes('mangos');
console.log('output:',output);


let names=['muthomi','Frank'];
let fullname=names.join('');
console.log(names);
console.log(fullname);

let position=fruits.indexOf('peas');
console.log( 'position:',position);


const numbers = [1, 2, 3, 4, 5];
function isEven(number) {
  return number % 2 === 0;}
const evenNumber = numbers.find(isEven);
console.log(evenNumber);




function doubleNumber(number) {
  return number * 2;}
const doubledNumbers = numbers.map(doubleNumber);
console.log(doubledNumbers);




const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); 



numbers.reverse();
console.log(numbers)







