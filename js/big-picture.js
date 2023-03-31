//import { getPictures } from './create.js';
import { getPictures } from './create.js';
import { isEscapeKey } from './get-random-integer.js';
import { picturesContainer } from './template.js';

const bigImageElement = document.querySelector('.big-picture');
//const bigImagePreviewElement = document.querySelector('.big-picture__preview');

const onBigImageKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigImageElement.classList.add('hidden');
  }
};

//const renderPictureDetails = getPictures();

const renderPictureDetails = (bigImageData) => {
  bigImageElement.querySelector('.big-picture__img img').src = bigImageData.url;
  bigImageElement.querySelector('.big-picture__img img').alt = bigImageData.description;
  bigImageElement.querySelector('.likes-count').textContent = bigImageData.likes;
  bigImageElement.querySelector('.social__caption').textContent = bigImageData.description;
};

const showBigImage = (data) => {
  bigImageElement.classList.remove('hidden');
  document.addEventListener('keydown', onBigImageKeydown);
  document.body.classList.add('modal-open');
  
};

picturesContainer.addEventListener ('click', showBigImage);

const closeBigImage = () => {
  bigImageElement.classList.remove('hidden');
  document.body.classList.remove('modal-open');
};

picturesContainer.addEventListener('click', closeBigImage);
/*const openImagePreview = (evt) => {
  if (evt.target.closest('.picture')) {
    evt.preventDefault();
    bigImageElement.classList.remove('hidden');
    document.body.classList.add('modal-open');
    bigImagePreviewElement.querySelector('.big-picture__img img').src = evt.target.src;
  }
  document.addEventListener('keydown', onBigImageKeydown);
};


picturesContainer.addEventListener ('click', openImagePreview);
*/

