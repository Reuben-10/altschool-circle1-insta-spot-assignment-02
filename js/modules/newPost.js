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
      const newCard = document.createElement("div");
      newCard.className = "card";
      newCard.innerHTML = `
        <div class="card-img-container">
          <img class="card-img" src="${e.target.result}" alt="${title}" />
        </div>
        <div class="card-description">
          <p class="card-title">${title}</p>
          <img class="like-icon" src="./assets/icons/Union.svg" alt="heart icon" />
        </div>
      `;

      document.querySelector(".container").prepend(newCard); // Add to top
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
