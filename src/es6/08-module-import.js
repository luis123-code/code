// Previa configuración en package.json:
// "type": "module"

import { add, less } from "./08-module-export.js";  // Importación de código
import suma from "./08-module-export.js" // Importación por defecto

console.log(add(2,2));
console.log(less(3,2));
console.log(suma(3,4));