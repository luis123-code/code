// Declaración de la clase Animal
class Animal {
	// Constructor: le enviamos a la clase como argumentos
	// los valores para los atributos y el constructor se 
	// encarga de asignarlos al nuevo objeto:
	constructor(especie, edad, patas) {
		this.especie = especie; // Asignar atributo especie
		this.edad = edad; // Asignar atributo edad
		this.patas = patas; // Asignar atributo patas
	}

	// Métodos de la clase: pueden contener cualquier lógica.
	#dormir() {
		return 'Zzzz';
	}

	#comer() {
		return 'Yummy!';
	}

	#caminar() {
		return '¡Caminando!, la la la';
	}

	// Getter y Setter (solo para edad para no alargar)
	// (Recordar: this hace referencia al objeto)
	get getEdad() {
		return this.edad;
	}

	set setEdad(newEdad) {
		this.edad= newEdad;
	}
}

// Ahora instanciemos los objetos: tendremos perro, paloma y gato como objetos de tipo Animal. Al enviar el valor de los atributos como parámetros, el constructor automáticamente los asigna al nuevo objeto.
const perro = new Animal('canino', 3, 4);
const paloma = new Animal('ave', 1, 2);
const gato = new Animal('felino', 2, 4);

// Podemos acceder a los métodos desde cada objeto:
console.log(perro.dormir());	// Retorna error por ser privado
console.log(paloma.comer()); // Retorna error por ser privado
console.log(gato.caminar()); // Retorna error por ser privado

// Usamos los getter para obtener los valores de los atributos y los setters para reasignarlos.
console.log(perro.getEdad); // Retorna 3
gato.setEdad = 3; // Cambia su atributo edad a 3
console.log(gato.getEdad)