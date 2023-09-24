// Generador function* con asyn y await
async function* anotherGenerator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGenerator();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log('Hello');
// Hello -> 1 -> 2 -> 3


// for await
async function arrayOfNames(array) {
    for await (let value of array) {
        console.log(value);
    }
}

const names = arrayOfNames(['Daniel', 'Fernando', 'Ramirez']);
console.log('After');
// After -> Daniel -> Fernando -> Ramirez