//Elinah- JavaScript for the modal 
  const modal = document.getElementById("postModal");
  const newPostBtn = document.querySelector(".button button");
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
  document.getElementById("newPostForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const imageUrl = document.getElementById("image").value;
    const title = document.getElementById("title").value;

    const newCard = document.createElement("div");
    newCard.className = "card";
    newCard.innerHTML = `
      <div class="card-img-container">
        <img class="card-img" src="${imageUrl}" alt="${title}" />
      </div>
      <div class="card-description">
        <p class="card-title">${title}</p>
        <img class="like-icon" src="./assets/icons/Union.svg" alt="heart icon" />
      </div>
    `;

    document.querySelector(".container").prepend(newCard); // Add to top
    modal.classList.add("hidden");
    this.reset();
  });

