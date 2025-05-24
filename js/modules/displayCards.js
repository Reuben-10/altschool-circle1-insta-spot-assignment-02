import { cardsData } from "../cards.js";
import { renderCard } from "../utils/render.js";
import { getEl } from "../utils/dom.js";

const style = document.createElement("style");
style.textContent = `
    .like-icon:focus {
      outline: none;
    }

    .like-icon.liked path {
      fill: red;
      stroke: red;
    }
      
    .card-img-container {
    overflow: hidden;
    }

  .card-img {
    transition: transform 0.3s ease-in-out;
  }

  .card.focused .card-img {
    transform: scale(1.1);
  }
  `;
document.head.appendChild(style);

// function to create and display cards inside a container
export function displayCards(containerSelector) {
  const container = getEl(containerSelector);
  if (!container) return;

  container.innerHTML = "";

  cardsData.forEach((card) => {
    container.insertAdjacentHTML("beforeend", renderCard(card));
  });

  // Event listener for toggling 'liked' class on like icons
  container.addEventListener("click", (e) => {
    const likeIcon = e.target.closest(".like-icon");
    if (likeIcon) {
      likeIcon.classList.toggle("liked");
    }
  });
}
