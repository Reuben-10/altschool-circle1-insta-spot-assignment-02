import { cardsData } from "./cards.js";

const modal = document.getElementById("postModal");
const postForm = document.getElementById("newPostForm");
const postImage = document.getElementById("postImage");
const titleInput = document.getElementById("post-title");
const titleError = document.getElementById("post-title-error");
const imgError = document.getElementById("post-img-error");
const customUpload = document.getElementById("customUpload");
const uploadPreview = document.getElementById("uploadPreview");
const uploadText = document.getElementById("uploadText");

// Handle upload box click
customUpload.addEventListener("click", () => {
  postImage.click();
});

// Handle image preview on file select
postImage.addEventListener("change", () => {
  const file = postImage.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      uploadPreview.src = e.target.result;
      uploadPreview.classList.remove("hidden");
      uploadText.classList.add("hidden");
    };
    reader.readAsDataURL(file);
  }
});

export function createNewPost() {
  postForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = titleInput.value.trim();

    if (!title) {
      titleError.classList.remove("hidden");
      return;
    }

    if (!postImage.files || !postImage.files[0]) {
      imgError.classList.remove("hidden");
      return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
      const imageDataUrl = e.target.result;

      // Add the new post to cardsData
      cardsData.unshift({
        imgSrc: imageDataUrl,
        imgAlt: title,
        title: title,
      });

      // Create new card element in DOM as before
      const newCard = document.createElement("div");
      newCard.className = "card";
      newCard.innerHTML = `
        <div class="card-img-container">
          <img class="card-img" src="${imageDataUrl}" alt="${title}" />
        </div>
        <div class="card-description">
          <p class="card-title">${title}</p>
           <div class="like">
            <svg
              class="like-icon"
              role="button"
              tabindex="0"
              width="23"
              height="20"
              viewBox="0 0 23 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Like button"
            >
              <path
                d="M15.9512 1.05664C17.3161 0.856584 18.8067 1.15981 20.1602 2.32812L20.4287 2.57324C22.6597 4.72264 22.3285 8.02556 20.5967 9.89355L20.4248 10.0693L11.5 18.6025L2.57422 10.0693H2.5752C0.754421 8.29659 0.296669 5.00618 2.36328 2.78516L2.57129 2.57324C3.99417 1.20243 5.593 0.843258 7.04883 1.05664C8.5402 1.27524 9.89546 2.09997 10.7266 3.11523L11.5 4.06055L12.2734 3.11523C13.1045 2.09997 14.4598 1.27524 15.9512 1.05664Z"
                stroke="#212121"
                stroke-width="2"
              />
            </svg>
          </div>
        </div>
      `;

      document.querySelector(".container").prepend(newCard);
      const newImg = newCard.querySelector(".card-img");
      // No need to call setupPreview() here because
      // the click event listener is delegated by previewableCards()

      modal.close();
      postForm.reset();

      // Reset preview box
      uploadPreview.classList.add("hidden");
      uploadPreview.src = "";
      uploadText.classList.remove("hidden");
    };
    reader.readAsDataURL(postImage.files[0]);
  });
}
