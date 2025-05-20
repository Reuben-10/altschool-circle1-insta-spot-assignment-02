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



