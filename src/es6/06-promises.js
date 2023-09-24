const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Oops!');
        }
    })
}

anotherFunction()
    .then(response => console.log(response))      // Cuando se resuelva.
    // .then (...)                                  // Si se necesitan poner más.
    .catch(err => console.log(err));                // Si no se resuelve.



    
// Ejemplo asíncrono con setTimeOut simulando llegada externa (como BD)
datos = [{
    id: 1,
    title: 'Iron Man',
    year: 2008
},{
    id: 2,
    title: 'Spiderman: Homecoming',
    year: 2017
},{
    id: 3,
    title: 'Avengers: Endgame',
    year: 2019
}];

const getDatos = () => {
    setTimeout(() => {
        return datos;
    }, 1500);               // Delay 1.5 sec.
}
console.log(getDatos());    // Undefined, al momento en el que se ejecuta no han llegado los datos.

//Solucionado con promises
const getDatosPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(datos);
        }, 1500);
    });
}
getDatosPromise()
    .then((datos) => console.log(datos));       // Cuando se resuelva, almacena resultado en datos y los muestra.