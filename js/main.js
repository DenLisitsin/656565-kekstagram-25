function getCommentLength(commentLine, maxLeigth) {
  return commentLine.length < maxLeigth;
}

getCommentLength ('я текст', 140);

function getRandomNumber(min, max) {
  if (min <= 0 && min < max) {
    // eslint-disable-next-line no-console
    console.log('неверное значение');
    return;
  }
  return Math.floor(Math.random() * (max - min) + min);
}

getRandomNumber (0, 140);
