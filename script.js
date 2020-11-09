'use strict';

const Domstring = {
  Modal: document.querySelector('.modal'),
  Close: document.querySelector('.close-modal'),
  ShowModalAll: document.querySelectorAll('.show-modal'),
  Overlay: document.querySelector('.overlay'),
  Body: document.querySelector('body'),
};

const OpenModal = () => {
  Domstring.Modal.classList.remove('hidden');
  Domstring.Overlay.classList.remove('hidden');
};
const CloseModal = () => {
  Domstring.Modal.classList.add('hidden');
  Domstring.Overlay.classList.add('hidden');
};
for (let i = 0; i < Domstring.ShowModalAll.length; i++) {
  Domstring.ShowModalAll[i].addEventListener('click', OpenModal);
}

Domstring.Close.addEventListener('click', CloseModal);
Domstring.Overlay.addEventListener('click', CloseModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !Domstring.Modal.classList.contains('hidden')) {
    CloseModal();
  }
});
