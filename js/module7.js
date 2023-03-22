
const templatePicture = document.querySelector('#picture').content;
const picturesContainer = document.querySelector('.picture');
const pictureFragment = document.createDocumentFragment();

const createPictures = ({url, likes, comments}) => {
  const userPicture = templatePicture.cloneNode(true);
  userPicture.querySelector('.picture__img').src = url;
  userPicture.querySelector('.picture__like').textContent = likes;
  userPicture.querySelector('.picture__comments').textContent = comments;
};

createPictures(pictureFragment);
