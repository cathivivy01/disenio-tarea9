// Inicialización de variables
let count = 0;               // Contador acumulado
let seguir = true;            // Indica si el bucle debe continuar
let promeasEjecutada = false; // Indica si la promesa ya se ejecutó

// Función para generar números aleatorios enteros
const getRamdomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

// Función asíncrona para simular una operación de suma con promesa
const sumar = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(0.01); // Resuelve la promesa con un valor fijo de 0.01 después de un retardo de 10 milisegundos
        }, 10);
    });
};

// Función principal asíncrona
const app = async () => {
    let n_azar = getRamdomInt(1, 4);
    // Si la promesa aún no se ha ejecutado, esper un tiempo aleatorio antes de continuar
    if (!promeasEjecutada) {
        await new Promise(resolve => {
            setTimeout(() => {
                $('.parar').css('background', 'green'); // Cambia el color de fondo del elemento con clase 'parar' a verde
                resolve();
                promeasEjecutada = true; // Marca la promesa como ejecutada
            }, n_azar * 1000);
        });
    }
    // Bucle principal
    while (seguir) {
        let s = await sumar(); // Realiza la operación de suma asincrónicamente
        count += s;             // Actualiza el contador
    }
};
// Evento de clic en el elemento con clase 'parar'
$('.parar').click(() => {
    if (promeasEjecutada) {
        // Si la promesa ya se ha ejecutado
        $('.parar').css('display', 'none');       // Oculta el elemento con clase 'parar'
        $('.resetear').empty();                    // Elimina cualquier contenido dentro del elemento con clase 'resetear'
        $('.resetear').css('display', 'block');   // Muestra el elemento con clase 'resetear'
        $('.resetear').append(count.toFixed(3));  // Agrega al elemento con clase 'resetear' el valor del contador redondeado a 3 decimales
        seguir = false;                           // Detiene el bucle
    } else {
        // Si la promesa no se ha ejecutado
        $('.parar').remove();                     // Elimina el elemento con clase 'parar'
        $('.resetear').css('display', 'block');   // Muestra el elemento con clase 'resetear'
        $('.resetear').css('background-color', 'yellow'); // Cambia el color de fondo del elemento con clase 'resetear' a amarillo
        seguir = false;                           // Detiene el bucle
    }
});
// Evento de clic en el elemento con clase 'resetear'
$('.resetear').click(() => window.location.reload()); // Recarga la página al hacer clic en 'resetear'
// Inicia la aplicación
app();
