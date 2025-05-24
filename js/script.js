import {
  setupModalTrigger,
  setupModalClose,
  setupOutsideClickClose,
} from "./utils/modalHelpers.js";

import { getEl } from "./utils/dom.js";
import { displayCards } from "./modules/displayCards.js";
import { setAutoFocus } from "./modules/focusCard.js";
import { updateEditForm } from "./modules/profileEditor.js";
import { previewableCards } from "./modules/previewableCards.js";
import { createNewPost } from "./modules/newPost.js";

const editModal = getEl("#editModal");
const postModal = getEl("#postModal");
const editBtnEl = getEl("#editBtn");
const cancelBtn = getEl("#cancelBtn");

const modalPost = getEl("#postModal");
const newPostBtn = getEl("#post-btn");
const closePostModal = getEl("#closeModal");

const editForm = getEl("#editForm");
const nameError = getEl("#name-error");
const descError = getEl("#description-error");
const fileInput = getEl("#editImage");

// Clear form and hide errors
const clearFormErrors = () => {
  editForm.reset();
  nameError.classList.add("hidden");
  descError.classList.add("hidden");
  fileInput.value = "";
};

// set up modal openers and closers
setupModalTrigger(editBtnEl, editModal);
setupModalClose(cancelBtn, editModal, clearFormErrors);
setupModalTrigger(newPostBtn, postModal);
setupModalClose(closePostModal, postModal);

// Close modal when clicking outside content
setupOutsideClickClose([postModal, editModal], clearFormErrors);

displayCards(".container");
updateEditForm();
previewableCards(".container");
createNewPost();
setAutoFocus(".container");
