let whoWon = document.querySelector('h2');
let leftCard = document.querySelector('.left');
let rightCard = document.querySelector('.right');
let leftImg = document.querySelector('#leftImg');
let rightImg = document.querySelector('#rightImg');

window.addEventListener('keydown', function (dets) {
  if (dets.key === 'Escape') {
    whoWon.textContent = 'Who Won? 🏆';
    return;
  }
  leftCard.classList.add('animate');
  leftCard.addEventListener('animationend', () => {
    leftCard.classList.remove('animate');
  });

  rightCard.classList.add('animate');
  rightCard.addEventListener('animationend', () => {
    rightCard.classList.remove('animate');
  });

  let x = Math.floor(Math.random() * 3 + 1);
  let y = Math.floor(Math.random() * 3 + 1);

  leftImg.setAttribute('src', `./assets/${x}.png`);
  rightImg.setAttribute('src', `./assets/${y}.png`);

  let scissor = 1;
  let rock = 2;
  let paper = 3;

  if (x === y) whoWon.textContent = '🏆🎉 Draw 🏆🎉';
  else if (x === scissor && y === paper) whoWon.textContent = '🏆🎉 User Won';
  else if (x === rock && y === scissor) whoWon.textContent = '🏆🎉 User Won';
  else if (x === paper && y === rock) whoWon.textContent = '🏆🎉 User Won';
  else whoWon.textContent = 'Computer Won 🏆🎉';
});
