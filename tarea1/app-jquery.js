// Función para agregar eventos a los elementos de la interfaz
const add_event = () => {
    // Evento al hacer clic en elementos con clase 'cambiar'
    $('.cambiar').click(e => {
        // Array de nombres de imágenes
        let imgs = ['img1.png', 'img2.webp', 'img3.webp', 'img4.png'];

        // Genera un índice aleatorio para seleccionar una imagen
        let i_random = Math.floor(Math.random() * imgs.length);

        // Encuentra el elemento 'img' dentro del contenedor padre del elemento clicado
        let img = $(e.target.parentNode).find('img')[0];

        // Cambia la fuente de la imagen con una imagen aleatoria
        img.src = imgs[i_random];
    });

    // Evento al hacer clic en elementos con clase 'borrar'
    $('.borrar').click(e => {
        // Encuentra el elemento padre del elemento clicado y lo elimina
        let target_borrar = e.target.parentNode;
        target_borrar.remove();
    });

    // Evento al hacer clic en el elemento con id 'select_color'
    $('#select_color').click(() => {
        // Obtiene el valor del campo de entrada de color
        let color = $('#color').val();

        // Selecciona todos los elementos con clase 'card'
        let all_cards = $('.card');

        // Itera sobre cada elemento y cambia el color de fondo
        all_cards.each((index, element) => {
            $(element).css('background', color);
        });
    });
};

// Llama a la función para agregar eventos a los elementos existentes
add_event();

// Evento al hacer clic en el elemento con id 'add'
$('#add').click(e => {
    // Plantilla HTML para agregar un nuevo elemento 'card'
    let html = /*html */ `
        <div class="card">
            <img src="./img4.png" alt="">
            <button class="borrar">Borrar</button>
            <button class="cambiar">Cambiar</button>
        </div>
    `;

    // Agrega la plantilla al contenedor con clase 'elementos'
    $('.elementos').append(html);

    // Selecciona todos los elementos con clase 'card' y cambia el color de fondo
    $('.card').each((index, element) => {
        $(element).css('background', $('#color').val());
    });

    // Vuelve a llamar a la función para agregar eventos a los nuevos elementos
    add_event();
});
