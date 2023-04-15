import { isEscapeKey } from './get-random-integer.js';
import {resetScale, buttonScaleOn, buttonScaleOf} from './changSizeImg.js';
import {resetEffects} from './effects.js';
import './effects.js';

const formImageUpload = document.querySelector('.img-upload__form');
const fileUpload = formImageUpload.querySelector ('#upload-file');
const overlayImage = formImageUpload.querySelector('.img-upload__overlay');
const overlayCloseImage = formImageUpload.querySelector ('#upload-cancel');
const fieldComments = formImageUpload.querySelector ('.text__description');
const fieldHashtags = formImageUpload.querySelector ('.text__hashtags');
const HASHTAG_MAX_COUNT = 5;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const ERROR_TAG_TEXT = 'В заполнении хэштегов допущенны ошибки';

const pristine = new Pristine(formImageUpload, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error',
});

const onImageEscOverlay = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    overlayImage.classList.add('hidden');
    document.body.classList.remove('modal-open');
    formImageUpload.reset();
    pristine.reset();
    resetScale();
  }
};

const fieldCommentsFocus = () => {
  fieldComments.addEventListener('focus' ,() => {
    document.removeEventListener('keydown', onImageEscOverlay);
  });

  fieldComments.addEventListener('blur' ,() => {
    document.addEventListener('keydown', onImageEscOverlay);
  });
};

const fieldHashtagsFocus = () => {
  fieldHashtags.addEventListener('focus' ,() => {
    document.removeEventListener('keydown', onImageEscOverlay);
  });

  fieldHashtags.addEventListener('blur' ,() => {
    document.addEventListener('keydown', onImageEscOverlay);
  });
};

const isValidTags = (tag) => VALID_SYMBOLS.test(tag);

const hasValidHashtagCount = (tags) => tags.length <= HASHTAG_MAX_COUNT;

const hasUniqueHashtag = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};


const isValidateTags = (value) => {
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return hasValidHashtagCount(tags) && hasUniqueHashtag(tags) && tags.every(isValidTags);
};

pristine.addValidator(
  fieldHashtags,
  isValidateTags,
  ERROR_TAG_TEXT
);


const closeImageModal = () => {
  overlayImage.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onImageEscOverlay);
  overlayCloseImage.removeEventListener('click', closeImageModal);
  formImageUpload.reset();
  pristine.reset();
  resetScale();
  buttonScaleOf();
  resetEffects();
};

const openImageModal = () => {
  overlayImage.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onImageEscOverlay);
  overlayCloseImage.addEventListener('click', closeImageModal);
  fieldCommentsFocus();
  fieldHashtagsFocus();
  buttonScaleOn();
};

fileUpload.addEventListener('change', openImageModal);
