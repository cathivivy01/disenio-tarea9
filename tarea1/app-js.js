const add_event = () => {
    document.querySelectorAll('.cambiar').forEach(element => {
        element.addEventListener('click', (e) => {
            let imgs = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg'];
            let i_random = Math.floor(Math.random() * imgs.length);
            let img = e.target.parentNode.querySelector('img');
            img.src = imgs[i_random];
        });
    });

    document.querySelectorAll('.borrar').forEach(element => {
        element.addEventListener('click', (e) => {
            let target_borrar = e.target.parentNode;
            target_borrar.remove();
        });
    });

    document.getElementById('select_color').addEventListener('click', () => {
        let color = document.getElementById('color').value;
        let all_cards = document.querySelectorAll('.card');
        all_cards.forEach(element => {
            element.style.background = color;
        });
    });
}

add_event();

document.getElementById('add').addEventListener('click', () => {
    let html = `
    <div class="card">
        <img src="./img1.jpg" alt="">
        <button class="borrar">Borrar</button>
        <button class="cambiar">Cambiar</button>
    </div>
    `;
    document.querySelector('.elementos').insertAdjacentHTML('beforeend', html);
    add_event();
});
