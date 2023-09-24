// Función clásica
function square(num) {
    return num * num;
}

// Arrow function clásica
const square = (num) => {       // Se declaran con let y const (generalmente const)
    return num * num;
}

// Arrow function con return implícito
const square = num => num * num;    // Los () en los parámetros se pueden omitir si es uno solo
