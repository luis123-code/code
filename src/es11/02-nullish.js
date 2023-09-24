const usuario1 = {}
const nombre1 = usuario1.name ?? "Andres"
// usuario.name es undefined o null ? Asignar "andres" : asignar usuario.name

const usuario2 = {name: "Juan"}
const nombre2 = usuario2.name ?? "Andres"
// usuario2.name es undefined o null? Asignar "andres" : asignar usuario2.name

console.log(nombre1) // 'Andres' 
console.log(nombre2) // 'Juan'