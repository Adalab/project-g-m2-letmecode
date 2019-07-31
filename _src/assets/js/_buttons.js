'use strict';

const btnShare = document.querySelector('.button-card');

function noSharing(event) {
    event.preventDefault()
}

btnShare.addEventListener('click', noSharing);
