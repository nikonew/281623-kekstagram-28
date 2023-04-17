import './create.js';
import './template.js';
import './big-picture.js';
import './pristineModal.js';
import {closeImageModal, setFormSubmit} from './pristineModal.js';
import {showAlert, debounce} from './get-random-integer.js';
import {getData, sendData} from './api.js';
import {showErrorMessage,showSuccessMessage} from './message-form.js';
import { openImagePreview } from './big-picture.js';
import {filteredPictures,init} from './filter.js';

setFormSubmit (async (data) => {
  try {
    await sendData(data);
    closeImageModal();
    showSuccessMessage();
  } catch {
    showErrorMessage();
  }
});

try {
  const data = await getData();
  const debounceRenderPictureModal = debounce(openImagePreview);
  init(data,debounceRenderPictureModal);
  openImagePreview(filteredPictures());
} catch (err) {
  showAlert(err.message);
}
