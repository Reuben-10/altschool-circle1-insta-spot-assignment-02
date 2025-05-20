// Style for .liked class
const style = document.createElement("style");
style.textContent = `
  .like-icon.liked path {
    fill: red;
    stroke: red;
    // transform: scale(1.2); Having this here will cause the icon to scale up when clicked
    // transition: transform 3s ease; 
  }
`;
document.head.appendChild(style);

// Adding event listeners to like icons
const likeIcons = document.querySelectorAll(".like-icon");
likeIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.classList.toggle("liked");
  });
});
