import { cardsData } from "../cards.js";
import { getEl } from "../utils/dom.js";
import { renderCard } from "../utils/render.js";
import { readFileAsDataURL } from "../utils/file.js";
import { validateInputField } from "../utils/modalHelpers.js";

const modal = getEl("#postModal");
const postForm = getEl("#newPostForm");
const postImage = getEl("#postImage");
const titleInput = getEl("#post-title");
const titleError = getEl("#post-title-error");
const imgError = getEl("#post-img-error");
const customUpload = getEl("#customUpload");
const uploadPreview = getEl("#uploadPreview");
const uploadText = getEl("#uploadText");

// Handle upload box click
customUpload.addEventListener("click", () => postImage.click());

// Handle image preview on file select
postImage.addEventListener("change", () => {
  const file = postImage.files[0];
  if (file) {
    readFileAsDataURL(file, (dataUrl) => {
      uploadPreview.src = dataUrl;
      uploadPreview.classList.remove("hidden");
      uploadText.classList.add("hidden");
    });
  }
});

function resetFormUI() {
  postForm.reset();
  uploadPreview.classList.add("hidden");
  uploadPreview.src = "";
  uploadText.classList.remove("hidden");
  titleError.classList.add("hidden");
  imgError.classList.add("hidden");
}

export function createNewPost() {
  postForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = titleInput.value.trim();
    const validTitle = validateInputField(titleInput, titleError);
    const file = postImage.files?.[0];

    if (!validTitle || !file) {
      if (!file) imgError.classList.remove("hidden");
      return;
    }

    readFileAsDataURL(file, (imageDataUrl) => {
      const newPost = {
        imgSrc: imageDataUrl,
        imgAlt: title,
        title,
      };

      cardsData.unshift(newPost);
      const newCard = renderCard(newPost);
      const container = getEl(".container");
      container.insertAdjacentHTML("afterbegin", newCard);
    });

    modal.close();
    resetFormUI();
  });
}
