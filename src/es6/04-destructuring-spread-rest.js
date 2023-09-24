// Arrays destructuring
let fruits = ['Apple', 'Banana', 'Orange', 'Pineapple'];
let [a,b,c,d] = fruits;
console.log(a); // Apple
console.log(b); // Banana
console.log(c); // Orange
console.log(d); // Pineapple
let [,,, last] = fruits;
console.log(last); // Pineapple


// Object destructuring
user = { username: 'Daniel', age: 25 }
let { username, age } = user;
console.log(username);
console.log(age);


// Spread operator (propagación)
let person = { name: 'Daniel', age: 28 };
let country = 'CO';

let data = { id: 1, ...person, country } // { id: 1, name: Daniel, age: 28, country: CO }


// Parámetro rest (empaquetar restante)
function sum(num, ...values) {
    // (...)
}
sum(1,2,3,4,5,6); //num = 1, values=[2,3,4,5,6]