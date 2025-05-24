import { displayCards } from "./modules/displayCards.js";
import { setAutoFocus } from "./modules/focusCard.js";
import { updateEditForm } from "./modules/profileEditor.js";
import { previewableCards } from "./modules/previewableCards.js";
import { createNewPost } from "./modules/newPost.js";

const modalEl = document.querySelector(".modal");
const editBtnEl = document.getElementById("editBtn");
const cancelBtn = document.getElementById("cancelBtn");

const modalPost = document.getElementById("postModal");
const newPostBtn = document.querySelector("#post-btn");
const closePostModal = document.getElementById("closeModal");

displayCards(".container");
updateEditForm();
previewableCards(".container");
createNewPost();
setAutoFocus(".container");

// Attach event listeners (ensure elements exist in HTML)
editBtnEl.addEventListener("click", () => {
  modalEl.showModal();
});
cancelBtn.addEventListener("click", () => modalEl.close());
newPostBtn.addEventListener("click", () => modalPost.showModal());
closePostModal.addEventListener("click", () => modalPost.close());

// Close modal by clicking outside
window.addEventListener("click", (e) => {
  if (e.target === modalPost || e.target === modalEl) {
    modalPost.close();
    modalEl.close();
  }
});
