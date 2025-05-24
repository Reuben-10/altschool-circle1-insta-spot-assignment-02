import { cardsData } from "../cards.js";
import { renderPreviewCard } from "../utils/render.js";
import { getEl } from "../utils/dom.js";

export function previewableCards(containerSelector) {
  const container = getEl(containerSelector);
  const previewableModal = getEl(".previewable-modal");

  let modalOpen = false;
  let clickedImage = null;

  // Delegate click event to child images
  container.addEventListener("click", (event) => {
    const clickedImg = event.target.closest("img");
    if (!clickedImg) return; // Click wasn't on an image

    // Find the matching card data based on the clicked image src
    const clickedSrc = clickedImg.getAttribute("src");

    // Match using file name only
    const clickedFileName = clickedSrc.split("/").pop();
    const card = cardsData.find(
      (c) => c.imgSrc.split("/").pop() === clickedFileName
    );

    if (!card) {
      console.warn("No card found for image:", clickedSrc);
      return;
    }

    // Save the clicked image
    clickedImage = clickedImg;

    // Clear and show modal
    previewableModal.innerHTML = "";
    previewableModal.showModal();
    modalOpen = true;

    // Add body click listener (delayed to skip the current click)
    setTimeout(() => {
      previewableModal.classList.add("show");
      document.body.addEventListener("click", bodyClickHandler);
    }, 0);

    // Create and insert the clicked card preview
    const displayPreviewableCard = document.createElement("div");
    displayPreviewableCard.innerHTML = renderPreviewCard(card);
    previewableModal.appendChild(displayPreviewableCard);

    // Close icon
    const deleteIcon = document.createElement("img");
    deleteIcon.src = "./assets/icons/x-close-delete-svgrepo-com.svg";
    deleteIcon.classList.add("delete-icon");
    deleteIcon.addEventListener("click", () => {
      closeModal();
    });
    previewableModal.appendChild(deleteIcon);
  });

  // Close when clicking outside modal content
  function bodyClickHandler(event) {
    const isInsideModal = event.target.closest(".previewable-images");
    const isOriginalImage = clickedImage && event.target === clickedImage;

    if (!isInsideModal && !isOriginalImage) {
      closeModal();
    }
  }

  function closeModal() {
    if (!modalOpen) return;
    modalOpen = false;
    previewableModal.close();
    previewableModal.classList.remove("show"); // reset animation state
    document.body.removeEventListener("click", bodyClickHandler);
    clickedImage = null;
  }
}
