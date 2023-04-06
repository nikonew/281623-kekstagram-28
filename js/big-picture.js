import { pictures } from './create.js';
import { picturesContainer } from './template.js';
import { isEscapeKey } from './get-random-integer.js';

const bigImageElement = document.querySelector('.big-picture');
const bigImageCansel = document.querySelector('.big-picture__cancel');
const bigImageCommentTemplate = document.querySelector('.social__comments');
const bigImageCommentContainer = document.querySelector('.social__comment');
const bigImageComments = document.querySelector('.social__comment-count');
const bigImageCommentsLoader = document.querySelector('.comments-loader');
const fragment = document.createDocumentFragment();

const onBigImageKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigImageElement.classList.add('hidden');
  }
};


const renderBigPictureDetails = ({url, likes, description}) => {
  bigImageElement.querySelector('.big-picture__img img').src = url;
  bigImageElement.querySelector('.big-picture__img img').alt = description;
  bigImageElement.querySelector('.likes-count').textContent = likes;
  bigImageElement.querySelector('.social__caption').textContent = description;
};


const openImagePreview = (evt) => {
  if (evt.target.closest('.picture')) {
    evt.preventDefault();
    bigImageElement.classList.remove('hidden');
    document.body.classList.add('modal-open');
    bigImageComments.classList.add('hidden');
    bigImageCommentsLoader.classList.add('hidden');
    bigImageElement.querySelector('.big-picture__img img').src = evt.target.src;
  }

  const pictureDetails = pictures;
  const pictureId = parseInt(evt.target.dataset.pictureId, 10);
  const pictureData = pictureDetails.find((item) => item.id === pictureId);
  renderBigPictureDetails(pictureData);
  pictureData.comments.forEach((item) => {
    bigImageCommentTemplate.innerHTML = '';
    const commentPicture = bigImageCommentContainer.cloneNode(true);
    commentPicture.querySelector('.social__picture').src = item.url;
    commentPicture.querySelector('.social__picture').alt = item.name;
    commentPicture.querySelector('.social__text').textContent = item.message;
    bigImageCommentTemplate.append(commentPicture);
  });
  bigImageCommentTemplate.append(fragment);
  document.addEventListener('keydown', onBigImageKeydown);
};

picturesContainer.addEventListener ('click', openImagePreview);

bigImageCansel.addEventListener ('click', () => {
  bigImageElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onBigImageKeydown);
});


