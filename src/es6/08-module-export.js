// Exportación de código desde declaración
export const add = (x,y) => {
    return x + y
}

// Exportación de código con llaves
const less = (x,y) => {
    return x - y
}
export { less }

// Exportaciones por defecto desde declaración (solo funciones)
export default function add2 (x,y){
    return x + y;
}
// or
// export default add2;