import './data.js';
import {userDataArray} from './data.js';

const pictureElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const pictureFragment = document.createDocumentFragment();

userDataArray.forEach((dataPicture) => {
  const Element = pictureTemplate.cloneNode(true);
  Element.querySelector('.picture__img').src = dataPicture.url;
  Element.querySelector('.picture__likes').textContent = dataPicture.likes;
  Element.querySelector('.picture__comments').textContent = dataPicture.comments.length;
  pictureFragment.appendChild(Element);
});

pictureElement.appendChild(pictureFragment);
