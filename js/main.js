const getRandomNumber = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const id = Array.from({length: 25}, (a, b) => b+1);
const url = [];
for (let i = 1; i < 25; i++) {
  const str =`photos/${  i  }.jpg`;
  url.push(str);
}
const description = ['Я отстаю!!!','Скоро лето, скоро вэйк','горы и сноуборд','прыгаю с парашютом','Работаю работу','учу js','мой котЭ туповат'];
const likes = Array.from({length: 200}, (a, b) => b+15);

const getRandomArrayIndex = (element) => element[getRandomNumber(0, element.length - 1)];

const userId = getRandomNumber(1, 100);
const avatar = [];
for (let i = 1; i < 6; i++) {
  const str = `img/avatar-${  i  }.svg`;
  avatar.push(str);
}
const userName = ['Абрам','Аваз','Август','Авдей','Автандил','Адам','Адис','Адольф','Адриан'];
const message = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const comments = () => ({
  id : userId,
  avatar : getRandomArrayIndex(avatar),
  name : getRandomArrayIndex(userName),
  message : getRandomArrayIndex(message)
});

const createObject = () => ({
  id : getRandomArrayIndex(id),
  url : getRandomArrayIndex(url),
  description : getRandomArrayIndex(description),
  likes : getRandomArrayIndex(likes),
  comments : comments()
});

const createArray = Array.from({length: 5}, createObject);
