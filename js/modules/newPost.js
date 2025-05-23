// Elinah - JavaScript for the modal
export function createNewPost() {
  const modal = document.getElementById("postModal");
  const newPostBtn = document.querySelector(".post-button");
  const closeModal = document.getElementById("closeModal");

  // Open modal
  newPostBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  // Close modal with close button
  closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // Close modal by clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });

  // Close modal with ESC key
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.classList.add("hidden");
    }
  });

  // Add new card on form submission
  document
    .getElementById("newPostForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      const imageInput = document.getElementById("image");
      const title = document.getElementById("title").value;

      // Check if an image file is selected
      if (imageInput.files.length === 0) {
        alert("Please upload an image.");
        return;
      }

      const file = imageInput.files[0];
      const reader = new FileReader();

      reader.onload = function (event) {
        const imageUrl = event.target.result; // Get the image data URL

        const newCard = document.createElement("div");
        newCard.className = "card";
        newCard.innerHTML = `
          <div class="card-img-container">
            
          </div>
          <div class="card-description">
            <p class="card-title">${title}</p>
            
          </div>
        `;

        document.querySelector(".container").prepend(newCard); // Add to top
        modal.classList.add("hidden");
        this.reset(); // Reset the form
      };

      reader.onerror = function () {
        alert("There was an error reading the file.");
      };

      reader.readAsDataURL(file); // Read the image file as a data URL
    });
}
