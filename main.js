
function tocaSom(idElementoAudio) {

    const elemento = document.querySelector(idElementoAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Valor inválido')
    }
};

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumentos = tecla.classList[1];

    const idAudio = `#som_${instrumentos}`; // template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    };

    tecla.onkeydown = function (evento) {
        if (evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
};
