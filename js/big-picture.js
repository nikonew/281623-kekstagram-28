//import { getPictures } from './create.js';
import { DESCRIPTIONS } from './data.js';
import { getRandomArrayElement, isEscapeKey } from './get-random-integer.js';
import { picturesContainer } from './template.js';

const bigImageElement = document.querySelector('.big-picture');
const bigImageCansel = document.querySelector('.big-picture__cancel');
const bigImageSocial = document.querySelector('.big-picture__social');
const bigImageInput = document.querySelector('.social__caption');

const onBigImageKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigImageElement.classList.add('hidden');
  }
};

const clearSimilarList = () => {
  bigImageCansel.innerHTML = '';
};


/*const renderBigPictureDetails = ({url, likes, description}) => {
  bigImageElement.querySelector('.big-picture__img img').src = url;
  bigImageElement.querySelector('.big-picture__img img').alt = description;
  bigImageElement.querySelector('.likes-count').textContent = likes;
  bigImageElement.querySelector('.social__caption').textContent = description;
};*/

/*const showBigImage = (data) => {
  bigImageElement.classList.remove('hidden');
  document.addEventListener('keydown', onBigImageKeydown);
  document.body.classList.add('modal-open');
  renderBigPictureDetails(data);
};*/
const openImagePreview = (evt) => {
  if (evt.target.closest('.picture')) {
    evt.preventDefault();
    bigImageElement.classList.remove('hidden');
    document.body.classList.add('modal-open');
    bigImageElement.querySelector('.big-picture__img img').src = evt.target.src;
  }
  document.addEventListener('keydown', onBigImageKeydown);
};

picturesContainer.addEventListener ('click', openImagePreview);

bigImageCansel.addEventListener ('click', () => {
  bigImageElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  clearSimilarList();
  document.removeEventListener('keydown', onBigImageKeydown);
});

bigImageSocial.addEventListener('click',(evt) => {
  const runDescriptions = getRandomArrayElement(DESCRIPTIONS);
  evt.target.textContent.fill = runDescriptions;
  bigImageInput.value = runDescriptions;
});
