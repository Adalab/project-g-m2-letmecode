'use strict';
// Escribe la info del input en la tarjeta
const formName = document.querySelector('.form__field-name');
const previewName = document.querySelector('.preview-card__name');
const formJob = document.querySelector('.form__field-job');
const previewJob = document.querySelector('.preview-card__career');

function writing(event) {
    previewName.innerHTML = event.currentTarget.value;
}
formName.addEventListener('keyup', writing);

function writing2(event) {
    previewJob.innerHTML = event.currentTarget.value;
}
formJob.addEventListener('keyup', writing2);
