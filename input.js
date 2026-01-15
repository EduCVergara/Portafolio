import Swal from 'sweetalert2';

me = document.getElementById("me");
let timerInterval;
me.addEventListener("click", () => {
    Swal.fire({
        title: "Curioso, ¿eh?",
        text: "Si, soy yo!",
        icon: "info",
        confirmButtonText: "Cerrar",
        draggable: true,
        footer: '<a href="https://www.linkedin.com/in/educonstancio/">¿Quieres saber más de mí?, haz click aquí</a>',
        showCloseButton: true,
        html: "¡Si, soy yo! <br><span>Me cerraré en <b></b> milisegundos si no presionas nada 👀.</span>",
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
    });
});