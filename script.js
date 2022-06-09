'use strict';

const openModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const openingModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closingModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i = 0; i < openModal.length; i++) {
    openModal[i].addEventListener('click', openingModal);
}

closeModal.addEventListener('click', closingModal);
overlay.addEventListener('click', closingModal);

document.addEventListener('keydown', function(e) {
    console.log(e.key);
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closingModal();
    }
});