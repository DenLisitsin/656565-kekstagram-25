import './data.js';
import {newArray} from './data.js';

const pictureElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const userPicture = newArray;
const pictureFragment = document.createDocumentFragment();

userPicture.forEach((createObject) => {
  const Element = pictureTemplate.cloneNode(true);
  Element.querySelector('.picture__img').src = createObject.url;
  Element.querySelector('.picture__likes').textContent = createObject.likes;
  Element.querySelector('.picture__comments').textContent = createObject.comments;
  pictureFragment.appendChild(Element);
});

pictureElement.appendChild(pictureFragment);
