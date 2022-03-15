import {description, userName, message} from './data.js';

const getRandomNumber = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const url = Array.from({length: 25}, (_, i) => `photos/${i+1}.jpg`);


const getRandomArrayElement = (element) => element[getRandomNumber(0, element.length - 1)];


const avatar = Array.from({length: 6}, (_, i) => `img/avatar-${i+1}.svg`);

const comment = (userId) => ({
  id : userId,
  avatar : getRandomArrayElement(avatar),
  name : getRandomArrayElement(userName),
  message : getRandomArrayElement(message)
});

const createObject = (id) => ({
  id : id,
  url : getRandomArrayElement(url),
  description : getRandomArrayElement(description),
  likes : getRandomNumber(15, 200),
  comments : Array.from({length: getRandomNumber(0,30)}, (_, i) => comment(i+1))
});

const newArray = Array.from({length: 25}, (_, i) => createObject(i+1));

export {getRandomNumber, getRandomArrayElement, comment, createObject, newArray};
