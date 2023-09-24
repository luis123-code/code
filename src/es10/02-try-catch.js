// Default try-catch
try {
    hello();
} catch(error) {
    console.log(error);
}

// Manejo de catch sin el error
try {
    anotherFunction();
} catch {
    console.log('Esto es un error')
}