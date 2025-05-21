// Style for .liked class
const style = document.createElement("style");
style.textContent = `

  .like-icon {
    cursor: pointer;
    }
  
  .like-icon:focus {
    outline: none;
    }

  .like-icon.liked path {
    fill: red;
    stroke: red;
  }
    // transform: scale(1.2); Having this here will cause the icon to scale up when clicked
    // transition: transform 3s ease; 
  }
`;
document.head.appendChild(style);

// Cards Data
const cardsData = [
  {
    imgSrc: './assets/images/Card1.jpg',
    imgAlt: 'Snow-covered mountains in Val Thorens',
    title: 'Val Thorens',
  },
  {
    imgSrc: './assets/images/Card2.png',
    imgAlt: 'Restaurant terrace with a view',
    title: 'Restaurant terrace',
  },
  {
    imgSrc: './assets/images/Card3.png',
    imgAlt: 'Outdoor cafe with people',
    title: 'An outdoor cafe',
  },
  {
    imgSrc: './assets/images/Card4.png',
    imgAlt: 'A long bridge over a forest',
    title: 'A very long bridge, over the forest...',
  },
  {
    imgSrc: './assets/images/Card5.png',
    imgAlt: 'A man walking in a tunnel with morning light shining through',
    title: 'Tunnel with morning light',
  },
  {
    imgSrc: './assets/images/Card6.png',
    imgAlt: 'Mountain house',
    title: 'Mountain house',
  },
];

// function to create and display cards inside a container
function displayCards(containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  container.innerHTML = "";

  cardsData.forEach(card => {
    const cardHTML = `
      <article class="card">
        <div class="card-img-container">
          <img
            src="${card.imgSrc}"
            alt="${card.imgAlt}"
            class="card-img"
            loading="lazy"
          />
        </div>

        <div class="card-description">
          <p class="card-title">${card.title}</p>
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
      </article>
    `;
    container.insertAdjacentHTML("beforeend", cardHTML);
  });

  // Event listener for toggling 'liked' class on like icons
  container.addEventListener('click', (e) => {
    const likeIcon = e.target.closest('.like-icon');
    if (likeIcon) {
      likeIcon.classList.toggle('liked');
    }
  });
}
displayCards('.container');


// Store original values
let originalName = "Bessie Coleman";
let originalTitle = "Civil Aviator";
let originalBio = "LoremipsumdolorsitametconsecteturadipisicinAsperiores itaqueimpedittemporequiporro!Lorem ipsumdolsitametconsecteturadipisicingelitQuasimolestias";

// fuction to open the modal
function openEditModal(event) {
  // get the current profile values
  const name = document.getElementById("profileName").textContent;
  const title = document.getElementById("profileTitle").textContent;
  const bio = document.getElementById("profileBio").textContent;

  // Put those values into the input fields in the modal
  document.getElementById("editName").value = originalName;
  document.getElementById("editTitle").value = originalTitle;
  document.getElementById("editBio").value = originalBio;

  //show the modal
  document.getElementById("editModal").style.display = "block";
}

// fuction to hide the modal
function closeEditModal(event) {
  // hide the modal
  document.getElementById("editModal").style.display = "none";
}

// fuction to save changes to profile

function saveProfile(event) {
  // get new values from the input field
  const newName = document.getElementById("editName").value.trim();
  const newTitle = document.getElementById("editTitle").value.trim();
  const newBio = document.getElementById("editBio").value.trim();

  // validation: if any input field is empty, restore original values

  if (!newName || !newTitle || !newBio) {
    // alert("Some fields are empty. Restoring original values.");

    document.getElementById("profileName").textContent = originalName;
    document.getElementById("profileTitle").textContent = originalTitle;
    document.getElementById("profileBio").textContent = originalBio;

    closeEditModal();
    return;
  }

  // Update the profile display with new values

  document.getElementById("profileName").textContent = newName;
  document.getElementById("profileTitle").textContent = newTitle;
  document.getElementById("profileBio").textContent = newBio;

  // Change the image if the user selected one

  const fileInput = document.getElementById("editImage");

  if (fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("profileImage").src = e.target.result;
    };
    reader.readAsDataURL(fileInput.files[0]);
  }
  closeEditModal();
}

// function to close the modal onclick of the ESC key or clicking anywhere outside the modal 
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeEditModal();
    }
});

