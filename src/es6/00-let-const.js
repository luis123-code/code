// var
var lastName = 'David';     // Declarar y asignar
lastName = 'Oscar';         // Reasignar permitido
console.log(lastName);

// let
let fruit = 'Apple';        // Declarar y asignar
fruit = 'Kiwi';             // Reasignar permitido
console.log(fruit);

const animal = 'Dog';       // Declarar y asignar
animal = 'Cat';             // Reasignar NO permitido
console.log(animal);

// Scope
const fruits = () => {
    if(true) {
        var fruit1 = 'Apple';       // Function (global) Scope: accesible desde toda la función (const)
        let fruit2 = 'Kiwi';        // Block (local) Scope: accesible solo desde el bloque donde se declara (if)
        const fruit3 = 'Banana';    // Block (local) Scope: accesible solo desde el bloque donde se declara (if)

        fruit2;
        fruit3;
    }
    fruit1;
}