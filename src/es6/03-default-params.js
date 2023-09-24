// Manera clásica de asignar valores por defecto a parámetros
function newUser(name, age, country) {
    var name = name || 'Daniel';
    var age = age || 25;
    var country = country || 'CO';
}

// Default Params (ES6)
function newAdmin(name = 'Daniel', age = 25, country = 'CO') {
    
} 