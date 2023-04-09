import { pictures } from './create.js';
import { picturesContainer } from './template.js';
import { isEscapeKey } from './get-random-integer.js';

const bigImageElement = document.querySelector('.big-picture');
const bigImageCansel = document.querySelector('.big-picture__cancel');
const bigImageCommentTemplate = document.querySelector('.social__comments');
const bigImageCommentContainer = document.querySelector('.social__comment');
const bigImageCommentsCount = document.querySelector('.social__comment-count');
const bigImageCommentsLoader = document.querySelector('.comments-loader');
const fragment = document.createDocumentFragment();
const COMMENTS_PORTION = 5;
let commentsShow = 0;
const commentsArray = [];

const renderAllComments = (array) => {
  for (let i = 0; i < array.length;i++) {
    commentsArray.push(array[i]);
  }
};

const onBigImageKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigImageElement.classList.add('hidden');
    commentsShow = 0;
    commentsArray.length = 0;
  }
};


const renderComments = (pictureDataList) => {
  pictureDataList.forEach((item) => {
    const commentPicture = bigImageCommentContainer.cloneNode(true);
    commentPicture.querySelector('.social__picture').src = item.url;
    commentPicture.querySelector('.social__picture').alt = item.name;
    commentPicture.querySelector('.social__text').textContent = item.message;
    bigImageCommentTemplate.append(commentPicture);
  });
  bigImageCommentTemplate.append(fragment);
};

const loaderComments = () => {
  const commentsNext = commentsArray.slice(commentsShow,commentsShow + COMMENTS_PORTION);
  commentsShow += commentsNext.length;
  renderComments(commentsNext);


  if (commentsShow >= commentsArray.length) {
    bigImageCommentsLoader.classList.add('hidden');
    commentsShow = commentsArray.length;
  } else {
    bigImageCommentsLoader.classList.remove('hidden');
  }
  bigImageCommentsCount.innerHTML = `${commentsShow} из <span class="comments-count"> ${commentsArray.length}</span> комментариев`;
};

const renderBigPictureDetails = ({url, likes, comments, description}) => {
  bigImageElement.querySelector('.big-picture__img img').src = url;
  bigImageElement.querySelector('.big-picture__img img').alt = description;
  bigImageElement.querySelector('.likes-count').textContent = likes;
  bigImageElement.querySelector('.social__caption').textContent = description;
  bigImageElement.querySelector('.comments-count').textContent = comments.length;
  renderAllComments(comments);
  loaderComments();
};

const openImagePreview = (evt) => {
  if (evt.target.closest('.picture')) {
    evt.preventDefault();
    bigImageElement.classList.remove('hidden');
    document.body.classList.add('modal-open');
    bigImageElement.querySelector('.big-picture__img img').src = evt.target.src;
  }

  const pictureDetails = pictures;
  const pictureId = parseInt(evt.target.dataset.pictureId, 10);
  const pictureData = pictureDetails.find((item) => item.id === pictureId);
  renderBigPictureDetails(pictureData);
  const list = pictureData.comments;
  bigImageCommentTemplate.innerHTML = '';
  renderComments(list);
  document.addEventListener('keydown', onBigImageKeydown);
};

picturesContainer.addEventListener ('click', openImagePreview);
bigImageCommentsLoader.addEventListener('click', loaderComments);

bigImageCansel.addEventListener ('click', () => {
  bigImageElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onBigImageKeydown);
  bigImageCommentsLoader.removeEventListener('click', loaderComments);
  commentsShow = 0;
  commentsArray.length = 0;
});

