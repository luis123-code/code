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
    .catch(err => console.log(err))                 // Si no se resuelve.
    .finally( () => console.log('Finaly'));         // Al finalizar (indiferente si se resuelve o no)