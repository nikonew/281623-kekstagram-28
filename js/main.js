import './create.js';
import './template.js';
import './big-picture.js';
import './pristineModal.js';
import {closeImageModal, setFormSubmit} from './pristineModal.js';
import {showAlert} from './get-random-integer.js';
import {getData, sendData} from './api.js';
import {showErrorMessage,showSuccessMessage} from './message-form.js';
import { openImagePreview } from './big-picture.js';

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
  openImagePreview(data);
} catch (err) {
  showAlert(err.message);
}
