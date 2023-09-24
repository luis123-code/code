function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Daniel', 'Fernando', 'Daniela', 'Fernanda', 'Julian']);

console.log(it.next().value); // Daniel
console.log(it.next().value); // Fernando
console.log(it.next().value); // Daniela
// (...)