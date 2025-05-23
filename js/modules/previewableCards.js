import { cardsData } from "./cards.js";

export function previewableCards(containerSelector) {
  const container = document.querySelector(containerSelector);
  const previewableModal = document.querySelector(".previewable-modal");
  
  let modalOpen = false;
  let clickedImage = null;

  // Delegate click event to child images
  container.addEventListener("click", (event) => {
    const clickedImg = event.target.closest("img");
    if (!clickedImg) return; // Click wasn't on an image

    // Find the matching card data based on the clicked image src
    const clcikedSrc = clickedImg.getAttribute("src");
    const card = cardsData.find((c) => c.imgSrc === clcikedSrc);

    if (!card) return;

    // Save the clicked image
    clickedImage = clickedImg;

    //to show the previewable images when the images are clicked
    previewableModal.style.display = "block";
    previewableModal.innerHTML = "";
    modalOpen = true;

    // Add body click listener (delayed to skip the current click)
    setTimeout(() => {
      previewableModal.classList.add("show");
      document.body.addEventListener("click", bodyClickHandler);
    }, 0);

    // Create and insert the clicked card preview
    const displayPreviewableCard = document.createElement("div");
    displayPreviewableCard.innerHTML = `
    <div class="previewable-images">
    <div class="card-img">
    <img 
     src="${card.imgSrc}"
    alt="${card.imgAlt}"
    />
    </div>
    <p class="previewable-title">${card.title}</p>
    
    </div>
    `;
    previewableModal.appendChild(displayPreviewableCard);

    // create a delete icon
    const deleteIcon = document.createElement("img");
    deleteIcon.src = "./assets/icons/x-close-delete-svgrepo-com.svg";
    deleteIcon.classList.add("delete-icon");
    previewableModal.appendChild(deleteIcon);

    // it deletes the images when the delete icon is pressed
    deleteIcon.addEventListener("click", () => {
      closeModal();
    });
  });

  // It deletes when the esc key is clicked
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });

  // Body click handler
  // it deletes when the user clicks on the outside
  function bodyClickHandler(event) {
    const isInsideModal = event.target.closest(".previewable-images");
    const isOriginalImage = clickedImage && event.target === clickedImage;

    if (!isInsideModal && !isOriginalImage) {
      closeModal();
    }
  }

  //closes modal
  function closeModal() {
    if (!modalOpen) return;
    modalOpen = false;
    previewableModal.style.display = "none";
    previewableModal.classList.remove("show"); // reset animation state
    document.body.removeEventListener("click", bodyClickHandler);
    clickedImage = null;
  }
}
