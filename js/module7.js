import { getPictures } from './create.js';

const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');
const pictureFragment = document.createDocumentFragment();

const similarPictures = getPictures();

similarPictures.forEach((url, likes, comments) => {
  const userPicture = templatePicture.cloneNode(true);
  userPicture.querySelector('.picture__img').src = url;
  userPicture.querySelector('.picture__like').textContent = likes;
  userPicture.querySelector('.picture__comments').textContent = comments;
  picturesContainer.append(userPicture);
});

picturesContainer.appendChild(pictureFragment);
