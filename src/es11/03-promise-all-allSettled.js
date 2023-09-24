const promise1 = new Promise((resolve, reject) => reject("Reject 1"));
const promise2 = new Promise((resolve, reject) => resolve("Resolve 2"));
const promise3 = new Promise((resolve, reject) => resolve("Resolve 3"));

Promise.all([promise1, promise2, promise3])
  .then(response => console.log(response))
  .catch(error => console.log(error));
// Entra por catch porque promesa 1 fue rechazada y retorna Reject 1 como causa


Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));
/*
[
  { status: 'rejected', reason: 'Reject 1' },
  { status: 'fulfilled', value: 'Resolve 2' },
  { status: 'fulfilled', value: 'Resolve 3' }
]
*/