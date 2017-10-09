// Get Modal Element
var modal = document.getElementById('simple-modal');

// Get open Modal Button
var modalBtn = document.getElementById('modal-btn');

// Get Close Button
var closeBtn = document.getElementsByClassName('close-btn')[0];


 // Listen for click
modalBtn.addEventListener('click', openModal => {
  modal.style.display = 'block'
});

closeBtn.addEventListener('click', closeModal => {
  modal.style.display = 'none'
});

// Listen for Outside Click 
window.addEventListener('click', clickOutside = (e) => {
  if (e.target == modal) {
  modal.style.display = 'none'
  }
});