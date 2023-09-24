// Propagación en nuevo objeto
const objeto = {
  nombre: "Andres",
  age: 23,
};

const usuario = {
  ...objeto,
  plataforma: "Platzi",
};

// Copiar objeto con diferente referencia en memoria
const objetoOriginal = { a: 1, b: 2 };
const objetoReferencia = objetoOriginal;    // Misma referencia en memoria
const objetoCopia = { ...objetoOriginal };  // Diferente referencia en memoria
