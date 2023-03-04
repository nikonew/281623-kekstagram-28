const PICTURE_COUNT = 25;
const AVATAR_COUNT = 6;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENT_COUNT = 25;
const DESCRIPTIONS = [
  'Свистать всех на верх',
  'Тише едешь - дальше будешь.',
  'Чем дальше в лес, тем больше дров',
  'Бросить тень на плетень',
  'Рад бы в рай да грехи не пускают',
  'Запретный плод сладок',
];
const COMMENT_MESSAGES = [
  'Всё отлично!',
  'В целом все не плохо. Но  не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула  фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const NAMES = [
  'Василий',
  'Андрей',
  'Макс',
  'Петя',
  'Антошик',
  'Боря',
];

// функция генерирует случайное число

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

// функция возвращает случайное число
const getRandomArrayElement = (array) =>
  array[getRandomInteger(0, array.length - 1)];

 
function createIdGenerator () {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};
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
  console.log(getPictures());