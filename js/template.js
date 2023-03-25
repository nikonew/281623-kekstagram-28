import { getPictures } from './create.js';

const templatePicture = document.querySelector('#picture').content;
const picturesContainer = document.querySelector('.pictures');
const pictureFragment = document.createDocumentFragment();

const similarPictures = getPictures();

similarPictures.forEach((imageData, likes, comments) => {
  const userPicture = templatePicture.cloneNode(true);
  userPicture.querySelector('.picture__img').src = imageData.url;
  userPicture.querySelector('.picture__likes').textContent = likes;
  userPicture.querySelector('.picture__comments').textContent = comments.lenght;
  picturesContainer.append(userPicture);
});

picturesContainer.appendChild(pictureFragment);


