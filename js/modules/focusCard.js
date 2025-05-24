export function setAutoFocus(containerSelector) {
  const container = document.querySelector(containerSelector);

  if (!container) return;

  const firstImgCard = container.querySelector(".card");
  if (firstImgCard) {
    firstImgCard.classList.add("focused");
  }

  container.addEventListener("mouseover", (e) => {
    const hoveredCard = e.target.closest(".card");
    if (hoveredCard) {
      // Remove focus from all cards
      container.querySelectorAll(".card").forEach((card) => {
        card.classList.remove("focused");
      });
      // Add focus to hovered card
      hoveredCard.classList.add("focused");
    }
  });

  container.addEventListener("mouseleave", () => {
    container.querySelectorAll(".card").forEach((card) => {
      card.classList.remove("focused");
    });
  });
}
