let count = 0;
let seguir = true;
let promeasEjecutada = false;

const getRamdomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

const sumar = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(0.01);
        }, 10);
    });
};

const app = async () => {
    let n_azar = getRamdomInt(1, 4);

    if (!promeasEjecutada) {
        await new Promise(resolve => {
            setTimeout(() => {
                // Simular $('.parar').css('background', 'green');
                document.querySelector('.parar').style.backgroundColor = 'green';
                resolve();
                promeasEjecutada = true;
            }, n_azar * 1000);
        });
    }

    while (seguir) {
        let s = await sumar();
        count += s;
    }
};

document.querySelector('.parar').addEventListener('click', () => {
    if (promeasEjecutada) {
        document.querySelector('.parar').style.display = 'none';
        document.querySelector('.resetear').innerHTML = count.toFixed(3);
        document.querySelector('.resetear').style.display = 'block';
        seguir = false;
    } else {
        document.querySelector('.parar').remove();
        document.querySelector('.resetear').style.display = 'block';
        document.querySelector('.resetear').style.backgroundColor = 'yellow';
        seguir = false;
    }
});
document.querySelector('.resetear').addEventListener('click', () => window.location.reload());
app();
