import { pictures } from './create.js';

const templatePicture = document.querySelector('#picture').content;
const picturesContainer = document.querySelector('.pictures');


const pictureFragment = document.createDocumentFragment();

pictures.forEach((imageData) => {
  const userPicture = templatePicture.cloneNode(true);
  userPicture.querySelector('.picture__img').src = imageData.url;
  userPicture.querySelector('.picture__likes').textContent = imageData.likes;
  userPicture.querySelector('.picture__comments').textContent = imageData.comments.length;
  userPicture.querySelector('.picture__img').dataset.pictureId = imageData.id;
  picturesContainer.append(userPicture);
});

picturesContainer.append(pictureFragment);


export { picturesContainer};
