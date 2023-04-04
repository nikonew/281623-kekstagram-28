import {PICTURE_COUNT,AVATAR_COUNT,LIKE_MIN_COUNT,LIKE_MAX_COUNT,COMMENT_COUNT,COMMENT_MESSAGES,DESCRIPTIONS,NAMES} from './data.js';
import { getRandomArrayElement, getRandomInteger } from './get-random-integer.js';

function createIdGenerator () {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}
const generatorComment = createIdGenerator();

// функция для создания сообщения
const createMessage = () =>
  Array.from({ length: getRandomInteger(1, 2)}, () =>
    getRandomArrayElement(COMMENT_MESSAGES)).join(' ');

// функция для создания комментария
const createComment = () =>({
  id: generatorComment(),
  url: `img/avatar-${getRandomInteger(1, AVATAR_COUNT).svg}`, // использование шаблонной строки ${}
  massage: createMessage(),
  name: getRandomArrayElement(NAMES),
});

// функция создания изображения
const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: Array.from(
    { length: getRandomInteger(0, COMMENT_COUNT)},
    createComment
  ),
});

// функция выбирает изображение
const getPictures = () =>
  Array.from({ length: PICTURE_COUNT }, (_, pictureIndex) =>
    createPicture(pictureIndex + 1)
  );
getPictures();

const pictures = getPictures();

export { pictures };
