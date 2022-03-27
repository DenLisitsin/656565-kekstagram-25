import {userDataArray, comment, avatar} from './data.js';
const modal = document.querySelector('.big-picture');

modal.classList.remove('hidden');

const bigPicture = document.querySelector('.big-picture__img');

userDataArray.forEach((dataPicture) => {
  bigPicture.querySelector('img').src = dataPicture.url;
  document.querySelector('.likes-count').textContent = dataPicture.likes;
  document.querySelector('.comments-count').textContent = dataPicture.comments.length + 5;
});

document.querySelector('.social__picture').src = ????;
