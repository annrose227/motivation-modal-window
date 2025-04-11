'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

// ✅ Get modal content elements
const modalTitle = document.querySelector('.modal-title');
const modalText = document.querySelector('.modal-text');

// Messages to display
const messages = [
  {
    title: "I'm here for you 🫂",
    text: 'It’s okay to feel sad. Let yourself process things slowly, and remember you’re not alone. Take one breath at a time.',
  },
  {
    title: 'Don’t give up 💪',
    text: 'Even when motivation is low, you’re still making progress. Tough times don’t last, but strong people do — like you!',
  },
  {
    title: 'Stay joyful ✨',
    text: 'It’s beautiful that you’re feeling happy! Celebrate it and let it inspire others around you too. Keep glowing!',
  },
];

// Show modal with specific message
const openModal = function (index) {
  modalTitle.textContent = messages[index].title;
  modalText.textContent = messages[index].text;
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Close modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Button clicks
btnOpenModal.forEach((btn, index) => {
  btn.addEventListener('click', () => openModal(index));
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
