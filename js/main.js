function commentLength (commentLine, maxLeigth) {
  return commentLine < maxLeigth;
}

commentLength (120, 140);

function getRandomNumber(min, max) {
  if (min >= max) {
    return 'невное значение';
  }
  return Math.floor(Math.random() * (max - min) + min);
}

getRandomNumber (0, 140);
